"use client";
import { useState } from "react";
import Navbar from "./ui/Navbar";
import OffCanvasInfo from "./ui/OffCanvasInfo";
import MobileNav from "./ui/MobileNav";

const Header = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false); // for navbar menu
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // for mobile nav

  return (
    <header className="pb-32">
      <div
        className="h-full w-full absolute left-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "var(--hero-bg-img)" }}
      >
        <div className="container">
          {/* navbar start */}
          <Navbar
            setIsOffCanvasOpen={setIsOffCanvasOpen}
            setIsMobileNavOpen={setIsMobileNavOpen}
          />
          {/* navbar end */}
        </div>
      </div>

      {/* offcanvas info */}
      <OffCanvasInfo isOpen={isOffCanvasOpen} setIsOpen={setIsOffCanvasOpen} />

      {/* MobileNav */}
      {isMobileNavOpen && <MobileNav setIsMobileNavOpen={setIsMobileNavOpen} />}
    </header>
  );
};

export default Header;
