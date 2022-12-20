// this page show the array of favorite books retrieved from the data base and displays them
import { useContext } from 'react'
import Favoritebooks from '../components/Favoritebooks.js'
import Footer from '../components/Footer.js'
import Nav from '../components/Nav.js'
import { provideData } from '../App.js'
const Favorites=()=>{   

    const provided=useContext(provideData)
    const dispFavorites=provided.favorites.map(items=><Favoritebooks id={items.key} key={items.id} />)
   

    return(
        <div className="min-h-screen flex flex-col min-h-screen text-base text-white bg-slate-800">
                <Nav />
                    <div className="p-4 flex-grow flex flex-col items-center justify-center gap-5">
                    {dispFavorites}
                    </div>
                <Footer/>
            </div>
    )
}
export default Favorites