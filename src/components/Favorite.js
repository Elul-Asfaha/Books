import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase';



const Favorite=(props)=>{
    const [fav,setFav]=useState(true)

    const handleFavoriteToggle=()=>{
    (fav) && addFav() 
        setFav(!fav)
 }

 const addFav=async()=>{
    await addDoc(collection(db,'favorites'),{
        key: props.data.key
    })
 }


    return(
        <div className="absolute top-5 right-5" onClick={handleFavoriteToggle}>
            {fav && <FavoriteBorder />}
            {(!fav) && <FavoriteIcon/>}
        </div>
    )
}
export default Favorite