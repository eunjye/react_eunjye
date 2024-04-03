import { ReactNode } from "react";

export default function Layout({children}: {children: ReactNode}) {
  return (
    <div>
      로그인 후 페이지
      {children}
    </div>
  )
}