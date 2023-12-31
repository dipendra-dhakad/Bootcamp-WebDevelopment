import React, { useState } from "react";
import data from "./data";
import Tours from "./Components/Tours";

const App =() => {


  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours =tours.filter(tour =>tour.id !==id);
    setTours(newTours);
  }

  return (
    <div>
     
      <tour tours= {Tours} removeTour={removeTour}></tour>
    </div>
  );
}



export default App;
