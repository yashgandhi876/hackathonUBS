import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Chip, IconButton } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Detail = ({project}) => {
    console.log(project.contributors)
    return(<div className='h-full'>
        <React.Fragment>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} className='w-full'>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            Project Name
          </Typography>
        </Toolbar>
    </React.Fragment>
    <Grid container md={11} className='bg-[#9DB2BF] h-[150px] rounded m-auto'>
          <Grid item md={12}>
              <h1 className='text-center text-2xl mt-2'>
                {project.title}
              </h1>
              <h2 className='text-center text-lg mt-2'>
                {project.description}
              </h2>
              <div className='text-center mt-2'>
              <Link variant="subtitle1" href="#" className='text-center text-lg mt-2'>
                {project.linkText}
              </Link>
              </div>
          </Grid>
    </Grid>
    <div className="flex w-full m-2 h-[300px]">
        <div className="w-[40%] bg-[#DDE6ED] h-full ml-[5%] rounded">
            <div className='w-[80%] text-center text-2xl bg-[#033f63] rounded m-auto my-2 text-white border-black border-1 p-1'>
                Contributors
            </div>
            <div className='m-auto w-[60%] max-h-[200px] overflow-auto'>
                <List dense sx={{ width: '80%'}} className='max-h-full overflow-auto'>
                    {project.contributors.map((name)=>{ return(
                        <ListItem
                        key={name}
                    >
                        <IconButton>
                        <EmailOutlinedIcon/>
                        </IconButton>
                        <ListItemText id={name} primary={name} className='ml-1' />
                    </ListItem>
                    )})}
                </List>
            </div>
        </div>
        <div className="w-[40%] bg-[#DDE6ED] h-full ml-[5%] rounded">
            <div className='w-[80%] text-center text-2xl bg-[#033f63] rounded m-auto my-2 text-white border-black border-1 p-1'>
                Tags
            </div>
            <div className='flex items-stretch justify-center flex-wrap m-3'> 
                {project.tags.map((tag) => {
                    return(
                        <Chip label={tag} color="primary" className="m-2 w-[100px]"/>
                    )
                })

                }
            </div>
        </div>
    </div>
        </div>
    )
}
export default Detail