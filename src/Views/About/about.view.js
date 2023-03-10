import React from "react";

import Navb from "../../Components/Navbar/navbar";
import BottomNav from "../../Components/BottomNavbar/bottomNav";
import ContactUsHome from '../../Components/HomePageSections/ContactUs/contactus.homepage.section';

import './about.style.css';
import ClientPage from "../clientThink/client";

export default function About() {
  return (
    <div>
      <div className="heade">
        <Navb color='white' imagePath="/images/aboutUs/ablogo.svg" selectedOption={2} />
        <h1 className="heading">About Us</h1>
        <br></br>
        <img
          className="sha"
          src="/images/aboutUs/Shape-Radial.svg"
          alt="Logo"
        />
        <img className="dots" src="/images/aboutUs/dots.svg" alt="Logo" />
      </div>
      <section className="second-content">
        <div className="first-subContent">
          <img src="/images/aboutUs/Rectangle-15.jpg" className="char1" alt=""></img>
          <h4 className="subHeading1">Our history </h4>
          <h4 className="subHeading2">Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmod <br/> tempor invidunt ut labore et dolore magna <br/> aliquyam erat, sed diam voluptua. At vero eos <br/> et accusam et justo duo dolores et ea rebum. <br/> Stet clita kasd gubergren, no sea takimata.</h4>
        </div>
        <img
          className="sha2"
          src="/images/aboutUs/secShape.svg"
          alt="Logo"
        />
        <div className="second-subContent">
          <h4 className="subHeading3">Our goal</h4>
          <h4 className="subHeading4">Lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam nonumy eirmod <br /> tempor invidunt ut labore et dolore magna<br /> aliquyam erat, sed diam voluptua. At vero eos<br /> et accusam et justo duo dolores et ea rebum.<br /> Stet clita kasd gubergren, no sea takimata.</h4>
          <img
            src="/images/aboutUs/dylan-gillis-KdeqA3aTnBY-unsplash.png"
            className="char2"
            alt=""
          ></img>
        </div>
      </section>
      <section className="third-content">
        <img
          className="vid"
          src="/images/aboutUs/old.png"
          alt=""
         / >
        
      </section>

      <section className="fourth-content">
        <div>
          <ClientPage />
        </div>
        
      </section>

      <section className="fifth-content">
        <div className='contact-home'>
            <ContactUsHome />
        </div>
        
      </section>

      <BottomNav />
    </div>
  );
}
