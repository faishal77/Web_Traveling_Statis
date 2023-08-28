import React from "react";
import LogIn from "../../Components/LogIn/LogIn";
import SignUp from "../../Components/SignUp/SignUp";



const Navbar = () => {
    return(
        <>
        <div className="Navbar">
            <div className="logo">Faishal Amir</div>

            <ul>
                <li><a className="Active" href="">Home</a>
                </li>
                <li><a href="#Explore">Explore</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact us</a></li>
            </ul>
            <LogIn/>
            <SignUp/>
       </div>
        </>
    )
}

export default Navbar