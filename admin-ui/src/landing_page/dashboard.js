import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import header from '../headerfooter/header'
import footer from '../headerfooter/footer'
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EnhancedTable from './application_stats';
import EnhancedTableUserStats  from './user_stats';
// import FullScreenDialog from '../forms/add_itin';
import { connect } from 'react-redux';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const landing_page = (props) => {
  // console.log(props.userDetails.username);
    return (

     
      //  {header()}


          <Box 
          
          sx={{ width: '100%', 
              // maxWidth: 500, 
              height: '100vh',
              display:"flex",
              //  justifyContent:"center", alignItems:"center",
              
              // background: 'linear-gradient(#93B6F9,transparent)',
              
              // border: "3px solid #5074F2",
              backgroundColor: "#93E3F9",
              borderRadius: 9,
              borderColor: 'blue'
          }}>
        
        
        <Grid container spacing={1} 
        sx={{
          posistion:'absolute',            
          display: 'block'
        }}>
          <Grid item xs={12}>
          {header()}
          </Grid>
          <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <Grid container spacing={1} 
            sx = {{
                 justifyContent:"center", alignItems:"center",
                 borderRadius: 9,
                 display:"flex",
              background: 'linear-gradient(#93B6F9,transparent)',
              backgroundColor: "white",
              // border: "3px solid #5074F2",
              // width: '90%',
              // paddingLeft:'5%',
              marginLeft:'5%',
            }}
          >
            <Grid item xs={10}>
              
            {EnhancedTable()}    
            </Grid>

            <Grid item xs={10}>
            {EnhancedTableUserStats()}    
            </Grid>
          </Grid>
          
        </Grid>
        </Grid>
        
          {/* Box component in Material-UI */}
            
        
        </Box>
         
     
    )
}


// export default connect(mapStateToProps, null)(landing_page);

export  default landing_page;