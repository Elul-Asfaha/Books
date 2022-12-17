import { useContext } from "react"
import { provideData } from "../App"
const Signoutbtn=()=>{


    const provided=useContext(provideData)
    return(
        <button onClick={provided.handleLogOut} className="w-3/12 cursor-pointer border border-3 p-2 rounded-md">
            Sign out
        </button>
    )
}
export default Signoutbtn