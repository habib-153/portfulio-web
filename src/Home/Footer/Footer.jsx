import { FaLinkedin,FaGithub, FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a href="#about" className="link link-hover">About me</a>
    <a href="#contact" className="link link-hover">Contact</a>
    <a href="#skills" className="link link-hover">Skills</a>
    <a href="#projects" className="link link-hover">Projects</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4 text-lg">
      <a href='https://www.linkedin.com/in/habibur-rahman-695a3b288/'><FaLinkedin /></a>
      <a href='https://github.com/habib-153'><FaGithub /></a>
      <a href='https://www.facebook.com/h.R4hM4n.8'><FaFacebookF /></a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by <span className="text-[#0db3eae1] font-semibold">Habibur Rahman</span></p>
  </aside>
</footer>
    );
};

export default Footer;