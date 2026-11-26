@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo [Dream Milestone] 실행 중인 서버(포트 3000)를 종료합니다...

for /f "tokens=5" %%a in ('netstat -ano ^| findstr /R /C:":3000 .*LISTENING"') do (
  echo - PID %%a 및 하위 프로세스 종료 중...
  taskkill /PID %%a /T /F >nul 2>&1
)

taskkill /FI "WINDOWTITLE eq DreamMilestoneServer*" /T /F >nul 2>&1

ping -n 2 127.0.0.1 >nul
netstat -ano | findstr /R /C:":3000 .*LISTENING" >nul 2>&1
if errorlevel 1 (
  echo [Dream Milestone] 서버 종료 및 메모리 상주 해제 완료.
) else (
  echo [WARNING] 포트 3000이 아직 점유되어 있습니다. 관리자 권한 실행이 필요할 수 있습니다.
)
