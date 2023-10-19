import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Header = () => {
    return(
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
  
)
}
export default Header