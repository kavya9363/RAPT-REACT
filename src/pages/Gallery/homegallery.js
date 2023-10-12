import React from "react";
import Gallery from "./gallery";
import Nav from "../Nav";
import Footer from "../footer";

function HomeGallery()
{
  return(
    <div  className="bg">
      <Nav/>
      <br></br>
      <h1>
        <Gallery/>
      </h1>
      <br></br>
      <h2>
        <Footer/>
      </h2>
        
    </div>

  );
 
}
export default HomeGallery;
