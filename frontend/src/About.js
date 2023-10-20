import React from 'react'
import Grid from '@mui/material/Grid';

export default function About() {
  return (
    <div className='border-solid border-l-4 border-red-700 m-10 p-5'>
      <Grid container md={12} className='gap-x-8'>
         <Grid item md={6} >
         <h1 className='font-medium text-3xl mb-10'>About US</h1>
        <p>Developers often face challenges when trying to find existing solution or connect with individuals
         who have experience with similar projects, technologies within the company. This lack of centralized resource
         can lead to duplicated efforts and hinder innovation. Our solution involves developing a comprehensive web-based
         platform that serves as a hub for sharing, discovering and collaborating on projects. Users can list their projects
         with key details, search for projects based on specific criteria and easily connect with project contributors
      </p>
         </Grid>
         <Grid item md={5} >
          <img  src="https://www.ubs.com/content/sites/global/en/our-firm/what-we-do/jcr:content/mainpar/toplevelgrid_1882987134/col2/textimage/image.1280.jpg/1684915575462.jpg" />
         </Grid>
      </Grid>
      
    </div>
  )
}
