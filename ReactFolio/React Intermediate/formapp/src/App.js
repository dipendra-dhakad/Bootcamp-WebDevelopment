import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName,setFirstName] =useState("");
  // const [lastName,setLastName] =useState("");
  // function changeFirsthandler(event) {
  //  // console.log("priting first name");
  //   //console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLasthandler(event) {
  //  // console.log("priting last name");
  //   //console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
    mode: "",
    favCar:""
  });
  //console.log(formdata);
  // console.log(formdata.email);
  // console.log(formdata.firstName);
  //console.log(formdata.lastName);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("Finally printing the entire form ka data...");
    console.log(formdata);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br/>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formdata.firstName}
        />
        <br />

        <br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formdata.lastName}
        />

        <br />

        <br />
        <input
          type="email"
          placeholder="write your email here"
          onChange={changeHandler}
          name="email"
          value={formdata.email}
        />

        <br />

        <br />
        <textarea
          placeholder="write your comments here"
          onChange={changeHandler}
          name="comments"
          value={formdata.comments}
        />

        <br />

        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formdata.isVisible}
        />

        <label htmlFor="isVisible">Am I Visible ?</label>

        <br />

        <br />
        <fieldset>
          <legend>Mode:</legend>
         
          <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          id="Online-Mode"
          value="Online-Mode"
          checked={formdata.mode === "Online-Mode"}
        />

        <label htmlFor="Online-Mode">Online Mode</label>

        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          id="Offline-Mode"
          value="Offline-Mode"
          checked={formdata.mode === "Offline-Mode"}
        />

        <label htmlFor="offline-Mode">Offline Mode</label>
        </fieldset>
       
        <label htmlFor="favCar">Tell me your favourite car </label>
       <select 
       onChange={changeHandler}
       name="favCar"
       id="favCar"
       value={formdata.favCar}
       >
        <option value="Scarpio">Scarpio</option>
        <option value="Fartuner">Fartuner</option>
        <option value="Tharr">Tharr</option>
        <option value="Legender">Legender</option>
        <option value="Defender">Defender</option>

       </select>
      
      {/* <input type="submit" value='submit'></input> */}
       <br/>
       <br/>
       <button>
         Submit
       </button>
      </form>
    </div>
  );
}

export default App;
