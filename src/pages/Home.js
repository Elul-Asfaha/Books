// import Loading from '../components/Loading'
import SearchIcon from '@mui/icons-material/Search';
import { provideData } from '../App';
import { useContext } from 'react';
const Home=()=>{
    const provided=useContext(provideData)
    return(
                <main class="h-screen flex flex-col items-center justify-center">
                    <h1 class="text-4xl">
                        Open Library
                    </h1>
                    <p class="text-2xl text-center">
                        Welcome to Open Library
                    </p>
                    <span class="p-0 text-l text-teal-600"> Find the books you want with just a click of a button</span> 

                    <form onSubmit={provided.handleSearch} class='flex gap-2 justify-center items-center flex-wrap' >
                        <select name="catagory" class="dark:text-black outline-none border-2 border-black"  onChange={provided.handleSearchQuery} defaultValue={"1"}>
                            <option value="1">
                                All
                            </option>
                            <option value="Title">
                                Title
                            </option>
                            <option value="Author"> 
                                Author
                            </option>
                            <option value="Subject">
                                Subject
                            </option>
                        </select>
                        <div class="my-2 flex justify-center  items-center bg-white border border-black">
                            <input type='text' name="query" class='indent-2 outline-none text-black w-full' onChange={provided.handleSearchQuery}/>
                            <button onClick={provided.handleSearch} class="bg-teal-900">
                               <SearchIcon className="h-100 m-1 text-slate-900 cursor-pointer bg-teal-900"/>
                            </button>
                        </div>
                      
                    </form>
                </main>
        )
}
export default Home