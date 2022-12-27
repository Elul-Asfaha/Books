import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase';



const Favorite=(props)=>{
    const [fav,setFav]=useState(false)

    const handleFavoriteToggle=()=>{
    (!fav) && addFav() 
        setFav(true)
 }
 const addFav=async()=>{
    await addDoc(collection(db,'favorites'),{
        key: props.isbn[0]
    })
 }

    return(
        <div className="absolute top-5 right-5" onClick={handleFavoriteToggle}>
            {!fav && <FavoriteBorder />}
            {(fav) && <FavoriteIcon/>}
        </div>
    )
}
export default Favorite