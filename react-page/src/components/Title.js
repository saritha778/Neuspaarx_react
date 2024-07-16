import React from "react";
import "./Title.css"

import Logo from "../assets/images/menu-icon.png"
import Imgi1 from "../assets/images/location-icon.png"
import Imgi2 from "../assets/images/phone-icon.png"
import Imgi3 from "../assets/images/mail-icon.png"
import Img1 from "../assets/images/facebook_145802.png"
import Img2 from "../assets/images/twitter.png"
import Img3 from "../assets/images/instagram_2111491.png"
import Img4 from "../assets/images/linkedin_3536569.png"

export default function Title(){
    return(
        <div className="titleC">
            <div className="div1">
                <div className="logo-container">
                    <a href="http://www.neuspaarx.com"><span class="big-font">n</span>eu<span class="big-font">s</span>paar<span class="big-font">x</span></a>
                </div>
                <div>
                    <div class="details">
                        <img src={Imgi1} className="img" />
                        <p> Hyderabad, Telangana, India 500081</p>
                    </div>
                    <div class="details">
                        <img src={Imgi2} className="img" />
                        <p> +91 70130 47815</p>
                    </div>
                    <div class="details">
                        <img src={Imgi3} className="img" />
                        <p> Neuspaarx@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="div2">
                <h3>Services</h3>
                <ul className="ul">
                    <li className="li">Bussiness Intelligence</li>
                    <li className="li">Cloud Computing</li>
                    <li className="li">Data Science & ML</li>
                    <li className="li">Data Management</li>
                    <li className="li">Devops</li>
                    <li className="li">Bussiness Apps</li>                    
                </ul>
            </div>
            <div className="div3">
                <h3>Bussiness</h3>
                <ul className="ul">
                    <li className="li">Blog</li>
                    <li className="li">Case studies</li>
                    <li className="li">About us</li>
                    <li className="li">Contact</li>                  
                </ul>
            </div>
            <div className="div4">
                <h3>Get in touch!</h3>
                <div className="icons">
                <img src={Img1} className="img" />
                <img src={Img2} className="img" />
                <img src={Img3} className="img" />
                <img src={Img4} className="img" />   
                </div>
                <button className="btn btn-links">Contact Us</button>
            </div>
        </div>
    )
}