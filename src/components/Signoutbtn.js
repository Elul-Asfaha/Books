import { useContext } from "react"
import { provideData } from "../App"
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
const Signoutbtn=()=>{


    const provided=useContext(provideData)
    return(
        <Link to="/" onClick={provided.handleLogOut} className=" cursor-pointer border border-3 w-full rounded-md md:w-auto">
            <p className="md:hidden   text-center ">Sign out</p>
            <span className="hidden md:flex">
                <CloseIcon />   
            </span>
        </Link>
    )
}
export default Signoutbtn