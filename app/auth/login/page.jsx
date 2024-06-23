import React from "react";
import Link from "next/link";
import { SiteLogo } from "@/components/svg";
import LoginForm from "./form/loginForm";

export const metadata = {
  title: "Sign In",
};
const LoginPage = () => {
  return (
    <div className="w-full py-10">
      <Link href="/" className="inline-block">
        <SiteLogo className="h-15 w-15 2xl:w-15 2xl:h-15 text-primary" />
      </Link>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
        Halo 👋
      </div>
      <div className="2xl:text-lg text-base text-default-600 mt-2 leading-6">
        Selamat Datang di Sistem Inovasi Kota Surabaya(INOVBOYO).
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
