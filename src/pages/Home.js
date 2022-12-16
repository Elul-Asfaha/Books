import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SearchIcon from '@mui/icons-material/Search';
import { provideData } from '../App';
import { useContext } from 'react';
const Home=()=>{
    const provided=useContext(provideData)
    return(     
            <div className="min-h-screen flex flex-col h-screen text-base text-white bg-slate-800">
                <Nav />
                <main className="p-4 flex-grow flex flex-col items-center justify-center gap-5">
                    <h1 className="text-4xl">
                        Open Library
                    </h1>
                    <p className="text-2xl text-center">
                        Welcome to Open Library
                    </p>
                    <span className="p-0 text-l text-teal-600"> Find the books you want with just a click of a button</span> 

                    <form onSubmit={provided.handleSearch} className='flex gap-2 justify-center items-center flex-wrap' >
                        <select name="catagory" className="text-black outline-none border-1 border-black"  onChange={provided.handleSearchQuery} defaultValue={"1"}>
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
                        <div className="my-2 flex justify-center  items-center bg-white border border-black">
                            <input type='text' name="query" className='indent-2 outline-none text-black w-full' onChange={provided.handleSearchQuery}/>
                            <button onClick={provided.handleSearch} className="bg-teal-900">
                               <SearchIcon className="h-100 m-1 text-white-900 cursor-pointer bg-teal-900"/>
                            </button>
                        </div>
                      
                    </form>
                </main>
                <Footer/>
            </div>
        )
}
export default Home