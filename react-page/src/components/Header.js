import React from "react"
import "./Header.css"
export default function Header({heading}){
    return (
        <div className="heading">
            <h1 >
                {heading}
            </h1>
        </div>
    )
}