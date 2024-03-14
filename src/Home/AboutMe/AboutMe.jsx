import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import ima1 from '../../assets/rsz_2img_4604.jpg'
import './animation.css'

const AboutMe = () => {
  return (
    <div className='my-16'>
        <SectionTitle heading="About Me"></SectionTitle>
      <div className="hero-content grid md:grid-cols-2 grid-cols-1 mt-4 md:mt-8">
        <div data-aos="fade-right" className='w-full order-2 md:order-1'>
            <img
          src={ima1}
          className="w-[350px] animation-flooding3 md:w-[320px] h-[340px] mx-auto rounded-lg"
        />
        </div>
        <div data-aos='fade-up' className='md:order-2'>
          <p className='text-[#151515c1]'>
          <span className='text-3xl text-black'>Hello,</span> I am Habibur Rahman, a dedicated front-end developer passionate about shaping user-centric digital solutions. Proficient in React, JavaScript, HTML, and CSS, I specialize in crafting engaging and responsive web interfaces. Leveraging React and JavaScript, I create dynamic and intuitive web applications while ensuring seamless design implementation using HTML and CSS. I am committed to staying ahead in the dynamic tech landscape, eagerly embracing new tools to enhance my contributions to web development.
          </p>
          {/* <div className='my-4 space-y-2'>
          <p><span className='font-bold text-[#151515c1]'>Name: </span>Habibur Rahman</p>
          <p><span className='font-bold text-[#151515c1]'>Email: </span>h.r.sihab155@gmail.com</p>
          <p><span className='font-bold text-[#151515c1]'>Phone: </span>01575632219</p>
          <p><span className='font-bold text-[#151515c1]'>Address: </span>Matikata, Dhaka Cantonment, Dhaka, Bangladesh</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
