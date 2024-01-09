
import './App.css';
import { NavLink, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Support from './Components/Support';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import About from './Components/About';
 import {Link} from 'react-router-dom'
import MainHeader from './Components/MainHeader';




function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
          </li>
          <li>
          <NavLink to="/labs">Labs</NavLink>
          </li>
         
        </ul>
      </nav>
    


     <Routes>
      <Route path='/' element={<MainHeader/>} >
        {/* default route */}
         <Route index element ={<Home/>}/>
         <Route path='/support' element={<Support/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/labs' element={<Labs/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
     </Routes>
    </div>
  );
}

export default App;
