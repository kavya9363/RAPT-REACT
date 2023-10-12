import React, { useState } from "react";
import axios from "axios";
import "./upload.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from "react-router-dom";

function Vee() {
  const [file, setFile] = useState(null);

  const UPLOAD_ENDPOINT =
    "http://localhost/react-php-file-upload/backend/upload.php";

  const handleSubmit = async e => {
    e.preventDefault();
    let res = await uploadFile(file);
    console.log(res.data);
  };
  const uploadFile = async file => {
    const formData = new FormData();
    formData.append("avatar", file);

    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });
  };

  const handleOnChange = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
     <div>
    <div className="bg"><form onSubmit={handleSubmit}>
      <div className="bkg">
      <Link to='/Gallery'><h1>Add Post</h1></Link>
      <input type="file" onChange={handleOnChange} />
      <button type="submit">Upload File</button>
      </div>
     
    </form>
    </div>
    </div>

    
  );
}

export default Vee;