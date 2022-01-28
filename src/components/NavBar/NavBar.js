import React from 'react';

const NavBar = () => {
    return (
        <div class="w3-bar w3-hide-small" style={{backgroundColor: "#2196F3", color: "#ffffff"}}>
            <div class="myPadding">
            <a href="https://www.youtube.com/channel/UCzU2cEhB2XpjU-BBl53rmHg" class="w3-bar-item w3-button w3-right"><p><i class="fa fa-youtube"></i></p></a>
            <a href="https://www.instagram.com/cogentappliances/" class="w3-bar-item w3-button w3-right"><p><i class="fa fa-instagram"></i></p></a>
            <a href="https://www.linkedin.com/in/jamaalmiles/" class="w3-bar-item w3-button w3-right"><p><i class="fa fa-linkedin"></i></p></a>
            <a href="tel:4168713124" class="w3-bar-item w3-button"><p class="w3-medium">Call Me Today 416-871-3124</p></a>
            </div>
        </div>
    )
}

export default NavBar