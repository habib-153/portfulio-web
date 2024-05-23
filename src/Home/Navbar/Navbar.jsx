import Resume from "../../assets/HabiburRahmanResume_Web Developer.pdf";

const Navbar = () => {
  const navLinks = (
    <div className="md:flex gap-5 md:items-center">
      <li className="hover:text-[#0db3eae1]">
        {/* <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#0db3eae1] hover:text-[#272ee5ea] underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
        >
          Projects
        </NavLink> */}
        <a href="#skills">Skills</a>
      </li>
      <li className="hover:text-[#0db3eae1]">
        <a href="#projects">Projects</a>
      </li>
      <li className="hover:text-[#0db3eae1]">
      <a href="#contact">Contact</a>
      </li>
    </div>
  );
  return (
    <div className="navbar top-0 max-w-[1300px] h-[50px] bg-base-300">
      <div className="navbar max-w-[1200px] mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-l from-cyan-400 to-blue-500 font-semibold">
          Habib
        </h2>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="font-semibold menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a href={Resume} download="HabiburRahman-Resume.pdf">
          <button className="btn btn-outline text-[17px] border-cyan-500 hover:bg-[#0db3eae1]">
            Resume
          </button>
        </a>
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;
