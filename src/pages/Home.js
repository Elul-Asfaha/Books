// this is the home page. it checks the state of the search result. and if there are no search results it displays the Main component and if there are any results it displays the displpay result component 
import React, { useContext } from "react"
import Main from "../components/Main"
import DisplayResults from "../components/DisplayResults"
import { provideData } from "../App"
const Home=()=>{
    const provided=useContext(provideData)
    return(     
        <React.Fragment>
        {(provided.searchResult.length===0) && <Main/>}
        
        {(provided.searchResult.length!==0) && <DisplayResults/>}
        </React.Fragment>
        )
}
export default Home