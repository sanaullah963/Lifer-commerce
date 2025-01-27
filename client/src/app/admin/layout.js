"use client";
import { adminArray } from "@/constant/data";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const userData = async () => {
  const token = Cookies.get("clientToken");
  if (token) {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/user/user-name`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      console.log("data fatching error");
    }
  }
};

const layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await userData();
      const isAdmin = adminArray.some(
        (admin) => admin === fetchedUser?.numberORemail
      );
      if (!isAdmin) {
        router.push("/");
      }
    };

    fetchData();
  }, [router]);

  return <main>{children}</main>;
};
export default layout;
