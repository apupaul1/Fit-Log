"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinksProps {
  href: string;
  children: React.ReactNode;
}

const NavLinks = ({ href, children }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <Link className={` ${pathname === href ? "bg-[#1A2312] text-[#C2F800] rounded-3xl py-2" : ""} font-semibold`} href={href}>
      {children}
    </Link>
  );
};

export default NavLinks;
