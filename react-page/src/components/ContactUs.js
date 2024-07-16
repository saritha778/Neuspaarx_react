import React from "react"
import "./ContactUs.css"
import Img1 from "../assets/images/location-icon.png"
import Img2 from "../assets/images/phone-icon.png"
import Img3 from "../assets/images/mail-icon.png"

export default function ContactUs(){
    return(
        <div className="contactUs">
            <form>
                <div className="form-div">
                    <label>Your Name</label>
                    <input type="text" placeholder="John Doe"/>
                </div>
                <div className="form-div">
                    <label>Email</label>
                    <input type="email" placeholder="abcd123@gmail.com"/>
                </div>
                <div className="form-div">
                    <label>Phone Number</label>
                    <input type="number" placeholder="9876543210"/>
                </div>
                <div className="form-div">
                    <label>Details of Project</label>
                    <input type="text" placeholder="Enter Details" className="big"/>
                </div>
                <div className="form-div">
                   <button className="btn btn-cont">Send Message</button>
                </div>     
            </form>
            <div className="info">
                <h2>Contact for Premium Bussiness Services</h2>
                <p>Lorem ipsuem dolor sit amet, consectetuer adipiscing elit.
                    Suspemdisse et justo.
                    Praseent mattis commado augue. Aliqam.
                </p>
                <div>
                    <div class="details">
                        <img src={Img1} className="img" />
                        <p> Hyderabad, Telangana, India 500081</p>
                    </div>
                    <div class="details">
                        <img src={Img2} className="img" />
                        <p> +91 70130 47815</p>
                    </div>
                    <div class="details">
                        <img src={Img3} className="img" />
                        <p> Neuspaarx@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}