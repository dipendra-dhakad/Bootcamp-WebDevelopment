import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications:"",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function  submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of form Data:");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          placeholder="Dip"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <br />
        <label htmlFor="lastName">Last name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          placeholder="Dhakad"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <br />
        <label htmlFor="email">Email address</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          placeholder="dd@gmail.com"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>United State</option>
          <option>Cananda</option>
          <option>Mexico</option>
        </select>

        <br />
        <br />
        <label htmlFor="street">Street address</label>
        <br />
        <input
          type="text"
          name="street"
          id="street"
          value={formData.street}
          placeholder="1234 Main St"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          placeholder="Indore"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <br />
        <label htmlFor="state">State/Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          placeholder="Madhya Pradesh"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <br />
        <label htmlFor="zip">ZIP/Postal code</label>
        <br />
        <input
          type="text"
          name="zip"
          id="zip"
          value={formData.zip}
          placeholder="452001"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <br />

        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              //className="outline"
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notifield when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              //className="outline"
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notifield when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              //className="outline"
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notifield when someones posts a comment on a posting.</p>
            </div>
          </div>
        </fieldset>

        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          
            <input
              id="pushEverything"
              name="pushNotofications"
              type="radio"
              value="Everything"
              onChange={changeHandler}
              //className="outline"
            />
           
              <label htmlFor="pushEverything">Everything</label>
              <br />
         

          
            <input
              id="pushEmail"
              name="pushNotofications"
              type="radio"
              value="Same as email"
              onChange={changeHandler}
              //className="outline"
            />
           
              <label htmlFor="pushEmail">Same as email</label>
              <br />
       

          
            <input
              id="pushNothing"
              name="pushNotofications"
              type="radio"
              value="No push Notifications"
              onChange={changeHandler}
              //className="outline"
            />
          
              <label htmlFor="pushNothing">No push notifications</label>
              <br />
        
        </fieldset>

        <br />
        <button
        className="bg-blue-500 text-white font-bold rounded py-2 px-4 "
        >Save</button>
      </form>
    </div>
  );
}

export default App;
