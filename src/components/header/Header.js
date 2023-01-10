import React, { useState } from "react";
import { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    const [show,handleShow]= useState(false)
    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>50){
            handleShow(true)
        }
        else handleShow(false)
      })
    
      return () => {
        
      }
    }, [])
    
  return (
    <div className={` header ${show && "nav__black"}`}>
      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
        />
      </Link>

      <div className="header__nav">
        <Link to='/'>
          <div className="header__opt">
            <span className="opt__textTwo">home</span>
          </div>
        </Link>

        <Link to='/events'>
          <div className="header__opt">
            <span className="opt__textTwo">events</span>
          </div>
        </Link>
        <Link to='/about'>
          <div className="header__opt">
            <span className="opt__textTwo">aboutUs</span>
          </div>
        </Link>
        <Link to='/contactus'>
          <div className="header__opt">
            <span className="opt__textTwo">contactUs</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
