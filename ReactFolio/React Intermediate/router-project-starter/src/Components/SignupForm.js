import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    comfirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showComfirmPassword, setShowComfirmPassword] = useState(false);
  const [accountType, setAccountType]   = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if(formData.password != formData.comfirmPassword){
        toast.error("Password do not match");
        return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData ={
        ...formData
    };

    const finalData={
      ...accountData,
      accountType
    }

    console.log("printing the final account data");
    console.log(finalData);

    navigate('/dashboard');
  }

  return (
    <div>
      {/* student Instructor tab */}
      <div className="flex  bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max mt-4">
        <button
        className={`${accountType ==="student"
         ?
         "bg-richblack-900 text-richblack-5"
        :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={() => setAccountType("student")}>
          Student
        </button>

        <button
         className={`${accountType ==="instructor"
         ?
         "bg-richblack-900 text-richblack-5"
        :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6 ">


        {/* first name and last name */}
        <div className="flex justify-between mt-4">

          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sub className="text-pink-200">*</sub>
            </p>
            <input
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sub>*</sub>
            </p>
            <input
              type="text"
              required
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter last Name"
              value={formData.lastName}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>

        {/* email address */}
        <label className="relative mt-4">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address<sub>*</sub>
          </p>
          <input
            type="email"
            required
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>

        {/* create password and comfirm password */}
        <div className=" w-full flex justify-between mt-4">
          <label className=" relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              name="password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? 
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : 
              <AiOutlineEye  fontSize={24} fill="#AFB2BF" />}
            </span>

          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Comfirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showComfirmPassword ? "text" : "password"}
              value={formData.comfirmPassword}
              onChange={changeHandler}
              placeholder="Comfirm Password"
              name="comfirmPassword"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowComfirmPassword((prev) => !prev)}>
              {showComfirmPassword ?
               <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> :
                <AiOutlineEye  fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Password
        </button>
      </form>
    </div>
  );
};
export default SignupForm;
