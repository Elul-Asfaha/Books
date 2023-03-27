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
    try{
    await addDoc(collection(db,'favorites'),{
        key: props.isbn[0]
    })
}catch(error){
    console.error(error)
}

 }

    return(
        <div className="absolute top-5 right-5" onClick={handleFavoriteToggle}>
            {!fav && <FavoriteBorder style={{fill: "teal"}} />}
            {(fav) && <FavoriteIcon  style={{fill: "teal"}} />}
        </div>
    )
}
export default Favorite