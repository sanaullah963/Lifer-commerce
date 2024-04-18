"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function verifyToken() {
  const token = Cookies.get("token");
  const router = useRouter();
  useEffect(() => {
    if (token) {
      const verToken = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/uaer/verify-token`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.data.user) {
          router.push("/");
        }
      };
      verToken();
    }
  }, []);
}

export default verifyToken;
