//import React, { useEffect, useState } from 'react';
import "./App.css";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Spinner from "./Components/Spinner";
//import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category ,setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      //save data into a variable
      //console.log(data);
      setCourses(output.data);
    } catch (error) {
      toast.error("Something is wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-red-300">
      <div>
        <Navbar />
      </div>
      <div className='bg-red-300'>
        <div>
          <Filter filterData={filterData}
           category ={category}
           setCategory ={setCategory}
           />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
        </div>
      </div>
    </div>
  );
};

export default App;
