
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const ProjectCard = (props) => {
    const { project } = props;
    return (
        <Grid container className='bg-slate-300 h-[150px]'>
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
    );
  }

  export default ProjectCard;