import React from 'react';
//import NewProduct from './Components/NewProduct';
import Products from './Components/Products';


import './App.css';

const App =() =>{
  const products =[
    {
      id:'p1',
      title:'Nirma',
      amount:'100',
      date:new Date (2023,12,23),
    },

    {
      id:'p2',
      title:'Sird Excel',
      amount:'200',
      date:new Date (2023,12,24),
    },

    {
      id:'p3',
      title:'Tide',
      amount:'300',
      date:new Date (2023,12,25),
    },

    {
      id:'p4',
      title:'Ride',
      amount:'400',
      date:new Date (2023,12,24),
    },
  ];

  // function printProductData(data){
  //   console.log("i am inside App.js");
  //   console.log(data);
 // }
  return (
    <div >
      <Products items ={products} />
    </div>
  ); 
};
export default App;
