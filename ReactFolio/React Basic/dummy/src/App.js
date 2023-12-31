import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [text ,setText] = useState('')
    //const [name,setName] = useState('dip')
      //  //Variation 1-Every Render
      //  useEffect( () =>{
      //   console.log("UI RENEDERING DONE");
      //  });

        //  //variation 2 ->First render
        // useEffect ( () =>{
        //   console.log("UI Rendering done");
        // },[]);

        // //variation 3->  first render + whenever dependency changes
        // useEffect (() =>{
        //   console.log("Changed Observed");
        // },[name]);

        //variation 3-> to handle unmounting of a component

        useEffect(()=>{
          //add event listener
          console.log("listener added");
          
          return ()=>{
            console.log("Listener removed");
          }
        },[text]);

   function changeHandler(event) {
    console.log(text);
    setText(event.target.value)
   }




  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
