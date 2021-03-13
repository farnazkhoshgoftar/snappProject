import React,{useState} from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { Fade as Hamburger } from 'hamburger-react'
import Menu from './menu'
import "./navbar.css";
function Navbar() {
const[open,setOpen]=useState(true)
const changeOpen=()=>{
  setOpen(!open)
}
  return (
    <div className="navbar">
        <div className="rightBox">
          <div className='hamburger' onClick={changeOpen}>
          <Hamburger/>
          </div>
          <Link to='/'>
            <img className="logo" src={logo} alt="logo"/>
          </Link>
          {open?
            <Menu/>:null
           }         
        </div>
        <div className="leftBox">
              <Link to='' className="snapDriver">دریافت اسنپ رانندگان</Link>      
        </div>
    </div>
  );
}
export default Navbar;
