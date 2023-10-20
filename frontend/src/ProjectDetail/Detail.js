import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Card, Chip, IconButton, Button, Avatar} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {Person} from "@mui/icons-material";

const Detail = ({project}) => {
    return(<div className='h-full'>
            <React.Fragment>

            </React.Fragment>
            <Card className='ml-2 mr-2 pl-2 pr-2 h-96 mt-10 pt-10 pl-10'>
                <Grid container className=' rounded m-auto'>
                    <Grid item md={7} className='bg-[#e0ebeb]  rounded p-10 '>
                        <h1 className='text-2xl mt-2 font-medium'>
                            {project.title}
                        </h1>
                        <br/>
                        <h2 className=' mt-2 break-words text-base'>
                            {project.description}
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
                                        {project.tags.map((tag) => {
                                            return(
                                                <Chip label={tag} color="error" className="m-2 w-[100px]"/>
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
                            <div className=' text-center text-2xl m-auto border-black border-1 p-1 font-medium'>
                                Contributors
                            </div>
                            <div className='m-auto w-[60%] max-h-[200px] overflow-auto'>
                                <List dense sx={{ width: '80%'}} className='max-h-full overflow-auto'>
                                    {project.contributors.map((name)=>{ return(
                                        <ListItem
                                            key={name}
                                        >
                                            <Avatar>H</Avatar>
                                            <ListItemText id={name} primary={name} className='ml-1' />
                                        </ListItem>
                                    )})}
                                </List>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                {/* <div className="flex w-full m-2 h-[300px]">

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
    </div> */}
            </Card>

        </div>
    )
}
export default Detail