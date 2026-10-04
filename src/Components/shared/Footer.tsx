import React from "react";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal items-center p-4 py-7 border-t border-[#20242E]">
        <aside className="grid-flow-col items-center">
          <h1>
            <Link
              href={"/"}
              className="font-bold text-xl tracking-wider inline-flex gap-1"
            >
              <Image src={Logo} alt="logo"></Image>
              FITLOG
            </Link>
          </h1>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end  text-[#9CA3AF]">
          <p>
            © {new Date().getFullYear()} FitLog — Workout Library. Train hard,
            log honest.
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
