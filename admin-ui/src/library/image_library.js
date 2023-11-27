import Header from "../headerfooter/header";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import './img_lib.css'
import TextEditor from "../forms/texteditor";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Gallery from "./gallery";
import ImageEditorToast from "./image_editor_toast";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



export default function ImageLibrary()  {
    const [open, setOpen] = React.useState(false);
    const dragBox = React.useRef(null);
   
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleUpload = event => {
      dragBox.current.click();
    };

    const handleUploadChange = event => {
      const fileUploaded = event.target.files[0];
    };
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      display: 'flex',  justifyContent:'center', alignItems:'center',
      color: theme.palette.text.secondary,
    }));
    return (
        <Grid container spacing={3} 
            sx={{
            posistion:'absolute',            
            display: 'block'
            }}>
          <Grid item xs={12}>
            {Header()}
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: '5%' }}>
            <Button variant="contained" size="large" sx={{width:'40%'}} onClick={handleClickOpen}>Add Image</Button>
            
            <Dialog open={open} onClose={handleClose}  maxWidth='lg' fullWidth='lg'>
                <DialogTitle>Add Image</DialogTitle>
                <DialogContent >
                <DialogContentText>
                  Choose the image by draging alternatively you may provide a url for the image
                </DialogContentText>

                <Grid container spacing={3} 
                    sx={{
                    // posistion:'absolute',            
                    // display: 'block'
                   
                    }}>
                    <Grid item xs={6}  >
                    <Box  className="uploadBox"   onClick={handleUpload} >
                        <Button
                            variant="contained"
                            component="label"
                            onClick={handleUpload}
                            >
                            Upload File
                            <input
                                type="file"
                                ref={dragBox}
                                onChange={handleUploadChange}
                                hidden
                            />
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={3} 
                      sx={{
                      // posistion:'absolute',            
                      // display: 'block'
                    
                      }}>
                        <Grid item xs={6}>
                          <TextField id="Title" label="Title" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="Author" label="Author" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="Copyright" label="Copyright" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h5" >
                            Legend
                          </Typography>
                          <Item sx={{height:'10vh'}}> <TextEditor /></Item>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h5" >
                            Description
                          </Typography>
                          <Item sx={{height:'10vh'}}> <TextEditor /></Item>
                        </Grid>

                    </Grid>
                </Grid>
                </Grid>

                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Simple Images" />
                  <Tab label="Videos"/>
                  <Tab label="Before and After" />
                  <Tab label="Slide Shows" />
                  <Tab label="Image Editor" />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                {Gallery()}
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                {ImageEditorToast()}
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
    );
}