import { useRef, useEffect } from "react";
import Typed from "typed.js";
import img from "../../assets/rsz_2img_4604-2.jpg";
import './banner.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Full Stack Developer", "React Developer", "Frontend Developer","Tech Innovator", 'Backend Developer'],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center  md:my-20">
      <div className="space-y-3 mb-4">
        <h2 className="text-5xl font-bold ">I’m Habibur Rahman</h2>
        <div>
          <span
            className="type-writer text-3xl font-semibold text-[#0db3eae1]"
            ref={el}
          ></span>
        </div>
        <div className="flex mt-6 gap-4">
          <a href="https://www.linkedin.com/in/habiburrahman153/" target="_blank" rel="noopener noreferrer" className="text-4xl text-[#0077B5]">
            <FaLinkedin className="mr-2" />
          </a>
          <a href="https://github.com/habib-153" target="_blank" rel="noopener noreferrer" className="text-4xl text-[#171515]">
            <FaGithub className="mr-2" />
          </a>
        </div>
      </div>
      <div>
        <div className="w-full">
          <img className="rounded-full img w-96 lg:w-[400px] mx-auto" src={img} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
