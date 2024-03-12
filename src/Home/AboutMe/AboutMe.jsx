import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import ima1 from '../../assets/IMG_4604.jpg'
const AboutMe = () => {
  return (
    <div className='my-12'>
        <SectionTitle heading="About Me"></SectionTitle>
      <div className="hero-content flex-col-reverse md:flex-row gap-6">
        <div className=''>
            <img
          src={ima1}
          className="w-[350px] md:w-[450px] h-[380px] rounded-lg "
        />
        </div>
        <div>
          <p className="text-lg">
          I am a Front-end Web Developer. Now I am mainly focusing on front-end development but i am also interested in backed and used to in MERN Stack.
          </p>
          <div className='my-4 space-y-2'>
          <p><span className='font-bold text-[#151515c1]'>Name: </span>Habibur Rahman</p>
          <p><span className='font-bold text-[#151515c1]'>Email: </span>h.r.sihab155@gmail.com</p>
          <p><span className='font-bold text-[#151515c1]'>Phone: </span>01575632219</p>
          <p><span className='font-bold text-[#151515c1]'>Address: </span>Matikata, Dhaka Cantonment, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
