'use client'
import { navItems } from "@/constants";
import { useAppContext } from "@/lib/context/appContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const {combinedSocialLinkData} = useAppContext();

  return (
    <footer className="relative">
      <div className="container relative z-10 border-t border-border-1 pb-2 pt-6">
        <div className="text-center">
          {/* Footer Logo Start */}
          <Link
            href="/"
            aria-label="Home"
            className="flex-center gap-2 text-white bg-transparent mb-4"
          >
            <Image src="/favicon.svg" width={36} height={36} alt="logo" />
            <span
              className="text-[23px] font-medium leading-normal"
              style={{
                background: "var(--linear-5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Rifaj.dev
            </span>
          </Link>
          {/* Footer Logo End */}

          {/* Social Contacts List Start */}
          <div className="flex justify-center">
            <div className="flex items-center gap-4 text-neutral-0">
              {combinedSocialLinkData.map(({ id, link, icon: Icon }) => (
                <Link
                  key={id}
                  className="transition-all duration-300 hover:text-primary-2"
                  href={link}
                  target="_blank"
                >
                  <Icon size={18} className="text-xl" />
                </Link>
              ))}
            </div>
          </div>
          {/* Social Contacts List End */}

          {/* Footer Nav Links Start */}
          <ul className="flex flex-wrap items-center gap-6 justify-center py-6">
            {navItems.map(({ label, route }) => (
              <li key={route}>
                <Link
                  href={route}
                  className="text-base font-normal py-2 rounded hover:text-white transition-all !duration-300 text-neutral-0"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Footer Nav Links End */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
