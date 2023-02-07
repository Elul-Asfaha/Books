import { useEffect, useState } from "react";
import {  deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';


const Favoritebooks=(props)=>{
    const [retrieved,setRetrieved]=useState({
      
        created:{
            value: ""
        }
    })
    const searchQuery=props.isbn
   console.log(searchQuery)
   
   //search the openlibrary works api
    useEffect((
        )=>{
      
          fetch('https://openlibrary.org/isbn/'+searchQuery+'.json')
          .then(response => response.json())
          .then(response => setRetrieved(response))
          .catch(err => console.error("err"));


        }
      
        
        ,[searchQuery])
      

        const handleRemoveFav=async()=>{
            await deleteDoc(doc(db,'favorites',props.id));
         }
        
    return(
        <div className="shadow-md shadow-slate-700 w-8/12  md:w-4/12 lg:w-3/12 xl:w-2/12 md:items-center">
      
            <div className="flex-1 min-h-[220px]">
                <img src={"https://covers.openlibrary.org/b/isbn/"+searchQuery+"-M.jpg"}  alt="No_cover_found" className="w-full"/>    
            </div>
            <div className="flex-1 flex items-left flex-col mt-3 w-full  px-4">
                <p className="">
                    <span className="text-purple-600 font-bold ">TITLE:</span> {(retrieved.full_title)?retrieved.full_title:retrieved.title}
                </p>
                <p>
                   <span className="text-purple-600 font-bold "> PUBLISHED:</span> {" "+ retrieved.created.value}
                </p>
                
                <button className="border border-1 px-3 py-2 my-3 rounded self-center" onClick={handleRemoveFav}>Remove</button>
            </div>

    </div>

    )
}
export default Favoritebooks