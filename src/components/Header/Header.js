import React from "react";
import NavBar from "../NavBar/NavBar";
import logo2 from "../assets/imgs/cogent-logo-2.png"
import { Link } from "react-router-dom";

const Header = () => {
    let mySidebar = document.getElementById("mySidebar");

    // open side bar function
    function openMenu() {
        if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        } else {
        mySidebar.style.display = 'block';
    }
}

    // close sidebar function
    function closeMenu() {
        mySidebar.style.display = "none";
    }   

    return (
        <div>
            <NavBar/>
            <div class="w3-container myPadding w3-hide-small" style={{paddingBottom:"20px", paddingTop:"20px"}}>
                <div class="w3-bar w3-white w3-hide-small">
                    <h1 class="w3-bar-item w3-button w3-wide w3-xxxlarge w3-center" style={{color:"#2196F3",position:"sticky", left:"165px"}}><b>Cogent Gas & Appliance Services Inc.</b> <br/><span class="w3-center-align" style={{fontSize:"30px"}}><b>Adding Value While Serving Customers.</b></span></h1>
                </div>
            </div>

            {/* header on small screens */}
            <div class="w3-bar w3-red w3-hide-medium w3-hide-large" style={{height:"7rem"}}>
                <a href="#" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={openMenu}>
                <img class="w3-bar-item w3-button" style={{paddingRight:"5px", width:"50%", position:"relative", top:"-11px"}} src={logo2} alt="Cogent Appliances Logo"/>
                    <i class="fa fa-bars w3-right w3-xxlarge" style={{width:"50px", position:"relative", top:"27px"}}></i>
                </a>
            </div>

                {/* sidebar menu on small screens */}
                <nav class="w3-sidebar w3-bar-block customBlue w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display:"none"}} id="mySidebar">
                    <a href="#" onClick={closeMenu} class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
                    <Link to="/" onClick={closeMenu} class="w3-bar-item w3-button">HOME</Link>
                    <Link to="/about" onClick={closeMenu} class="w3-bar-item w3-button">ABOUT</Link>
                    <Link to="/gallery" onClick={closeMenu} class="w3-bar-item w3-button">GALLERY</Link>
                    <Link to="/contact" onClick={closeMenu} class="w3-bar-item w3-button">CONTACT</Link>
                </nav>
                    
            <div class="w3-row myPadding w3-hide-small" style={{marginBottom:"0px"}}>
                <Link to="/">
                <div class="w3-col w3-red w3-border-right w3-center w3-padding-16 w3-button" style={{width:"25%"}}>
                    <Link to="/" class="w3-bar-item w3-button">HOME</Link>
                </div>
                </Link>
                <Link to="/about">
                <div  class="w3-col w3-red w3-border-right w3-center w3-padding-16 w3-button" style={{width:"25%"}}>
                    <Link to="/about" class="w3-bar-item w3-button">ABOUT US</Link>
                </div>
                </Link>
                <Link to="/gallery">
                <div class="w3-col w3-red w3-border-right w3-center w3-padding-16 w3-button" style={{width:"25%"}}>
                    <Link to="/gallery" class="w3-bar-item w3-button"> GALLERY</Link>
                </div>
                </Link>
                <Link to="/contact">
                <div  class="w3-col w3-red w3-center w3-padding-16 w3-button" style={{width:"25%"}}>
                    <Link to="/contact" class="w3-bar-item w3-button"> CONTACT</Link>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header