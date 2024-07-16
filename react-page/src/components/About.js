import React from "react"
import Img from "../assets/images/gallery-1.png"
import "./About.css"
export default function About(){
    return(
        <div className="about-section container">
            <div className="about-text">
                <p>We are a team of trusted tech enthusiastic people inspired to do more, learn more, and help business ideas translate into reality, and hold a rich experience in collabrating designing, implementing, and building quality solutions for a wide range of bussinesses.</p>
                <button className="btn btn-about">Know more</button>
            </div>
            <div >
                <img src={Img}  className="about-img"/>
            </div>
        </div>
    )
}