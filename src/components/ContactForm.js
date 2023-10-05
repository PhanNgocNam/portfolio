import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "../utils/validateFunction";
import { post } from "../utils/post";
import { FiSend } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { SiZalo } from "react-icons/si";

const ContactForm = React.forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const notify = async () => {
    if (!name)
      return toast.warn("Name is required!", {
        position: toast.POSITION.TOP_CENTER,
      });
    if (!email)
      return toast.warn("Email is required!", {
        position: toast.POSITION.TOP_CENTER,
      });
    if (!msg)
      return toast.warn("Message is required!", {
        position: toast.POSITION.TOP_CENTER,
      });
    const result = validate(email, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (!result)
      return toast.warn("Invalid email!", {
        position: toast.POSITION.TOP_CENTER,
      });
    try {
      const data = await post("http://localhost:8080/message", {
        name,
        email,
        message: msg,
      });
      setEmail("");
      setName("");
      setMsg("");
      if (data?.code === 200) return toast.success("I'll contact you soon!");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <section
      ref={ref}
      className="relative bg-royalblue-200 w-full text-center text-[2rem] text-white py-[100px] overflow-hidden"
    >
      <div className="hidden lg:block lg:absolute top-[-1rem] right-10 rounded-[50%] bg-royalblue-200 box-border h-[38rem] border-[70px] border-solid border-gray-200" />
      <div className="hidden lg:block lg:absolute top-[40px] left-[1rem] rounded-[50%] bg-royalblue-200 box-border w-[12rem] h-[12rem] border-[40px] border-solid border-gray-200" />

      <div className="text-center text-[1.25rem] tracking-[0.1em] uppercase  text-lavender">
        contact me
      </div>

      <div className="flex flex-col items-center mx-10 justify-start pt-[0.63rem] pb-[3.13rem] gap-[1.88rem] text-left text-[1rem] text-darkslategray md:flex-row md:items-start md:pt-10 lg:px-[160px]">
        <div className="rounded-mini bg-white w-full h-[17rem] flex flex-col items-start justify-start p-[1.88rem] box-border gap-[2.5rem]">
          <b className="relative">
            <p className="m-0 leading-[1.25rem]">My phone number: </p>
            <p className="m-0 text-[1.5rem] leading-[1.88rem]">039.406.4464</p>
          </b>
          <div className="self-stretch relative leading-[1.63rem]">
            <p className="m-0">
              <span className="">{`Address: `}</span>
              <span>{`Ho Chi Minh city`}</span>
            </p>
            <p className="m-0">
              <span className="">{`Email: `}</span>
              <span>realcm471@gmail.com</span>
            </p>

            <p className="m-0">
              {/* <span className="">{`See me on: `}</span> */}
              <div className="flex items-center gap-2">
                See me on:
                <a
                  className="flex items-center"
                  href="https://www.facebook.com/profile.php?id=100022377825149"
                >
                  <AiFillFacebook size={20} />
                </a>
                <SiZalo size={30} />
              </div>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.94rem] text-center text-dimgray font-work-sans w-full">
          <div className="flex flex-col items-start w-full justify-start gap-[0.94rem] md:flex-row">
            <input
              className="[border:none]  text-[1rem] bg-white rounded-8xs w-full flex flex-row items-start justify-start p-[0.94rem] box-border"
              placeholder="Name*"
              type="text"
              value={name}
              // defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="[border:none]  text-[1rem] bg-white rounded-8xs w-full flex flex-row items-start justify-start p-[0.94rem] box-border"
              placeholder="Email Address*"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              // defaultValue={email}
            />
          </div>
          <div className="rounded-8xs bg-white w-full flex flex-row items-start justify-start p-[0.94rem] box-border">
            <div className="relative leading-[1.25rem]">
              Leave a message, and I will contact you soon.
            </div>
          </div>
          <textarea
            className="rounded-8xs bg-white w-full h-[8.88rem] p-[0.94rem] box-border text-[1rem]"
            placeholder="Leave a message..."
            // defaultValue={msg}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />

          <button
            onClick={notify}
            className="cursor-pointer [border:none] py-[1.06rem] px-[2.06rem] bg-darkslateblue rounded-31xl flex flex-row items-start justify-start"
          >
            <b className="relative text-[1.25rem] leading-[1.25rem]  text-white text-left flex items-center">
              Send <FiSend size={20} className="pl-2" />
            </b>
            <ToastContainer />
          </button>
        </div>
      </div>
    </section>
  );
});

export default ContactForm;
