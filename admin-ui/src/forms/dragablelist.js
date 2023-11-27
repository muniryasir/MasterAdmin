import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import testImg from '../images/testImg.png';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Switch from '@mui/material/Switch';
import CloseIcon from '@mui/icons-material/Close';
const finalSpaceCharacters = [
  {
    id: '1',
    name: 'Step1 ',
    thumb: testImg
  },
  {
    id: '2',
    name: 'Step2 ',
    thumb: testImg
  },
]

function DList() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  const theme = useTheme();

  return (
    <div className='stepCard' sx={{ width: '100%'}}>
      <header  sx={{ width: '100%'}}>
        <h3>Steps</h3>
        <DragDropContext onDragEnd={handleOnDragEnd} >
          <Droppable droppableId="characters" >
            {(provided) => (
              <ul className="characters"  {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}  >
                      {(provided) => (
                        <li   ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                          <Card sx={{ display: 'flex', width:'100%', background:'#B5E7F3' }}>
                          <CardMedia
                              component="img"
                              sx={{ width: 120, height:120 }}
                              image={testImg}
                              alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column'  , width: '100%'}} >
                              <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5" sx={{textAlign:'left' }}>
                                  Step1
                                </Typography>
                                
                              </CardContent>
                              <CardActions disableSpacing sx={{ justifyContent:'right' }}>
                                  <IconButton aria-label="Enable">
                                    <FavoriteIcon />
                                  </IconButton>
                                  <Switch   />
                                  <IconButton aria-label="Delete Step">
                                    <CloseIcon />
                                  </IconButton>
                              </CardActions>
                            </Box>
                            
                          </Card>
                          </div>
                          
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
     
    </div>
  );
}

export default DList;