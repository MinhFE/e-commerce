import LoginForm from "@/app/(auth)/login/login-form";
import React from "react";

function LoginPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Login</h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
