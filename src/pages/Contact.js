import React from "react";

const Contact = () => {
    return(
        <div>
            <div class="w3-container w3-white w3-padding-32 myPadding w3-center w3-hide-small">
                <div class="myPadding ">
                <h3 class="w3-border-bottom w3-border-black w3-padding-16 w3-center w3-xxlarge"><b>CONTACT</b></h3>
                <p class="w3-center w3-large">Lets get in touch. Send me a message:</p>
                <div class="w3-center w3-xlarge" style={{marginTop:"48px"}}>
                    <p><i class="fa fa-map-marker w3-xxxlarge" style={{color:"#f44336"}}></i> Markham, ON</p>
                    <p><i class="fa fa-phone fa-fw w3-xxxlarge" style={{color:"#f44336"}}></i> Phone: 416-871-3124</p>
                    <p><i class="fa fa-envelope fa-fw w3-xxxlarge" style={{color:"#f44336"}}> </i> Email: <span >cogentappliances@gmail.com</span></p>
                    <br/>
                </div>
                </div>
            </div>

            {/* mobile screens */}
            <div class="w3-container w3-white w3-padding-32 myPadding w3-center w3-hide-medium w3-hide-large">
                <div>
                <h3 class="w3-border-bottom w3-border-black w3-padding-16 w3-center w3-xxlarge"><b>CONTACT</b></h3>
                <p class="w3-center w3-large">Lets get in touch. Send me a message:</p>
                <div class="w3-xlarge" style={{marginTop:"48px"}}>
                    <p style={{textAlign:"center"}}><i class="fa fa-map-marker w3-xxlarge" style={{color:"#f44336"}}></i> Markham, ON</p>
                    <p style={{textAlign:"center"}}><i class="fa fa-phone fa-fw w3-xxlarge" style={{color:"#f44336"}}></i> Phone: <br/> 416-871-3124</p>
                    <p style={{textAlign:"center", marginBottom:"2px"}}><i class="fa fa-envelope fa-fw" style={{color:"#f44336", fontSize:"32px"}}> </i> Email:</p>
                    <div class="emailAddress">
                        <p>cogentappliances@gmail.com</p>
                    </div>
                    <br/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;