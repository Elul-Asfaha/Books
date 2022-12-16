import { Menu as MenuIcon } from "@mui/icons-material"
import { useContext } from "react"
import { provideData } from "../App"
import Currentuser from "./Currentuser"
const Nav=()=>{

const  provided=useContext(provideData)

    return(
        <header  class="w-full text-white dark:bg-slate-900 p-5">
            <nav class="flex justify-between items-center">
                        Home
                    <div>
                        <span class="md:hidden">
                            <MenuIcon  onClick={provided.handleMenuToggle}/>
                        </span>
                        <div class="hidden md:block">
                            <Currentuser/>
                        </div>
                    </div>
            </nav>
        </header>
    )
}

export default Nav