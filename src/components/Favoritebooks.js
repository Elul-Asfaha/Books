import { useEffect, useState } from "react";

import {  deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';


const Favoritebooks=(props)=>{
    const [retrieved,setRetrieved]=useState("")
    const searchQuery=props.works
   
   
   //search the openlibrary works api
    useEffect((
        )=>{
      
          fetch('https://openlibrary.org'+searchQuery+'.json')
          .then(response => response.json())
          .then(response => setRetrieved(response))
          .catch(err => console.error("err"));
        }
      
        ,[searchQuery])
      

        const handleRemoveFav=async()=>{
            await deleteDoc(doc(db,'favorites',props.id));

         }

        //  http://openlibrary.org/api/volumes/brief/<id-type>/<id-value>.json

    return(
        <div  className="shadow-md shadow-slate-700 w-10/12 md:flex md:flex-col md:w-4/12 lg:w-3/12">
            <div className="flex-1 border border-1">
                cover goes here
            </div>
            <div className="flex-1 flex  flex-col mt-3  items-start w-full pl-4">
                <p>
                    Title:{" "+retrieved.title}
                </p>
           

            </div>
            <button className="h-full border border-1 px-3 py-2 rounded self-center" onClick={handleRemoveFav}>Remove</button>

        </div>
    )
}
export default Favoritebooks