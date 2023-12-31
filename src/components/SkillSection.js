import React from "react";
import { skillItems } from "../items/skill-items";

const SkillSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-10 pt-[100px]">
      <h1 className="text-center text-[1rem] uppercase pb-4 text-royalblue-100">
        My Skills
      </h1>
      <div className="grid grid-cols-3 grid-rows-4 gap-2 md:grid-cols-6 md:grid-rows-2 lg:flex lg:flex-wrap lg:gap-0 lg:gap-y-4 lg:justify-between">
        {skillItems?.map((item, index) => (
          <div
            key={index}
            className={`${item.style} flex flex-col items-center cursor-help lg:w-[20%] lg:border lg:border-solid lg:py-4 lg:border-gray-100/10 lg:rounded-lg`}
          >
            <img
              alt={item.title}
              src={item.url}
              className="w-[80px] h-[80px] object-fit mb-2 md:w-[60px] md:h-[60px]"
            />
            <h1 className="text-sm">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
});

export default SkillSection;
