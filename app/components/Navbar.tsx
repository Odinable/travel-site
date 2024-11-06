"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/redlogo.svg"
          alt="image logo"
          width={94}
          height={24}
          className="rounded-2xl"
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flexCenter regular-16 pb-1.5 text-gray-50 transition-all hover:font-bold hover:text-red-500 cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Log in"
          icon="/user.svg"
          variant="btn_dark_red"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden inline-block cursor-pointer"
        onClick={() => setMenuOpen(!MenuOpen)}
      />

      {MenuOpen && (
        <div
          className="absolute top-full left-0 w-full h-[calc(100vh-64px)] bg-black/50 backdrop-blur-sm z-20"
          onClick={() => setMenuOpen(false)} // Close the menu when clicking on the overlay
        ></div>
      )}

      <div
        className={`absolute top-32 right-0 bg-slate-100 w-full flex flex-col items-center gap-6 font-semibold text-lg transition-opacity duration-300 z-30 ${
          MenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <li className="list-none w-full text-center p-6 hover:bg-red-500 hover:text-white transition-all cursor-pointer">
          Home
        </li>
        <li className="list-none w-full text-center p-6 hover:bg-red-500 hover:text-white transition-all cursor-pointer">
          How Hilink Work?
        </li>
        <li className="list-none w-full text-center p-6 hover:bg-red-500 hover:text-white transition-all cursor-pointer">
          Services
        </li>
        <li className="list-none w-full text-center p-6 hover:bg-red-500 hover:text-white transition-all cursor-pointer">
          Pricing
        </li>
        <li className="list-none w-full text-center p-6 hover:bg-red-500 hover:text-white transition-all cursor-pointer">
          Contact Us
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
