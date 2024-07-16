import React from 'react'
import './Services.css'
import Img from '../assets/images/twitter.png'
export default function Services(){
    return(
        <div className='grid'>
            <div className='grid-item'>
                <img src={Img} className='img1'/ >
                <h3>Bussiness Intelligence</h3>
                <p> NeuSpaarX offers a complete set of BI services that will help bussiness improve their performance and growth</p>
            </div>
            <div className='grid-item'>
                <img src={Img} className='img1'/ >
                <h3>Cloud Computing</h3>
                <p> Optimize your bussiness in the cloud with the help of NeuSpaarX, an experienced team.</p>
            </div>
            <div className='grid-item'>
                <img src={Img} className='img1'/ >
                <h3>Data Science & ML</h3>
                <p>Using Data Science & ML We provide solutions that deliver insights and helps in growth.</p>
            </div>
            <div className='grid-item'>
                <img src={Img} className='img1'/ >
                <h3>Data Management</h3>
                <p>Integrating Data Management with BI services, NeuSpaarX ensures that you have timely access to quality and accurate data.</p>
            </div>
            <div className='grid-item'>
                <img src={Img} className='img1'/ >
                <h3>Devops</h3>
                <p> For Continuous cycle of development , monitoring and maintainence without compromising reliability or security.</p>
            </div>
            <div className='grid-item'>
                <img src={Img} className='img1'/ >
                <h3>Bussiness Apps</h3>
                <p>Convert multiple complex processes to a single process with user-friendly apps that can be accessed from snywhere, anytime.</p>
            </div>
        </div>
    )
}