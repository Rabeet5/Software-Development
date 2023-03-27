import LoginScreen from "../Firebase/Authentication/Login";
import SignUpScreen from "../Firebase/Authentication/Signup";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function AllRoutes(){

    return<>
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
        </Routes>
        </BrowserRouter>
    </>
}

export default AllRoutes;

