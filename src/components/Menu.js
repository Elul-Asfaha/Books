import { Close } from '@mui/icons-material';
import Signoutbtn from './Signoutbtn';
import { useContext } from 'react';
import { provideData } from '../App';
import Currentuser from './Currentuser';
const Menu=()=>{
    const provided=useContext(provideData)




    return(
        <div class="flex flex-col md:hidden justify-between absolute top-0 left-0 bot-0 w-full h-screen bg-slate-700 p-3 z-50">
            <div class="flex justify-between">
                <div class="flex flex-col justify-center">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact us</p>
                </div>    
                <button class="flex">
                    <Close  onClick={provided.handleMenuToggle}/>
                </button>
            </div>
            <div class="flex justify-between px-5">
                <Currentuser/>
                <Signoutbtn class="flex items-center"/>
            </div>
        </div>
    )
}
export default Menu