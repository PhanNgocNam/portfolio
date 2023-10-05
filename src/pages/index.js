import Header from "../components/Header";
import WelcomeSectionContainer from "../components/WelcomeSectionContainer";
import ProjectSection from "../components/ProjectSection";
import ContactForm from "../components/ContactForm";
import SkillSection from "../components/SkillSection";
import { useState, useRef, useEffect } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { Drawer } from "antd";

const Home = () => {
  const [sectionFlag, setSectionFlag] = useState(1);
  const ref_1 = useRef(1);
  const ref_2 = useRef(2);
  const ref_3 = useRef(3);
  const ref_4 = useRef(4);

  useEffect(() => {
    sectionFlag === 1 && ref_1.current.scrollIntoView({ behavior: "smooth" });
    sectionFlag === 2 && ref_2.current.scrollIntoView({ behavior: "smooth" });
    sectionFlag === 3 && ref_3.current.scrollIntoView({ behavior: "smooth" });
    sectionFlag === 4 && ref_4.current.scrollIntoView({ behavior: "smooth" });
  }, [sectionFlag]);

  return (
    <div className="relative bg-white w-full h-fit overflow-hidden m-w-[1200px] mx-auto">
      <button
        className="h-10 w-10 rounded-full animate-bounce cursor-pointer bg-red-600 fixed bottom-4 right-10 z-10"
        onClick={() => {
          ref_1.current.scrollIntoView({ behavior: "smooth" });
          setSectionFlag(1);
        }}
      >
        <BiUpArrowAlt size={20} />
      </button>
      <Header setSectionFlag={setSectionFlag} sectionFlag={sectionFlag} />
      <WelcomeSectionContainer ref={ref_1} />
      <SkillSection ref={ref_2} />
      <ProjectSection ref={ref_3} />
      <ContactForm ref={ref_4} />
    </div>
  );
};

export default Home;
