import React from "react"
import "./Industries.css"

export default function Industries(){
    return (
        <div className="indus">
            <div className="top">
                <p>We support all kinds of bussinesses for their growth using data analysis,
                    data management, cloud computing, data visualization and many data related technologies regardless of bussiness size.
                </p>
                <button className="btn btn-indus">Know More</button>
            </div>
            <div className="down">
                <div className="left">
                    <h1>Startups</h1>
                    <p> We assist startups in knowing the power of their data by performing data collection, 
                        transformation and analysis. Our aim is to help startups make informed decisions that will drive their success. Using data-driven insights and advances analytics tools, we strive to help startups to grow their bussiness.
                    </p>
                </div>
                <div className="right">
                    <h1>
                        Small Scale
                    </h1>
                    <p>We understand that small bussinesses have tremendous potential. With the power
                        of AI, data Science, analytics and machine learning, we can help small bussinesses accelerate their growth and expansion. Whether it'sipport
                        through automating routine tasks or providing data-driven insights we will help small bussiness grow.
                    </p>
                </div>
            </div>
        </div>
    )
}