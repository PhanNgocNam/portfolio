import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const WelcomeSectionContainer = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full px-10 flex-col h-[38rem] flex items-center pt-[7rem] box-border text-left text-[1.56rem] text-gray-100 mx-auto justify-between md:flex-row md:h-fit lg:h-[38rem]"
    >
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start">
          <div className="text-[1rem] mb-2 lg:text-[1.2rem]">About me</div>
          <b className="flex flex-col items-start w-full text-[2rem] gap-2 lg:text-[4rem]">
            <p className="m-0">Hi I’m</p>
            <p className="m-0 text-royalblue-200 sm:text-[2.1rem] lg:text-[4.2rem]">
              Phan Ngọc Nam
            </p>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Node + React developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web developer",
                1000,
              ]}
              wrapper="p"
              speed={50}
              style={{
                fontSize: ".6em",
                display: "inline-block",
                lineHeight: 0,
              }}
              repeat={Infinity}
            />
          </b>
          <div className="w-fit text-[1rem] italic pt-2 lg:text-[1.4rem]">
            "The journey of a thousand miles begins with one step"
          </div>
        </div>
      </div>
      <div className="rounded-full relative w-[18rem] h-[18rem] overflow-hidden border border-solid border-gray-100/20 mt-4 lg:w-[28rem] lg:h-[28rem]">
        <img
          className="rounded-full w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="avatar"
          src="/header-img.svg"
        />
      </div>
    </section>
  );
});

export default WelcomeSectionContainer;
