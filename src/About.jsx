import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/JS1.svg";
import Common from "./Common";
const About=()=> {
  return (
   

        <>

        <Common
         name="Welcome To About Page"
         imgsrc={web}
         visit="/Contact"
         btnname="Contact Now"/>
        </>
    );
}


export default About;
