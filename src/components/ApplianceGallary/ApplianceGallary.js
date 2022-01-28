import React from "react";
import image3 from "../assets/imgs/IMG_0751.JPEG"
import image7 from "../assets/imgs/IMG_7329.jpg"

const ApplianceGallary = () => {
    return(
        <div>
            {/* Appliance Phot Grid 1 */}
            <div class="w3-row-padding" style={{paddingTop:"10px"}}>
                    <div class="w3-third w3-container w3-margin-bottom">
                        <img src={image3} alt="Norway" style={{width:"100%"}} class="w3-hover-opacity"/>
                        <div class="w3-container w3-white">
                            <p><b>Lorem Ipsum</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div class="w3-third w3-container w3-margin-bottom">
                        <img src={image7} alt="Norway" style={{width:"100%"}} class="w3-hover-opacity"/>
                        <div class="w3-container w3-white">
                            <p><b>Lorem Ipsum</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ApplianceGallary;