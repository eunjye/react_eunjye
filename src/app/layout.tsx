import { Inter } from "next/font/google";
import "./globals.css"; // .module이 들어있지않으면, 모든 페이지에 적용되는 css

const inter = Inter({ subsets: ['latin'] });

export const Metadata = {
  title: 'Next App',
  description: 'Desc',
}

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({
  children
}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
