import { Menu as MenuIcon } from "@mui/icons-material"
import { useContext } from "react"
import { provideData } from "../App"
import Currentuser from "./Currentuser"
const Nav=()=>{

const  provided=useContext(provideData)

    return(
        <header  className="w-full text-white bg-slate-900  p-5">
            <nav className="flex justify-between items-center">
                    <div className="cursor-pointer text-yellow-100 ">
                        Open
                        <span className="text-blue-600 text-sm">
                            Library
                        </span>
                    </div>
                    <div>
                        <span className="md:hidden">
                            <MenuIcon  onClick={provided.handleMenuToggle}/>
                        </span>
                        <div className="hidden md:block">
                            <Currentuser/>
                        </div>
                    </div>
            </nav>
        </header>
    )
}

export default Nav