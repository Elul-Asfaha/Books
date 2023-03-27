const Readbook =()=>{
    const red=()=>{
  
        fetch('http://openlibrary.org/api/volumes/brief/isbn/0596156715.json')
        .then(
            response =>response.json()
        )
        .then(
            response=>console.log(response)
        )
        .catch(err => console.error("err"));    
   
    }
    red()
    return(
        <div>
            <div>
            <a href="http://openlibrary.org/dev/docs/api/read">Read API</a>.  
            </div>
        </div>
    )
}
export default Readbook