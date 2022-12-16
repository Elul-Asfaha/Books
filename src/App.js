import { useState,createContext,useEffect } from 'react';
import Menu from './components/Menu';
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

  const [Counter,setCounter]=useState(0)
  useEffect(()=>{

   
    fetch('http://openlibrary.org/search/authors.json?q=dune')
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));


  },[Counter])
  
  

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
    setCounter(item=>item+1)
  }



  return (
    <provideData.Provider value={{handleMenuToggle,handleSearchQuery,handleSearch}}>
      <div class='relative'>
        <Home  menuHandle={()=>handleMenuToggle()}/>
        {MenuToggle &&<Menu  menuHandle={()=>handleMenuToggle()}/>}
      </div>
    </provideData.Provider>
  );
}

export default App;
