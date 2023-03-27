import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { LoginUser } from "../Config/FirebaseMethods";

function LoginScreen(){

    const [loader,setLoader] = useState()
    const [user,setUser] = useState({})

    const MakeLogin =()=>{
        LoginUser(user)
        .then((res)=>{
            console.log(res,'User founded')
        })
        .catch((err)=>{
            console.log(err,'User not Exist')
        })
        

    }


    return<>
        <Box sx={{height:'100vh'}}
        className="d-flex justify-content-center align-items-center "
        >

            <Box>
                <Typography variant="h3">Login</Typography>

                <Box className='p-2' >
                    <TextField 
                    variant="outlined"
                    label='E-mail'
                    type={'email'}
                    color='warning'
                    onChange={(e)=>{
                        setUser({...user,email:e.target.value})
                    }}
                    />
                </Box>

                <Box className='p-2'>
                    <TextField  
                    variant="outlined"
                    label='Password'
                    type={'password'}
                    color='warning'
                    onChange={(e)=>{
                        setUser({...user,password:e.target.value})
                    }}
                    />
                </Box>

                <Box className='p-2 text-center'>
                    <Button
                    variant="contained"
                    className="m-2 p-2"
                    onClick={MakeLogin}
                    >Login</Button>
                </Box>
            </Box>

        </Box>
    </>

}


export default LoginScreen;

