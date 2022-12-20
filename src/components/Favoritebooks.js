import { useEffect, useState } from "react";

const Favoritebooks=(props)=>{
    const [retrieved,setRetrieved]=useState("")
    const searchQuery=props.id
    useEffect((
        )=>{
      
          fetch('https://openlibrary.org'+searchQuery+'.json')
          .then(response => response.json())
          .then(response => setRetrieved(response))
          .catch(err => console.error("err"));
        }
      
        ,[searchQuery])
        console.log(searchQuery)
        console.log(retrieved)
      
    return(
        <div  className="w-auto border border-white border-2 p-3 flex flex-col md:flex-row justify-center items-center w-8/12 md:w-4/12 lg:w-3/12 min-h-[300px]">
            <div className="flex-1 flex flex-col mt-3  items-start w-full pl-4">
                <p>
                    Title:{" "+retrieved.title}
                </p>
                <p>
                </p>
                <p>
                    Published:{" "+retrieved.last_modified.value}
                </p>
              

            </div>
        </div>
    )
}
export default Favoritebooks