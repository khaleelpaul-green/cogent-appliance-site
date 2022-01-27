import React from "react";
import { Link } from "react-router-dom";
import homeImg1 from "../components/assets/imgs/cogent-homepage.jpeg"
import homeImg from "../components/assets/imgs/cogent-homepage (2).jpeg"
import homeImg2 from "../components/assets/imgs/cogent-homepage (1).jpeg"
import homeImg3 from "../components/assets/imgs/homepage.jpg"

const Home = () => {
    return(
        <div>
            <div class="w3-display-container w3-grayscale-min w3-hide-small">
                <img class="imgDimmer" src={homeImg} alt="HVAC and Home Renovations Specialist"></img>
                <div class="w3-display-left w3-text-white" style={{padding:"50px"}}>
                <span class="w3-jumbo w3-hide-small myPadding" >Where Our Customer's Needs Are The Top Priority</span><br/>
                    <p><Link to="/gallery" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">View my projects</Link></p>
                </div> 
            </div>
            <div class="w3-display-container w3-grayscale-min w3-hide-medium w3-hide-large">
                <img class="imgDimmerSmall" src={homeImg1} alt="HVAC and Home Renovations Specialist"></img>
                <div class="w3-display-left w3-text-white w3-center" style={{padding:"10px", position:"relative", top:"-340px"}}>
                    <span class="w3-xxxlarge w3-hide-large w3-hide-medium"><b>Cogent Gas & Appliance Services Inc.</b></span><br/>
                    <p><Link to="/gallery" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"><b>View my projects</b></Link></p>
                </div> 
            </div>
        </div>
    )
}

export default Home