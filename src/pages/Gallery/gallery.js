import React, { useState } from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { getImageListItemBarUtilityClass } from '@mui/material';


const Gallery =() =>
{
    let data =[
        {
            id:1,
            imgSrc:"https://res.cloudinary.com/drftzm08t/image/upload/v1669714235/cld-sample.jpg",
        },
        {
            id:2,
            imgSrc:"https://res.cloudinary.com/drftzm08t/image/upload/v1669714210/sample.jpg",
        },
        {
            id:3,
            imgSrc:"https://res.cloudinary.com/drftzm08t/image/upload/v1669714215/samples/food/fish-vegetables.jpg",
        },
        {
            id:4,
            imgSrc:"https://res.cloudinary.com/drftzm08t/image/upload/v1669714217/samples/landscapes/girl-urban-view.jpg",
        },
        {
            id:5,
            imgSrc:"https://res.cloudinary.com/drftzm08t/image/upload/v1669714218/samples/bike.jpg",
        },
        {
            id:6,
            imgSrc:"https://res.cloudinary.com/drftzm08t/image/upload/v1669714220/samples/people/bicycle.jpg",
        },
        {
            id:7,
            imgSrc:"https://res.cloudinary.com/drftzm08t/image/upload/v1669714221/samples/landscapes/beach-boat.jpg",
        },
        {
            id:8,
            imgSrc:"https://res.cloudinary.com/drftzm08t/image/upload/v1669714224/samples/landscapes/nature-mountains.jpg",
        },
        {
            id:9,
            imgSrc:"https://res.cloudinary.com/drftzm08t/image/upload/v1669714235/cld-sample-2.jpg",
        },
        {
            id:10,
            imgSrc:"https://res.cloudinary.com/drftzm08t/image/upload/v1669714236/cld-sample-4.jpg",
        }

    ]
    const [model,setModel]=useState(false);
    const [tempimgSrc,setTempImgSrc]= useState('');

    const getImg= (imgSrc)=>
    {
       setTempImgSrc(imgSrc);
       setModel(true);
    }
    return(
        <>
        
        <div className={model? "model open":"model"}>
             <img src={tempimgSrc}/>
             <CloseIcon onClick={()=>setModel(false)}></CloseIcon>
        </div>
        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src ={item.imgSrc} style={{width: '100%',marginTop:'54px'}}/>
                  </div>
                   )
            })}
                </div>
        </>
    )
}
export default Gallery;