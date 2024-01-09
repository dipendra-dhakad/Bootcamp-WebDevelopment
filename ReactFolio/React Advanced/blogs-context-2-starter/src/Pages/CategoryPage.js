import React from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Header from "../components/Header"
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () =>{
  const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return(
    <div>
        <Header/>

        <div>
          <button 
          onClick={() =>navigate(-1)}
          >
            back
          </button>
          <h2>
             Blogs on <span>{category}</span>
          </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage