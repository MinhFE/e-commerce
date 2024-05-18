"use client";

import { clientSessionToken } from "@/lib/http";
import { useState } from "react";

export default function AppProvider({
  children,
  initialSessionToken = "",
}: Readonly<{
  children: React.ReactNode;
  initialSessionToken?: string;
}>) {
  useState(() => {
    if (typeof window !== "undefined") {
      clientSessionToken.value = initialSessionToken;
    }
  });

  return <>{children}</>;
}
