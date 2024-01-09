import React from "react";
import Header from "../components/Header"
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const TagPage = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return(
        <div>
           <Header/>

           <div>
            <button
            onClick={() => navigate(-1)}
            >
                back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
           </div>
           
           <Blogs/>
           <Pagination/>

        </div>
      )
}

export default TagPage