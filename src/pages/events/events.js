import Post from "./post";
import "./post.css";
import Carousel from "./carousel";
import './carousel.css'
import Nav from "../Nav";
import Footer from '../footer';

function Events() {
  return (
      <><div>
  <Nav />
        <br></br>
       
        <Carousel /> 
      
        <br></br>
        <Post />
        <br></br>
        <Footer/>
      </div>
      </>
  );
}

export default Events;
   