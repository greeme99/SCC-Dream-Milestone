@echo off
chcp 65001 >nul
cd /d "%~dp0"

where npm >nul 2>&1
if not errorlevel 1 goto check_port
set "PATH=C:\nvm4w\nodejs;C:\Users\%USERNAME%\AppData\Local\nvm;%PATH%"

where npm >nul 2>&1
if not errorlevel 1 goto check_port
echo [ERROR] npm을 찾을 수 없습니다. Node.js 설치 경로를 확인하세요.
pause
exit /b 1

:check_port
netstat -ano | findstr /R /C:":3000 .*LISTENING" >nul 2>&1
if not errorlevel 1 goto already_running

echo [Dream Milestone] 로컬 서버를 시작합니다...
start "DreamMilestoneServer" /min cmd /c npm run dev

echo [Dream Milestone] 서버 준비 대기 중 (http://localhost:3000)...
powershell -NoProfile -Command "$deadline = (Get-Date).AddSeconds(45); while ((Get-Date) -lt $deadline) { try { $c = New-Object Net.Sockets.TcpClient('127.0.0.1', 3000); $c.Close(); exit 0 } catch {}; Start-Sleep -Milliseconds 500 }; exit 1"
if errorlevel 1 (
  echo [WARNING] 서버 응답 대기가 시간 초과되었습니다. 브라우저를 열어 확인합니다.
)
goto open_browser

:already_running
echo [Dream Milestone] 포트 3000에 이미 서버가 실행 중입니다.

:open_browser
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
  start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "http://localhost:3000"
  goto done
)
if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
  start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "http://localhost:3000"
  goto done
)
start "" chrome "http://localhost:3000" 2>nul || start "" "http://localhost:3000"

:done
echo [Dream Milestone] 크롬 브라우저를 열었습니다.
