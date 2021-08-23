import React from "react";
import { Image } from "react-bootstrap";
import Photo from "../../Images/photo-2.jpg"
import "./About.css"

const About = () => {
  return (
    <div className='bg-image '>
        <Image src={Photo} className="d-block mx-auto img-fluid w-100" alt="Photo">
        
        </Image>
        <div className="centered">Centered</div>
    </div>
  );
};

export default About;
