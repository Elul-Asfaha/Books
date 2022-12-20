import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import SignUp from "./Signup"
const Authentication=()=>{
    return(
            
        <div>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/Register" element={<SignUp/>}/>
            </Routes>
        </div>
    )
}

export default Authentication