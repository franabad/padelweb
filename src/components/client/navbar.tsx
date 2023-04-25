"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "/assets/logo.svg";
import NavLinks from "./navlinks";
import Button from "./button";

const NavBar = () => {
  return (
    <nav className="bg-slate-400">
      <div className="flex items-center justify-around">
        <ul className="flex uppercase items-center gap-80">
          <li className="mr-6">
            <Link href="/" className="px-4 py-2 hover:text-white">
              Inicio
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about" className="px-4 py-2 hover:text-white">
              Nosotros
            </Link>
          </li>
        </ul>
        <div>
          <a href="/">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </a>
        </div>
        <ul className="flex uppercase items-center gap-80">
          <li className="relative">
            <NavLinks />
          </li>
          <li className="mr-6">
            <Link href="/faq" className="px-4 py-2 hover:text-white">
              FAQ
            </Link>
          </li>
          <li className="relative">
            <Button />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;