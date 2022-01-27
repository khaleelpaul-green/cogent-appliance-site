import React from "react";
import NavBar from "../NavBar/NavBar";
import logoImg from "../assets/imgs/cogent_logo.jpg"
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
                    <h1 class="w3-bar-item w3-button w3-wide w3-xxxlarge w3-center" style={{color:"#2196F3",position:"sticky", left:"165px"}}><b>Cogent Gas & Appliance Services Inc.</b> <br/><h6 class="w3-center-align" style={{fontSize:"30px"}}><b>Adding Value While Serving Customers.</b></h6></h1>
                    {/* <div class="w3-right w3-hide-small alignHeaderContactLarge" style={{display:"flex"}}>
                    <a href="#" class="w3-bar-item w3-button wrapper" style={{flexWrap:"wrap"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill em-image" style={{verticalAlign:"baseline", marginRight:"-15px"}} viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                    </a>
                    <a href="tel:4168713124" class="w3-bar-item w3-button wrapper w3-border-right" style={{textAlign:"left"}}>
                        Phone Number <br/>
                        <b>416-871-3124</b>
                    </a>
                    <a href="#" class="w3-bar-item w3-button wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope em-image" style={{verticalAlign:"baseline", marginRight:"-15px"}} viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                    </a>
                    <a href="mailto:cogentappliances@gmail.com" class="w3-bar-item w3-button wrapper" style={{textAlign:"left"}}>
                        Email<br/>
                        <b>cogentappliances@gmail.com</b>
                    </a>
                    </div> */}
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