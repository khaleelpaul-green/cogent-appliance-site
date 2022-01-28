import React from "react";
import image1 from "../assets/imgs/753FCEFB-0374-4098-9D6C-E01EC6514AAB.JPG"
import image2 from "../assets/imgs/D5461790-9515-4756-A472-481DB2C61630.JPG"
import image4 from "../assets/imgs/IMG_7018.jpg"
import image5 from "../assets/imgs/IMG_7078.jpg"
import image6 from "../assets/imgs/IMG_7175.jpg"
import image8 from "../assets/imgs/IMG_7782.jpg"

const HVACGallery = () => {
    return(
        <div>
            {/* HVAC Photo Grid 1*/}
            <div class="w3-row-padding myPadding" style={{paddingTop:"10px"}}>
                <div class="w3-third w3-container w3-margin-bottom">
                    <img src={image1} alt="Norway" style={{width:"100%"}} class="w3-hover-opacity"/>
                    <div class="w3-container w3-white">
                        <p><b>Lorem Ipsum</b></p>
                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                    </div>
                </div>
                <div class="w3-third w3-container w3-margin-bottom">
                    <img src={image2} alt="Norway" style={{width:"100%"}} class="w3-hover-opacity"/>
                    <div class="w3-container w3-white">
                        <p><b>Lorem Ipsum</b></p>
                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                    </div>
                </div>
                <div class="w3-third w3-container">
                    <img src={image4} alt="Norway" style={{width:"100%"}} class="w3-hover-opacity"/>
                    <div class="w3-container w3-white">
                        <p><b>Lorem Ipsum</b></p>
                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                    </div>
                </div>

                {/* HVAC Photo Grid 2 */}
                <div class="w3-row-padding" style={{paddingTop:"10px"}}>
                    <div class="w3-third w3-container w3-margin-bottom">
                        <img src={image5} alt="Norway" style={{width:"100%"}} class="w3-hover-opacity"/>
                        <div class="w3-container w3-white">
                            <p><b>Lorem Ipsum</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div class="w3-third w3-container w3-margin-bottom">
                        <img src={image6} alt="Norway" style={{width:"100%"}} class="w3-hover-opacity"/>
                        <div class="w3-container w3-white">
                            <p><b>Lorem Ipsum</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div class="w3-third w3-container">
                        <img src={image8} alt="Norway" style={{width:"100%"}} class="w3-hover-opacity"/>
                        <div class="w3-container w3-white">
                            <p><b>Lorem Ipsum</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default HVACGallery;