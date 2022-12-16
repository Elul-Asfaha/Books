import { Close } from '@mui/icons-material';
import Signoutbtn from './Signoutbtn';
import { useContext } from 'react';
import { provideData } from '../App';
const Menu=()=>{
    const provided=useContext(provideData)




    return(
        <div class="flex flex-col md:hidden justify-between absolute top-0 left-0 bot-0 w-full h-screen bg-slate-700 p-3 ">
            <div class="flex justify-between">
                <div>
                    <p>User</p>
                    <p>About</p>
                    <p>Contact us</p>
                </div>    
                <button>
                    <Close  onClick={provided.handleMenuToggle}/>
                </button>
            </div>
            <Signoutbtn class="flex items-center"/>
        </div>
    )
}
export default Menu