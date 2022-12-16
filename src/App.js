import { useState,createContext, useEffect} from 'react';
import Menu from './components/Menu';
import DisplayResults from './pages/DisplayResults';
import Home from './pages/Home'
//import Login from './pages/Login';
//import SignUp from './pages/Signup';


export const  provideData=createContext()




function App() {
  
  const [MenuToggle,setMenuToggle]=useState(false)
  const [searchQuery,setSearchQuery]=useState(
    {
      catagory: "",
      query: "", 
  })

  const [searchThis,setSearchThis]=useState("")
const [searchResult,setSearchResult]=useState([])

const [counter,setCounter]=useState(0)
// this searchs open library
  

useEffect((
)=>{

  fetch('https://openlibrary.org/search.json?q='+searchThis)
  .then(response => response.json())
  .then(response => setSearchResult(response.docs))
  .catch(err => console.error("err"));
}

,[searchThis,counter])

  //  this handles the search input 
  const handleSearchQuery=(e)=>{
    const {name,value}=e.target
    setSearchQuery({
      ...searchQuery,
      [name]: value
    })

  }



  //this handles the menu toggle
  const handleMenuToggle=()=>{
    setMenuToggle(!MenuToggle)
  }

  // searchs when the form is submitted
  const handleSearch=(e)=>{
    setCounter(counter=>counter+1)
    setSearchThis(searchQuery.query)
    e.preventDefault()
  }



  return (
    <provideData.Provider value={{handleMenuToggle,handleSearchQuery,handleSearch,searchResult}}>
      <div className='relative min-h-screen flex flex-col dark:bg-slate-800 dark:text-white'>
    
          {(searchResult.length===0) && <Home  menuHandle={()=>handleMenuToggle()}/>}
          {(searchResult.length!==0) && <DisplayResults/>}
          
          {MenuToggle &&<Menu  menuHandle={()=>handleMenuToggle()}/>}

      </div>
    </provideData.Provider>
  );
}

export default App;
