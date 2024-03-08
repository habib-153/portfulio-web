import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="max-w-[1200px] mx-auto my-16">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;