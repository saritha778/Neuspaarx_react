import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Navbar from "./components/Navbar"
import BannerSection from "./components/BannerSection"
import About from "./components/About"
import Focus from "./components/Focus"
import Footer from "./components/Footer"
import Industries from "./components/Industries"
import ContactUs from "./components/ContactUs"
import Title from "./components/Title"
import Header from "./components/Header"
import Services  from "./components/Services"
function App(){
  return(
    <div>
      <Navbar/>
      <BannerSection/>
      <Header heading="About Us"/>
      <About/>
      <Header heading="We Focus On"/>
      <Focus/>
      <Header heading="Our Services"/>
      <Services/>
      <Header heading="Industries"/>
      <Industries/>
      <Header heading="Contact Us"/>
      <ContactUs/>
      <Title/>
      <Footer/>
    </div>
  )
}
export default App;