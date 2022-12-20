import { Close } from '@mui/icons-material';
import Signoutbtn from './Signoutbtn';
import { useContext } from 'react';
import { provideData } from '../App';
import Currentuser from './Currentuser';
import { Link } from 'react-router-dom';
const Menu=()=>{
    const provided=useContext(provideData)




    return(
        <div className="flex flex-col md:hidden justify-between absolute top-0 left-0 bot-0 w-full h-screen bg-slate-700 p-3 z-50">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center">
                    <Link to="/" onClick={provided.handleMenuToggle}>Home</Link>
                    <Link to="/favorites" onClick={provided.handleMenuToggle}>Favorites (<span className='text-white'> {provided.favorites.length} </span>)</Link>
                    <p>About</p>
                    <p>Contact us</p>
                </div>    
                <button className="flex">
                    <Close  onClick={provided.handleMenuToggle}/>
                </button>
            </div>
            <div className="flex justify-between px-5">
                <Currentuser/>
                <Signoutbtn className="flex items-center"/>
            </div>
        </div>
    )
}
export default Menu