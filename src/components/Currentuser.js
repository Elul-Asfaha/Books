import { Avatar } from "@mui/material"

const Currentuser=()=>{
    return(
        <div className="flex justify-center items-center gap-2 " >
            <Avatar alt="Scorp Sharp" src="/static/images/avatar/1.jpg" style={{ width: 28, height: 28 }}/>
            <span>
                user
            </span>
        </div>
    )
}
export default Currentuser