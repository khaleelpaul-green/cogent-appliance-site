import React from "react";
import image1 from "../components/assets/imgs/IMG_7329.jpg"
import image2 from "../components/assets/imgs/IMG_7018.jpg"
import image3 from "../components/assets/imgs/IMG_7078.jpg"
import acInstall from "../components/assets/imgs/air-conditioner-install.jpeg"
import furnaceMaintainence from "../components/assets/imgs/furnace-maintainence.jpeg"
import naturalGasFirePit from "../components/assets/imgs/natural-gas-fire-pit-installation.jpeg"
import gasMeterPipingRepair from "../components/assets/imgs/repairing-gas-meter-piping.jpeg"
import sideACinstall from "../components/assets/imgs/side-discharge-air-conditioner-install.jpeg"

const Gallery = () => {
    return(
        <div>
            <div class="w3-white myPadding">
            {/* Projects Header */}
            <div class="w3-container w3-padding-32">
                <h3 class="w3-border-bottom w3-border-black w3-padding-16 w3-center w3-xxlarge"><b>Projects</b></h3>
            </div>
            
            {/* Project Image Grid */}
            <div class="w3-row-padding">
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Air Conditioner Installation</div>
                        <img src={acInstall} alt="Air Conditioner Installation" style={{width:"100%"}}/>
                    </div>
                </div>
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Furnace Maintainence</div>
                        <img src={furnaceMaintainence} alt="Furnace Maintainence" style={{width:"100%"}}/>
                    </div>
                </div>
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Natural Gas Fire Pit Installation</div>
                        <img src={naturalGasFirePit} alt="Natural Gas Fire Pit Installation" style={{width:"100%", height:"417px"}}/>
                    </div>
                </div>
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Side Discharge Air Conditioning Installation</div>
                        <img src={sideACinstall} alt="Side Discharge Air Conditioning Installation" style={{width:"100%"}}/>
                    </div>
                </div>
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Gas Meter Piping Repair</div>
                        <img src={gasMeterPipingRepair} alt="Gas Meter Piping Repair" style={{width:"100%"}}/>
                    </div>
                </div>
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Tankless Water Heater Installation</div>
                        <img src={image3} alt="Tankless Water Heater Installation" style={{width:"100%"}}/>
                    </div>
                </div>
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Gas Stove Installation</div>
                        <img src={image1} alt="Gas Stove Installation" style={{width:"100%"}}/>
                    </div>
                </div>
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Furnace Maintainence</div>
                        <img src={image2} alt="Furnace Maintainence" style={{width:"100%"}}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Gallery;