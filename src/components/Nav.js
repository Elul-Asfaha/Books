import { Menu as MenuIcon } from "@mui/icons-material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { provideData } from "../App"
import Currentuser from "./Currentuser"
const Nav=()=>{

const  provided=useContext(provideData)

    return(
        <header  className="w-full text-white bg-slate-900  p-5">
            <nav className="flex justify-between items-center">
                    <Link to="/" onClick={provided.handleSearchReset} className="cursor-pointer text-yellow-100 ">
                        Open
                        <span className="text-blue-600 text-sm">
                            Library
                        </span>
                    </Link>
                    <div className="cursor-pointer">
                         <span className="md:hidden">
                            <MenuIcon  onClick={provided.handleMenuToggle}/>
                        </span>
                        <div className="hidden md:block md:flex md:items-center md:gap-2">
                            <Link  to="/favorites">
                                Favorites (<span>{provided.favorites.length}</span>)
                            </Link> 
                            <Currentuser/>
                        </div>
                    </div>
            </nav>
        </header>
    )
}

export default Nav