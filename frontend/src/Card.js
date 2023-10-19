import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './Card.css';


export function tagColors(tag){
   
    switch(tag){
        case "javascript": return "warning";
        case "react": return "primary";
        case "kotlin": return "secondary"
        case "java": return "info";
        case "angular": return "error";
        case "mongoDB": return "success";
        case "node": return "success";
        default: return "default"
    }
}

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
                props.project.tags.map(tag=>{
                    return <Chip label={tag.name} style={{marginTop:10}} onClick={()=>{}} color={tagColors(tag.name.toLowerCase())}/>   
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
						className="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>
						More Details
					</button>
        </CardActions>
      
        </Card>
    </Box>
  );
}