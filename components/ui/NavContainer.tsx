"use client";
import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/lib/context/appContext";

const NavContainer = () => {
  const {combinedSocialLinkData} = useAppContext();
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      if (pathname === "/") {
        setActiveHash("#about");
      } else {
        setActiveHash(window.location.hash);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return (
    <div className="flex-between h-full py-4 px-6">
      {/* Logo Start */}
      <div>
        <Link
          href="/"
          aria-label="Home"
          className="flex-center gap-2 text-white bg-transparent"
        >
          <Image src="/favicon.svg" width={36} height={36} alt="logo" />
          <span
            className="text-[23px] font-medium leading-normal"
            style={{
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.32) 0%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rifaj.dev
          </span>
        </Link>
      </div>
      {/* Logo End */}

      {/* Nav Links Start */}
      <ul className="hidden xl:flex">
        {navItems.map(({ label, route }) => {
          const isActive = activeHash === route;

          return (
            <li key={route}>
              <Link
                href={route}
                className={`text-base font-normal py-2 px-4 rounded hover:text-white transition-all !duration-300 ${
                  isActive ? "text-white" : "text-[#FFFFFF80]"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Nav Links End */}

      {/* Nav Social Links Start */}
      <ul className="hidden md:flex gap-4 text-white">
        {combinedSocialLinkData.map(({ id, link, icon: Icon }) => (
          <li key={id}>
            <Link
              href={link}
              className="flex items-center gap-2 hover:text-primary-2 transition"
              target="_blank"
            >
              <Icon size={18} className="text-xl" />
            </Link>
          </li>
        ))}
      </ul>
      {/* Nav Social Links End */}
    </div>
  );
};

export default NavContainer;
