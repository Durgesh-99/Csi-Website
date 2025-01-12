import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import logo from './images/logo.png'
import menu from './images/menu.png'
import X from './images/X.png'
import './Navbar.css'

const Navbar = ()=>{
    const nodeRef = React.useRef(null)

    const[showDrawer,setShowDrawer]=useState(false);

    const closeDrawer=()=>{
        setShowDrawer(!showDrawer);
    }
    return(
        <div className="nav">
            <Link to="/"><img className="logo" src={logo} alt="CSI"/></Link>

            <div className="navlinks">
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About Us</Link>
                <Link to="/events" className="link">Events</Link>
                <Link to="/contact" className="link">Contact Us</Link>
            </div>

            <img className={showDrawer?'menu-x':'menu'} src={showDrawer?X:menu} onClick={()=>setShowDrawer(!showDrawer)}/>

            <CSSTransition
                in={showDrawer}
                timeout={1000}
                classNames='drawer-transition'
                unmountOnExit
                nodeRef={nodeRef}
            >
                <div className="drawer">
                    <Link to="/" className="drawer_link" onClick={closeDrawer}>Home</Link>
                    <Link to="/about" className="drawer_link" onClick={closeDrawer}>About Us</Link>
                    <Link to="/events" className="drawer_link" onClick={closeDrawer}>Events</Link>
                    <Link to="/contact" className="drawer_link" onClick={closeDrawer}>Contact Us</Link>
                    <button onClick={()=>setShowDrawer(!showDrawer)}>X</button>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Navbar;