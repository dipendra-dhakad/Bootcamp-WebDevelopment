import React from "react";
import Template from "../Components/Template";
import SignupImg from "../assets/signup.png";

const Signup =({setIsLoggedIn})=>{
    return(
        <Template
        title="Welcome Back"
        desc1="Build skills for today ,tomorrow, and beyond."
        desc2="Eduaction to future-proof your career."
        image={SignupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
       />
    )
}
export default Signup