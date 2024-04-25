"use client";

import { useSearchParams } from "next/navigation";

import RequestReset from "@/components/password-reset-page/RequestReset";
import ResetPassword from "@/components/password-reset-page/ResetPassword";

export default function ResetPasswordPage() {
  const token: string | null = useSearchParams().get("token");

  return token === null ? <RequestReset /> : <ResetPassword token={token} />;
}
