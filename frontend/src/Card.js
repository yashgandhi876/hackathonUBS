import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './Card.css';

export default function ProjectCard(props) {
    
  return (
    <Box className="box" sx={{  margin: 5 }} >
      <Card variant="outlined" className='shadow-md rounded-lg'>
      
        <CardContent>
          <Typography variant="h5"  gutterBottom>
            {props.project.name}
          </Typography>
          <Typography sx={{ mb: 1.5}} className='text-sm text-ellipsis overflow-hidden ...'  component="div">
            {props.project.desc}
          </Typography>
          <Stack direction="row" className='flex-wrap' spacing={1}>
            {
                props.project.tags.map((tag, index)=>{
                    return <Chip label={tag.name} style={{marginTop:10}} onClick={()=>{}} color={`${index % 2 === 1 ? 'error': 'default'}`}/>   
                })
            }
         </Stack>
           <br/>
          <Typography sx={{ mb: 1.5 }}  component="div">
            contributors <Chip variant="outlined" size='small' label={props.project.contributors.length}/> 
          </Typography>
           
        </CardContent>
        <CardActions>
        <button
						type="button"
						className="w-32 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white-900  rounded-lg border focus:z-10 focus:ring-4 bg-transparent hover:bg-gray-100  dark:hover:bg-gray-700  dark:hover:text-white"
					>
						More Details
					</button>
        </CardActions>
      
        </Card>
    </Box>
  );
}