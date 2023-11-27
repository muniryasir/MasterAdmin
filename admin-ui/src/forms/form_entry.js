
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
// import Button from "@material-ui/core/Button";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DList from './dragablelist';
import TitleCover from './titlecover';
import TextEditor from './texteditor';
import Typography from '@mui/material/Typography';

const defaultValues = {
    name: "",
    age: 0,
    gender: "",
    os: "",
    favoriteNumber: 0,
  };

export default function FormEntry()  {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
    const handleSliderChange = (name) => (e, value) => {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formValues);
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
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
         sx={{
          posistion:'absolute',            
          // display: 'block',
          paddingLeft: '2%',
          paddingRight: '2%',
          paddingTop: '5%',
          background:'#E2E3D6'
        }}>
        
          <Grid item  xs={6} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              posistion:'absolute',            
              // display: 'block',
              paddingLeft: '2%',
              paddingRight: '2%',
              paddingTop: '5%',
              // background:'red'
            }}>
              <Grid item xs={12}> 
                <Item> 
                  <TextField id="standard-basic" label="Title" variant="outlined" fullWidth/>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item> <DList /></Item>
              </Grid>
          
              </Grid>
            </Grid>
          <Grid item xs={6} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{
                posistion:'absolute',            
                // display: 'block',
                paddingLeft: '2%',
                paddingRight: '2%',
                paddingTop: '5%',
                // background:'red'
              }}>
                <Grid item xs={12} >
                <Typography variant="h5" >
                Cover Image
                  </Typography>
                  <Item sx={{
                    }}> 
                        {TitleCover()}
                    </Item>
                </Grid>
                <Grid item xs={12} >
                <Typography variant="h5" >
                Short Description
                  </Typography>
                    <Item sx={{height:'20vh'}}> <TextEditor /></Item>
                </Grid>
            </Grid>
   
         
          
          {/* <Button variant="contained" color="primary" type="submit">
            Submit
          </Button> */}
          </Grid>
        </Grid>
      </form>
    );
  };