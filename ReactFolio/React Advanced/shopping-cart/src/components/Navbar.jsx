import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
        
        <NavLink to={"/"}>
          <div>
            <img src="https://www.bing.com/th?id=OIP.kX2XOYVkZ0MtIv41AWTAUwHaHa&w=100&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />
          </div>
        </NavLink>
        <div>
          <NavLink to={"/"}>
          <p>Home</p>
          </NavLink>
         
           <NavLink>
            <div>
              <FaShoppingCart />
            </div>
           </NavLink>
      
        </div>
      </div>
    </div>
  );
};

export default Navbar;
