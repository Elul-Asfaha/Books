// this page show the array of favorite books retrieved from the data base and displays them
import { useContext } from 'react'
import Favoritebooks from '../components/Favoritebooks.js'
import Footer from '../components/Footer.js'
import Nav from '../components/Nav.js'
import { provideData } from '../App.js'
import SearchOffIcon from '@mui/icons-material/SearchOff';
const Favorites=()=>{   

    const provided=useContext(provideData)
    const dispFavorites=provided.favorites.map(items=><Favoritebooks id={items.id}  key={items.id} isbn={items.key} />)
    return(
        <div className="min-h-screen flex flex-col min-h-screen text-base text-white bg-slate-800">
                <Nav />
                    <div className="p-4 flex-grow flex flex-col items-center justify-center ">
                    {(provided.favorites.length===0) && <div className='text-xl flex flex-col items-center  md:flex-row'><SearchOffIcon style={{fontSize: '100px'}}/> <p className='text-3xl'> Oops, <span className='text-xl'>Nothing found</span></p></div> }
                    <div className="flex flex-wrap w-full gap-5 items-center justify-center md:justify-evenly">
                    {dispFavorites}
                    </div>
                    </div>
                <Footer/>
            </div>
    )
}
export default Favorites