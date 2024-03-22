import React from "react";
import picture from "../images/2.jpg";
import icon from "../images/mail_icon.png";
import "../css/mainInfo.css"

export default function MainInfo() {
  return(
    <div className="cardContainer">
      <div className="cardCSS">
        <img src={picture} alt="Header Image" className="Picture"/>
        <div className="mainInfo">
          <h1>Patrik Drevestedt</h1>
          <h2>Frontend Developer</h2>
          <h3>drevestedt.website</h3>
        </div>
          <button className="mailButton">
           <img src={icon} alt="Mail icon"/>
          Email</button>
        <div className="about">
          <h3>About</h3>
          <h4>
            My two favorites things in Web Development are Javascript and React.<br></br>
            I've been learning and practicing on my own projects since Septmenber 2023.
            My goal is to start working at a Company as a Junior Dev as soon as possible.
          </h4>
        </div>
        <div className="interests">
          <h3>Interests</h3>
          <h4>
            Calistenics, Trading, Technology in general.<br></br>
            When I get the chance I also hang out with my friends.
            This usually goes hand in hand with my interests.
          </h4>
        </div>
        <div className="footerContainer">
          <div className="footer">
            <footer>©Drevestedt Development 2024</footer>
          </div>
        </div>
      </div>
    </div>
  )
}