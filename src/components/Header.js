import { useState } from "react";
import { headerItems } from "../items/header-items";
import { HiMenuAlt1 } from "react-icons/hi";
import { motion } from "framer-motion";
import { ImCancelCircle } from "react-icons/im";

const AeroVisionHeader = ({ setSectionFlag, sectionFlag }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <header className="fixed top-[0] left-[0] right-0 px-10 flex items-center justify-between py-[1rem] box-border text-left text-[1.56rem] text-darkslategray font-zen-kaku-gothic-antique bg-white z-10 border-b border-solid border-gray-100/10">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[3.13rem] h-[3.13rem]"
            alt=""
            src="/group-8.svg"
          />
          <div className="hidden md:block relative leading-[1.56rem] font-black">
            Ngoc Nam
          </div>
        </div>
        <div className="hidden md:flex flex-row items-center justify-end">
          <nav className="m-0 flex flex-row items-start justify-start gap-[2.5rem] text-left text-[1.13rem] text-darkslategray">
            {headerItems?.map((item, index) => (
              <a
                onClick={() => setSectionFlag(index + 1)}
                key={index}
                className={`cursor-pointer  border-solid ${
                  index + 1 === sectionFlag
                    ? "border-royalblue-100/90 border-b-2"
                    : null
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <button className="w-8 h-8 rounded-full z-20 md:hidden">
          {openDrawer ? (
            <ImCancelCircle size={20} onClick={() => setOpenDrawer(false)} />
          ) : (
            <HiMenuAlt1
              size={20}
              onClick={() => setOpenDrawer((pre) => !pre)}
            />
          )}
        </button>
      </header>
      {openDrawer ? (
        <motion.div
          initial={{ x: "180%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.2 }}
          className={`w-[70%] h-[100dvh] fixed top-0 z-30 bg-royalblue-100/90 rounded-lg p-4`}
        >
          {headerItems?.map((item, index) => (
            <div
              onClick={() => setSectionFlag(index + 1)}
              tabIndex={1}
              key={index}
              className={`py-3 px-2 rounded-sm font-bold focus:text-black text-white/90 ${
                index % 2 ? "bg-white/20" : null
              }`}
            >
              {item}
            </div>
          ))}
        </motion.div>
      ) : null}
      {/* {openDrawer && (
        <div
          className="w-full h-[100dvh] bg-black/30 z-20 fixed top-0 left-0"
          onClick={() => setOpenDrawer(false)}
        >
          overlay
        </div>
      )} */}
    </>
  );
};

export default AeroVisionHeader;
