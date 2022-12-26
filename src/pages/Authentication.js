import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Reset from "./Reset"
import SignUp from "./Signup"
const Authentication=()=>{
    return(
            
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Register" element={<SignUp/>}/>
                <Route path="/reset" element={<Reset/>}/>              
            </Routes>
        </div>
    )
}

export default Authentication