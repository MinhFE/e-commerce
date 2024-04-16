import React from "react";

function LoginLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main>{children}</main>;
}

export default LoginLayout;
