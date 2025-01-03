import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";

const Main = () => {
    const [showHeaderFooter, setShowHeaderFooter] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // Update the state based on the current location
        if (location.pathname === "/login" || location.pathname ==='/register') {
            setShowHeaderFooter(false);
        } else {
            setShowHeaderFooter(true);
        }
    }, [location.pathname]);

    return (
        <div>
            {showHeaderFooter && <Navbar />}
            <Outlet />
            {showHeaderFooter && <Footer />}
        </div>
    );
};

export default Main;
