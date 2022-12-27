import { useContext } from "react"
import { provideData } from "../App"
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
const Signoutbtn=()=>{


    const provided=useContext(provideData)
    return(
        <Link to="/" onClick={provided.handleLogOut} className=" cursor-pointer border border-3 rounded-md">
            <span className="md:hidden w-3/12  p-2">Sign out</span>
            <span className="hidden md:block">
                <CloseIcon />
            </span>
        </Link>
    )
}
export default Signoutbtn