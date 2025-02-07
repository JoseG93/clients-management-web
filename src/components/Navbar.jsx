"use client";
import Link from "next/link";
import Image from "next/image";
import companyLogo from "../../public/rm-logo.png";

export default function Navbar() {
  return (
    <nav className="flex flex-no-wrap items-center justify-between px-2 bg-slate-800">
      <div className="container px-4 mx-auto flex justify-between items-center align-middle py-3">
        <div className="flex gap-3 items-center">
          <Image
            className="h-10 w-10 rounded-md"
            src={companyLogo}
            alt="Radio Marina"
          />
          <Link href="/">
            <h3 className="text-slate-300 font-bold text-2xl hover:text-white">
              Radio Marina
            </h3>
          </Link>
        </div>
        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link className="text-slate-300 hover:text-white" href="/">
              Clientes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
