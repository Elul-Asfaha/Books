import { useState,createContext} from 'react';
import Menu from './components/Menu';
// import DisplayResults from './pages/DisplayResults';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
// import DisplayResults from './pages/DisplayResults';

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
const [searchResult,setSearchResult]=useState([])

// this searchs open library
  const searchOpenLibrary=()=>{
    fetch('http://openlibrary.org/search.json?q='+searchQuery.query)
      .then(response => response.json())
      .then(response => setSearchResult(response))
      .catch(err => console.error(err));


  }
  

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
    e.preventDefault()
    searchOpenLibrary()
  }



  return (
    <provideData.Provider value={{handleMenuToggle,handleSearchQuery,handleSearch,searchResult}}>
      <div class='relative min-h-screen dark:bg-slate-800 dark:text-white'>
      
       <Nav />

          {(searchResult.length===0) && <Home  menuHandle={()=>handleMenuToggle()}/>}
          {/* {(searchResult.length!==0) && <DisplayResults/>} */}
          {MenuToggle &&<Menu  menuHandle={()=>handleMenuToggle()}/>}


        <Footer/>

      </div>
    </provideData.Provider>
  );
}

export default App;
