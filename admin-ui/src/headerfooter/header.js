import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
//  function TemporaryDrawer() {
  

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }


const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    alert('still working');
    toggleDrawer('left', true)
  };


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [User, setUser] = React.useState(() => {
    // getting stored value
    const storedUser = localStorage.getItem("user");
    return JSON.parse(storedUser);
  });
  // setUser();
  console.log(User.username);


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const loadLibrary = () => {
    window.location.href = '/imagelibrary'
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      
      <List>
        {['Library'].map((text, index) => (
          <ListItem button key={text} onClick={loadLibrary}>
            <ListItemIcon >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <Box 
        sx = {{
            flexGrow:1,
            minWidth: '100%',
            position:'relative',
            display: 'block'
        }}
        >
        <AppBar position="static"
           
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              
            
              <div>
                {['left'].map((anchor) => (
                  <React.Fragment key={anchor}>
                   <MenuIcon onClick={toggleDrawer(anchor, true)}/>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>


            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BlueLion
            </Typography>

            <Stack direction="row" spacing={2}>
               <Avatar alt={User.username} src="/static/images/avatar/1.jpg" />
      
           </Stack>

          </Toolbar>
        </AppBar>
      </Box>
    )
    
}

export default Header; 