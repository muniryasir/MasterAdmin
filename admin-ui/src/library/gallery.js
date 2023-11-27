import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TextEditor from "../forms/texteditor";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import './gallery.css';
import SearchAppBar from './galleryBar';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  let galleryData = [
    {
    'Title': 'TitleList',
    'Author': 'Author Name',
    'Copyright': 'Copyrighter',
    'Legend': 'Legend',
    'Description': 'Image Description'
    },
    {
      'Title': 'Title Image',
      'Author': 'Author Name',
      'Copyright': 'Copyrighter',
      'Legend': 'Legend',
      'Description': 'Image Description'
    }

];

  function CardDetails(card) {

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
                    // posistion:'absolute',            
                    // display: 'block'
                   
                    }}>
                    <Grid item xs={6}  >
                    <Box  className="uploadImgBox"   onClick={handleUpload} >
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
                          <TextField id="Title" label="Title" variant="outlined" value={card.Title} />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="Author" label="Author" variant="outlined" value={card.Author} />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField id="Copyright" label="Copyright" variant="outlined" value={card.Copyright} />
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
    )


  }

  function GalleryCards() {
    
    let cards = galleryData.map((card) =>  
    <div style={{ 
      // background:'blue', 
     width:'100%',
     display:'flex', 
     alignItems:'center', 
     justifyContent:'center',
     // flexDirection:'column',
     marginTop:'0.1%',
     marginBottom:'0.1%',
     height:'450px'
   
 }}> 
      <Card sx={{ width:'80%', 
      // marginTop:'10%',
      // marginBottom:'10%',
      height: '100%'
      
      }}>
        
        
          <CardContent>
           {CardDetails(card)}
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            
          </CardActions>
        
        </Card>
        </div>
    )
    return (
    //  <div style={{ 
    //     background:'blue', 
    //     width:'100%',
    //     display:'flex', 
    //     alignItems:'center', 
    //     // flexDirection:'column',
    //     marginTop:'1%',
    //     marginBottom:'1%'
      
    // }}> 
    <Carousel autoPlay={false} sx={{backgroundColor: 'red', width:'100%'}}>
      {/* {cards} */}
      
    {cards}
    
    
    </Carousel>
    // </div>
    )
  }

export default function Gallery() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div>
        <Grid container spacing={3} 
            sx={{
            posistion:'absolute',            
            display: 'block'
            }}>
          <Grid item xs={12}>
            {SearchAppBar()}
          </Grid>    
          <Grid item xs={12}>
            <Box
              sx={{
                width: '100%',
                height: '500px',
                backgroundColor: 'yellow',
                display:"flex",
                // flexDirection:"column",
                // justifyContent:"center",
                alignItems:'center'
              }}
              style={{
                border: "2px solid black",
                // added scroll
              }}
            >
              {GalleryCards()}
            
            </Box>
          </Grid>
        </Grid>

      </div>
    );

}