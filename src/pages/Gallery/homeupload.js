//import logo from './logo.svg';
import './homeupload.css'
//import BackgroundImagePage from './bg';
import Apple from './upload';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom';

function Homeupload() {
  return (
    
    
    <div className="upload-header">
      <div className="Arrow-div">
        <Link to='/Gallery'><ArrowBackIosIcon className="DoubleArrowLeftIcon" >Back to Gallery</ArrowBackIosIcon></Link>
      </div>
        <Apple/>
    </div>
  );
}

export default Homeupload; 