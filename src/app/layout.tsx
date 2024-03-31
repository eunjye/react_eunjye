import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        루트 레이아웃
        {children}
      </body>
    </html>
  );
}
