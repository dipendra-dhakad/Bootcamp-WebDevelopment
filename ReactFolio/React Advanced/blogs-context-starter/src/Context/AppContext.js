import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

//step-1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  //data filling pending

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    console.log("printig the final url");
    console.log(url);

    try{
      const result= await fetch(url);
      //const output= await result.json();
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
      
    }
     catch(error){
      console.log("Error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
     }
     setLoading(false);
      // console.log(output.posts);
      // setPosts(output.posts)
      // setLoading(false);
    };


   

   //  useEffect(()=>{
   //    fetchBlogPosts();
   // },[])

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
