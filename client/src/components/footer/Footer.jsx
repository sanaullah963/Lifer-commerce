import Image from "next/image";

import logoWithIcon from "@/image/logotwo.png";
import googlePlay from "@/image/googlePlay.jpg";
import React from "react";
import Container from "../Container";
import FooterHeadding from "./FooterHeadding";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
function Footer() {
  return (
    <main className="bg-yellow-300 py-10">
      <Container className={"px-8 my-0"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
          {/* col 1 */}
          <div className="">
            <Image src={logoWithIcon} alt="logo" className="w-2/3" />
            <p className="">
              Largest product search engine, maximum categorized online shopping
              mall and quickest home delivery system.
            </p>
          </div>
          <div className="">
            <FooterHeadding headding={"contact us"} />
            <p>House #8, Road # 14, Dhanmondi, Dhaka-1209.</p>
            <p className="mt-5">Email: support@lifer-bd.com</p>
          </div>
          <div className="">
            <FooterHeadding headding={"follow us"} />
            <div className="flex gap-2 text-3xl">
              <Link href={""}>
                <FaLinkedin />
              </Link>
              <Link href={""}>
                <FaFacebookSquare />
              </Link>
              <Link href={""}>
                <FaSquareInstagram />
              </Link>
              <Link href={""}>
                <IoLogoYoutube />
              </Link>
            </div>
          </div>
          {/* col 4 */}
          <div className="">
            <FooterHeadding headding={"get lifeR app"} />
            <Image src={googlePlay} alt="google Play" className="w-1/2" />
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Footer;
