import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-[1200px] p-4 md:p-0 mx-auto mt-12">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;