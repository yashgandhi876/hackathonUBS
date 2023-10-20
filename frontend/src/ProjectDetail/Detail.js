import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Card, Chip, IconButton, Button, Avatar, Divider} from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {Person} from "@mui/icons-material";
import { useLocation } from 'react-router-dom';

const Detail = () => {
    const {state} = useLocation();
    const {project} = state;
    console.log(state);
    return(<div className='h-full'>
            <React.Fragment>

            </React.Fragment>
            <Card className='ml-2 mr-2 pl-2 pr-2 mt-10 pt-10 pl-10'>
                <Grid container className=' rounded m-auto'>
                    <Grid item md={7} className='bg-[#e0ebeb]  rounded p-10 '>
                        <h1 className='text-2xl mt-2 font-medium'>
                            {project.name}
                        </h1>
                        <br/>
                        <h2 className=' mt-2 break-words text-base'>
                            {project.desc}
                        </h2>
                        <br/>
                        <div className='mt-2'>
                            {/* <Link variant="subtitle1" href="#" className='text-center text-lg mt-2'>
                {project.linkText}
              </Link> */}
                            <h2 className=' mt-2 break-words text-base font-medium'>
                                Tags
                            </h2>
                            <Grid container>
                                <Grid item md={9}>
                                    <div className=''>
                                        {project.tags.map((tag,i) => {
                                            return(
                                                <Chip label={tag.name} color={`${i % 2 === 1 ?'default':'error'}`} className="m-2 w-[100px]"/>
                                            )
                                        })

                                        }
                                    </div>
                                </Grid>
                                <Grid item md={3} >
                                    <Button
                                        type="button"
                                        variant={"outlined"}
                                        color={"error"}
                                        className="mt-10 ml-7 w-32 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                                    >
                                        Gitlab link
                                    </Button>
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>
                    <Grid md={5}>
                        <div className="  h-full ml-[5%]">
                            <div className=' text-2xl m-auto border-black border-1 p-1 font-medium'>
                                Contributors
                            </div>
                            <div className='m-auto'>
                                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className='max-h-full'>
                                    {project.contributors.map((contributor)=>{ return(

                                        <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                          primary={<React.Fragment>
                                            <Typography
                                              sx={{ display: 'inline' }}
                                              component="span"
                                              variant="body2"
                                              color="text.primary"
                                            >
                                              <b>{contributor.name}</b>
                                            </Typography>
                                          </React.Fragment>}
                                          secondary={
                                            <React.Fragment>
                                              <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                              >
                                                AVP, Client Channel
                                              </Typography>
                                              {" -- " + contributor.email}
                                            </React.Fragment>
                                          }
                                        />

                                      </ListItem>


                                    )})}
                                </List>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Card>

        </div>
    )
}
export default Detail