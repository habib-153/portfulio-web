
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Skills = () => {
  return (
    <div className="my-16">
      <SectionTitle heading="My Skills"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div data-aos="fade-down" className="card h-16 bg-[#0db3ea30]">
          <div className="card-body gap-1 p-2">
            <h2 className="card-title">HTML</h2>
            <div data-aos="fade-right"
      className="relative">
              <progress
                className="progress progress-info absolute w-full h-4"
                value="85"
                max="100"
              ></progress>
              <div className="absolute top-2 inset-0 flex items-center justify-center text-white">
                85%
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="card h-16 bg-[#0db3ea30]">
          <div className="card-body gap-1 p-2">
            <h2 className="card-title">CSS</h2>
            <div data-aos="fade-right"
      className="relative">
              <progress
                className="progress progress-info absolute w-full h-4"
                value="80"
                max="100"
              ></progress>
              <div className="absolute top-2 inset-0 flex items-center justify-center text-white">
                80%
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="card h-16 bg-[#0db3ea30]">
          <div className="card-body gap-1 p-2">
            <h2 className="card-title">Tailwind</h2>
            <div data-aos="fade-right"
      className="relative">
              <progress
                className="progress progress-info absolute w-full h-4"
                value="83"
                max="100"
              ></progress>
              <div className="absolute top-2 inset-0 flex items-center justify-center text-white">
                83%
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="card h-16 bg-[#0db3ea30]">
          <div className="card-body gap-1 p-2">
            <h2 className="card-title">Javascript</h2>
            <div data-aos="fade-right"
      className="relative">
              <progress
                className="progress progress-info absolute w-full h-4"
                value="70"
                max="100"
              ></progress>
              <div className="absolute top-2 inset-0 flex items-center justify-center text-white">
                70%
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="card h-16 bg-[#0db3ea30]">
          <div className="card-body gap-1 p-2">
            <h2 className="card-title">React</h2>
            <div data-aos="fade-right"
      className="relative">
              <progress
                className="progress progress-info absolute w-full h-4"
                value="60"
                max="100"
              ></progress>
              <div className="absolute top-2 inset-0 flex items-center justify-center text-white">
                60%
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="card h-16 bg-[#0db3ea30]">
          <div className="card-body gap-1 p-2">
            <h2 className="card-title">Express</h2>
            <div data-aos="fade-right" className="relative">
              <progress
                className="progress progress-info absolute w-full h-4"
                value="50"
                max="100"
              ></progress>
              <div className="absolute top-2 inset-0 flex items-center justify-center text-white">
                50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
