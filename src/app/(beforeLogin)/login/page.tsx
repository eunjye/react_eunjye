// import { redirect } from "next/navigation";
'use client';

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import BeforeLoginHome from "@/app/(beforeLogin)/_component/BeforeLoginHome";

export default function Login(){
  // redirect('/i/flow/login');
  const router:AppRouterInstance = useRouter();
  router.replace('/i/flow/login');
  return <BeforeLoginHome />
}