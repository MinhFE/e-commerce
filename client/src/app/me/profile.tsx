"use client";

import accountApiRequest from "@/api/account";
import { handleErrorApi } from "@/lib/utils";
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        await accountApiRequest.meClient();
      } catch (error) {
        handleErrorApi({
          error,
        });
      }
    };
    fetchRequest();
  }, []);
  return <div>Profile</div>;
}
