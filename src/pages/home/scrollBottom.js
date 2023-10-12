import { Link } from "react-router-dom";
function BasicExample() {
    const handleClickScroll = () => {
      const element = document.getElementById('section-1');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <>
        <div id="hero-section">
          <Link to='/contactUs'><button className="btn-scroll" onClick={handleClickScroll}>
            Contact Us
          </button></Link>
        </div>
        <div id="section-1">Section 1</div>
      </>
    );
  }
  
  export default BasicExample;