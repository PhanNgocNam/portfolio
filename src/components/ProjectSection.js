import React from "react";
import { projectItems } from "../items/project-items";

const Projects = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-start gap-[3.13rem] text-center text-[1.2rem] text-gray-100 mb-[100px] px-7 pt-[100px]"
    >
      <div className="relative w-full h-fit">
        <div className="text-[1rem] font-bold text-center uppercase text-royalblue-100">
          My projects
        </div>
        <h1 className="m-0 text-center text-[1.6rem] leading-[3.13rem] font-bold font-inherit">
          My great works
        </h1>
      </div>

      <div className="flex flex-row items-center justify-start gap-[1.88rem] overflow-x-scroll w-full md:overflow-hidden">
        {projectItems?.map((item) => (
          <div
            className="flex justify-center flex-col p-2 w-[80%] h-[30%] border border-solid border-gray-100/30 rounded-lg md:w-1/3 md:h-[30%] lg:w-[30%] relative 
            hover:scale-[1.009]"
            key={item.projectID}
          >
            <a
              href={item.link}
              target="_blank"
              className="absolute top-0 left-0 right-0 bottom-0"
            />
            <img alt={item.title} src={item.url} className="p-1 rounded-lg" />
            <div className="text-left pt-2">
              <p className="text-xl pl-1">{item.title}</p>
              {item.techUseInProject?.map((tech, index) => (
                <p
                  className={`text-sm m-0 p-1`}
                  style={{
                    background: !(index % 2)
                      ? "rgba(204, 255, 255,.3)"
                      : "white",
                  }}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
