import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>PIYUSH KUMAR</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>Introduction</b></h1>
          <p>
          I'm Piyush Kumar, a passionate Full Stack Web Developer with a creative mindset 
          and a love for crafting seamless digital experiences. I thrive on turning ideas 
          into functional and visually appealing web applications. My journey in web development 
          has equipped me with a versatile skill set that spans both front-end and back-end technologies.<br /><br />
            I am fluent in <b>C++</b> and working on a few 
            projects in the <b>MERN</b> stack.<br />
            I plan to learn <b>Next.js</b>, and<b> Typescript</b> in the near future. <br /><br />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home