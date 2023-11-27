// import {Form, Button, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from 'react'
import "react-image-crop/dist/ReactCrop.css";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop';
import './imageeditor.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import testImg from '../images/testImg.png'




export default function ImageEditor() {
  // const [crop, setCrop] = useState()


  const [crop, setCrop] = useState()
  const imgRef = useRef(null)


  const handleChangeCrop = (c) => {
    // setCrop(c)
    console.log(imgRef.current)
  };

  const handleSelectImage = () => {
    
  };

  const handleUploadImage = () => {
    
  };
  
  return (
    

        <Box sx={{ width: '100%', height:'600px',  flexGrow: 1 }}>
          <Grid container spacing={3} 
              sx={{
              // posistion:'absolute',            
              // display: 'block',
              
              }}> 
              <Grid item xs={6} >
                <Button variant="contained" size="large" sx={{width:'40%'}} onClick={handleSelectImage} >Select Image</Button>
                
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" size="large" sx={{width:'40%'}} onClick={handleUploadImage} >Upload Image</Button>
                
              </Grid>
              <Grid item xs={6}>
                <ReactCrop crop={crop} onChange={c => setCrop(c)} onComplete={c=>handleChangeCrop(c)}>
                    <img src={testImg } className="cropImg" ref={imgRef}/>
                </ReactCrop>
              </Grid>
              <Grid item xs={6}>

              </Grid>
            
            </Grid>
    
        </Box>
            
   
      
  );
};