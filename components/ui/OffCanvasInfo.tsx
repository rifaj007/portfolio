import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { RiFacebookCircleFill, RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

interface OffCanvasInfoProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OffCanvasInfo: React.FC<OffCanvasInfoProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* offcanvas menu */}
      <div
        className={`bg-neutral-1000 h-full p-[30px] fixed left-0 top-0 transition-transform !duration-300 ease-custom-ease overflow-y-scroll w-[340px] z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ scrollbarWidth: "none" }}
      >
        {/* offcanvas icon start */}
        <div className="-mt-4 text-right">
          <button
            className="text-primary-2 bg-transparent border-none cursor-pointer text-xl p-0"
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine size={25} />
          </button>
        </div>

        {/* offcanvas content */}
        <div className="mb-8">
          <h3 className="h3 mb-0">Get in touch</h3>
        </div>

        <div className="border-t border-primary-2 mb-[30px] pt-[25px]">
          {/* Contact details */}
          <div className="mb-[30px]">
            <p className="font-medium mb-8 text-neutral-200 text-base !leading-[26px]">
              I&apos;m always excited to take on new projects and collaborate with innovative minds.
            </p>
            <div className="mb-4">
              <span className="text-neutral-400 text-[19px]">Phone Number</span>
              <p className="mb-0">+8801601016160</p>
            </div>
            <div className="mb-4 overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
              <span className="text-neutral-400 text-[19px]">Email</span>
              <p className="mb-0">mdrifajulislamrifaj.contact@gmail.com</p>
            </div>
            <div className="mb-4">
              <span className="text-neutral-400 text-[19px]">Skype</span>
              <p className="mb-0">RifajulDeveloper</p>
            </div>
            <div className="mb-4">
              <span className="text-neutral-400 text-[19px]">Address</span>
              <p className="mb-0">Satkhira, Khulna-9000, Bangladesh</p>
            </div>
          </div>

          {/* Social contact list */}
          <div className="contact-list">
            <p className="text-neutral-400 text-[19px] mb-2">Social</p>
            <div className="md:flex items-center hidden gap-4 text-neutral-0">
              <a
                className="transition-all duration-300 hover:text-primary-2"
                href="http://facebook.com"
              >
                <RiFacebookCircleFill className="w-[18px] h-[25px]" />
              </a>
              <a
                className="transition-all duration-300 hover:text-primary-2"
                href="http://twitter.com"
              >
                <RiTwitterXFill className="w-[18px] h-[25px]" />
              </a>
              <a
                className="transition-all duration-300 hover:text-primary-2"
                href="http://linkedin.com"
              >
                <RiLinkedinFill className="w-[18px] h-[25px]" />
              </a>
              <a
                className="transition-all duration-300 hover:text-primary-2"
                href="http://github.com"
              >
                <RiGithubFill className="w-[18px] h-[25px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* offcanvas overlay */}
      {isOpen && (
        <div
          className="fixed bg-black top-0 left-0 h-full w-full z-40 transition-all !duration-300 opacity-70"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default OffCanvasInfo;