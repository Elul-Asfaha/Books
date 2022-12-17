import { Avatar } from "@mui/material"
import { useContext } from "react"
import { provideData } from "../App"
const Currentuser=()=>{
    const provided=useContext(provideData)

    return(
        <div className="flex justify-center items-center gap-2 " >
            <Avatar alt={provided.user} src="/static/images/avatar/1.jpg" style={{ width: 28, height: 28 }}/>
            <span>
                {provided.user}
            </span>
        </div>
    )
}
export default Currentuser