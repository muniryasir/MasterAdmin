
import React, { useState, useRef } from 'react'

import './imageeditor.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import testImg from '../images/testImg.png'

import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';



export default function ImageEditorToast() {
  // const [crop, setCrop] = useState()


  const myTheme = {
    // Theme object to extends default dark theme.
  };
  
  const MyComponent = () => (
    <ImageEditor
      includeUI={{
        loadImage: {
          path: 'img/sampleImage.jpg',
          name: 'SampleImage',
        },
        theme: myTheme,
        menu:['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'mask', 'filter','resize'],
        initMenu: 'filter',
        uiSize: {
          width: '100%',
          height: '600px',
        },
        menuBarPosition: 'bottom',
      }}
      cssMaxHeight={500}
      cssMaxWidth={700}
      selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70,
      }}
      usageStatistics={true}
    />
  );


  const handleChangeCrop = (c) => {
    // setCrop(c)
    // console.log(imgRef.current)
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
             
              <Grid item xs={12}>
                {MyComponent()}
              </Grid>
            
            </Grid>
    
        </Box>
            
   
      
  );
};