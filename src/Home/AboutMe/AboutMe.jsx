import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import img1 from "../../assets/habiburrahman153.png";
import "./animation.css";

const AboutMe = () => {
  return (
    <div className="my-16">
      <SectionTitle heading="About Me"></SectionTitle>
      <div className="hero-content grid md:grid-cols-2 grid-cols-1 mt-4 md:mt-8">
        <div data-aos="fade-right" className="w-full order-2 md:order-1">
          <img
            src={img1}
            className="animation-flooding3 md:w-[320px] mx-auto "
          />
          {/* <a href="https://app.daily.dev/habiburrahman153"><img src="https://api.daily.dev/devcards/v2/stjM0tO6ULjLJNz8H8qrU.png?type=default&r=77v" width="356" alt="Habibur Rahman's Dev Card"/></a> */}
        </div>
        <div data-aos="fade-up" className="md:order-2">
          <p className="">
            <span className="text-3xl text-black">Hello,</span> I am Habibur
            Rahman, a dedicated front-end developer passionate about shaping
            user-centric digital solutions.<br/> <br /> Proficient in React, JavaScript,
            HTML, and CSS, I specialize in crafting engaging and responsive web
            interfaces. Leveraging React and JavaScript, I create dynamic and
            intuitive web applications while ensuring seamless design
            implementation using HTML and CSS.<br /> <br /> I am committed to staying ahead
            in the dynamic tech landscape, eagerly embracing new tools to
            enhance my contributions to web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
