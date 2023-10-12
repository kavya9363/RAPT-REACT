import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";
import {Link} from "react-router-dom";
import PositionedMenu from "./dropdown";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile";
import FaceIcon from '@mui/icons-material/Face';




function MainNav() {
	const navRef = useRef();

	const {isLoading,error} = useAuth0();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Rapt!</h3>
			<nav ref={navRef} className="align-items-left">
				<a><Link to='/'>Home</Link></a>
				<a><Link to='/Events'>Events</Link></a>
				<a  className="click"><PositionedMenu/></a>
				<a><Link to='/AboutUs'>About</Link></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
      </nav>
      
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
      <nav  className="align-items-right">
		{error && <p>Authentication Error</p>}
		{!error && isLoading && <p>Loading...</p>}
		{!error && !isLoading && (
		
			<button><Link to='/Login'><LoginButton/><LogoutButton/></Link></button>
			
			)}
			<Link to='/profile'><FaceIcon fontSize="large" className="icon"/></Link>
		
      </nav>
		</header>
	);
  }




  export default MainNav;