import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '삼코동 · Dream Milestone 코칭 포털',
  description: '삼성코칭동호회(SCC) 대학생·대학원생 맞춤형 5회기 다회기 커리어 코칭 가이드북 및 운영 툴킷',
  robots: {
    index: false,
    follow: false
  }
};

const THEME_INIT_SCRIPT = `
try {
  var saved = localStorage.getItem('scd.theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
} catch (e) {}
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="light" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
