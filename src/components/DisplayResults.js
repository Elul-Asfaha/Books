import { useContext } from "react"
import { provideData } from "../App"
import Book from "./Book"
import Footer from "./Footer"
import Nav from "./Nav"
import SearchIcon from '@mui/icons-material/Search';



const DisplayResults=()=>{
    const provided=useContext(provideData)
    const useProdived=provided.searchResult
    const dispResult=useProdived.map(items=>(items.isbn) &&<Book key={items.key} data={items} isbn={items.isbn}  />)
    return(
        <div className="min-h-screen flex flex-col min-h-screen text-base text-white bg-slate-800">
            <Nav/>

            <div className="flex flex-col flex-grow items-center w-full">
                    <form onSubmit={provided.handleSearch} className="my-5 flex justify-center  items-center bg-white border border-black w-8/12 md:w-3/12 xl:w-2/12">
                        <input type='text' name="query" className='indent-2 mx-1 outline-none text-black w-full' onChange={provided.handleSearchQuery}/>
                        <button onClick={provided.handleSearch} className="bg-teal-900">
                            <SearchIcon className="h-100 m-1 text-white-900 cursor-pointer bg-teal-900"/>
                        </button>
                    </form>

                    <div className="flex flex-wrap w-full items-center justify-center md:justify-center gap-5">
                        {dispResult}
                    </div>
            </div>

            <Footer/>
        </div>
    )
}
export default DisplayResults