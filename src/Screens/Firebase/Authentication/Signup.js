import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SignupUser } from "../Config/FirebaseMethods";

function SignUpScreen() {

    const [usersignup, setUsersignup] = useState({})
    const { loader, setLoader } = useState(false)

    const MakeNewUser = () =>{
        
        SignupUser(usersignup)
        .then((res)=>{
            setLoader(true)
            console.log(res,'User Created')
        })
        .catch((err)=>{
            // setLoader(false)
            console.log(err,'Invalid Properties')
        })
    }

    return <>
        <Box sx={{ height: '100vh' }}
            className="d-flex justify-content-center align-items-center "
        >
            <Box>
                <Typography
                    variant="h3"
                >
                    Signup
                </Typography>

                <Box
                    className='p-2'
                >
                    <TextField
                        variant="standard"
                        label='UserName'
                        type={'text'}
                        color="warning"
                        onChange={(e) => setUsersignup(
                            { ...usersignup, username: e.target.value }
                        )}
                    />
                </Box>

                <Box className='p-2'>
                    <TextField
                        variant="standard"
                        label='E-mail'
                        type={'email'}
                        color="warning"
                        onChange={(e)=>setUsersignup({
                            ...usersignup,email:e.target.value
                        })}
                    />
                </Box>

                <Box>
                    <TextField
                        variant="standard"
                        label='Password'
                        type={'password'}
                        color="warning"
                        onChange={(e)=>setUsersignup({
                            ...usersignup,password:e.target.value
                        })}
                    />
                </Box>

                <Box>
                    <Button variant="contained"
                        className="m-2"
                        color="warning"
                        onClick={MakeNewUser}
                    >
                        Signup
                    </Button>
                </Box>
            </Box>
        </Box>
    </>

}


export default SignUpScreen;

