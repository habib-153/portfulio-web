import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div id="about"><AboutMe></AboutMe></div>
            <div id="education"><Education></Education></div>
            <div id="skills"><Skills></Skills></div>
            <div id="projects"><Projects></Projects></div>
            <div id="contact"><ContactMe></ContactMe></div>
        </div>
    );
};

export default Home;