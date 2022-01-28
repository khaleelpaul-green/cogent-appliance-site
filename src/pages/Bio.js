import React from "react";
import { Link } from "react-router-dom";

const Bio = () => {
    return (
        <div>
            <div class="w3-container w3-padding-32 myPadding">
                <h3 class="w3-border-bottom w3-border-black w3-padding-16 w3-xxlarge w3-center"><b>About</b></h3>
                <p class="w3-large w3-center" style={{lineHeight:"2", fontWeight:"bold"}}>
                    At Cogent Gas & Appliance Services Inc. we create meaningful experiences for our clients, by providing value, reliability and the best customer service possible.<br/>
                    <hr style={{opacity:"0"}}/>
                    Although corrective maintenance is at the heart of what we do, we take pride in specializing in Preventative Maintenance in order to proactively save time, money and energy.<br/>
                    <hr style={{opacity:"0"}}/>
                    We take the time to carefully assess each project in a timely and professional manner and provide our clients with the best options that best suit their budget and most importantly, their needs.<br/>
                    <hr style={{opacity:"0"}}/>
                    <Link to="/contact">How can we help you?</Link>
                </p>
            </div>
            <div class="w3-bar w3-padding-bottom myPadding" style={{display:"flex", justifyContent:"center", paddingBottom:"25px"}}>
                <a href="https://www.youtube.com/channel/UCzU2cEhB2XpjU-BBl53rmHg" class="w3-bar-item w3-button w3-center"><p><i class="fa fa-youtube w3-xxxlarge"></i></p></a>
                <a href="https://www.instagram.com/cogentappliances/" class="w3-bar-item w3-button w3-center"><p><i class="fa fa-instagram w3-xxxlarge"></i></p></a>
                <a href="https://www.linkedin.com/in/jamaalmiles/" class="w3-bar-item w3-button w3-center"><p><i class="fa fa-linkedin w3-xxxlarge"></i></p></a>
            </div>
        </div>
    )
}

export default Bio;