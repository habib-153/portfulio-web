import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;