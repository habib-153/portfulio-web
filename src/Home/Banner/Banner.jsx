import { useRef, useEffect } from "react";
import Typed from "typed.js";
import img from "../../assets/IMG_4604-2.JPG";
import './banner.css'

function Banner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Web Design"],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-16 md:my-24  p-4">
      <div className="space-y-3">
        <h2 className="text-5xl font-bold ">I’m Habibur Rahman</h2>
        <div>
          <span
            className="type-writer text-3xl font-semibold text-[#0db3eae1]"
            ref={el}
          ></span>
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
