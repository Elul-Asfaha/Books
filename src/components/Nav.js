import { Menu as MenuIcon } from "@mui/icons-material"
import { useContext } from "react"
import { provideData } from "../App"
const Nav=()=>{

const  provided=useContext(provideData)

    return(
        <header  class="bg-white dark:text-white dark:bg-slate-900 ">
            <nav class="my-3 mx-4" >
                <div class="flex justify-between items-center">
                        Home
                    <div>
                        <span class="md:hidden">
                            <MenuIcon  onClick={provided.handleMenuToggle}/>
                        </span>
                        <span class="hidden md:block">user</span>
                    </div>
                </div>   
            </nav>
        </header>
    )
}

export default Nav