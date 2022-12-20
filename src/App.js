import { useState,createContext, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';

//components
import Menu from './components/Menu';

// firebase imports
import { collection, onSnapshot, query } from 'firebase/firestore'
import {db} from './firebase.js'
import Authentication from './pages/Authentication';

// contexts 
export const  provideData=createContext()

function App() {
  // const [verifiedUser,setVerifiedUser]=useState(false)
  const [user,setUser]=useState("")
  const [MenuToggle,setMenuToggle]=useState(false)
  const [searchQuery,setSearchQuery]=useState(
    {
      catagory: "",
      query: "", 
  })

  const [searchThis,setSearchThis]=useState("")
  const [searchResult,setSearchResult]=useState([])

  const [counter,setCounter]=useState(0)
  const [favorites,setFavorites]=useState([])
  
  const handleLogin=(e)=>{
    e.preventDefault()
    setUser("username")
  }

// this searchs open library
  useEffect((
  )=>{

    fetch('https://openlibrary.org/search.json?q='+searchThis)
    .then(response => response.json())
    .then(response => setSearchResult(response.docs))
    .catch(err => console.error("err"));
  }

  ,[searchThis,counter])

  
  // this adds favorites


  //this retrieves favorites
  useEffect(()=>{
    const q=query(collection(db,"favorites"))
    const unsubscribe=onSnapshot(q,(querySnapshot)=>{
        let favoritesArr=[]
        querySnapshot.forEach((doc)=>{
            favoritesArr.push({
                ...doc.data(),id:doc.id
            })
        })
        setFavorites(favoritesArr)
    }); 
    return ()=>unsubscribe()
  },[])

//



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

  // performs search when the form is submitted
  const handleSearch=(e)=>{
    setCounter(counter=>counter+1)
    setSearchThis(searchQuery.query)
    e.preventDefault()
  }

  const handleLogOut=()=>{
    setUser("")
    MenuToggle && setMenuToggle(!MenuToggle)
  }
  const handleSearchReset=()=>{
    setSearchResult([])
  }

  return (
    <div>

    <provideData.Provider value={{handleMenuToggle,handleSearchQuery,handleSearch,handleLogin,handleLogOut,favorites,handleSearchReset,searchResult,user}}>

        <BrowserRouter>
          {(!user) && <Authentication/>}  

          {(user) &&   
            <div className='relative min-h-screen flex flex-col dark:bg-slate-800 dark:text-white'>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/favorites" element={<Favorites/>}/>
              </Routes>
            {MenuToggle &&<Menu />}
            </div>
          }
        </BrowserRouter>
    </provideData.Provider>
    </div>
  );
}

export default App;
