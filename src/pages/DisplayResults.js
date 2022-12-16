import { useContext } from "react"
import { provideData } from "../App"
import Book from "../components/Book"
const DisplayResults=()=>{
    const provided=useContext(provideData)
    
    const dispResult=provided.searchResult.map(items=><Book key={items.name} data={items} />)
    console.log(provided.searchResult)


    return(
        <div>
                {dispResult}
                {dispResult}
        </div>
    )
}
export default DisplayResults