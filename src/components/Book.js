const Book=(props)=>{

    return(
        <div  className=" w-auto border border-white border-2 p-3 flex flex-col md:flex-row justify-center items-center w-8/12 md:w-4/12 lg:w-3/12 min-h-[300px]">
            <div className="flex-1">
       
                <img src={"https://covers.openlibrary.org/b/isbn/"+props.isbn[0]+"-L.jpg"} alt="No_cover_found"/>
       
            </div>
            <div className="flex-1 flex flex-col mt-3  items-start w-full pl-4">
                <p>
                    Title:{" "+props.data.title}
                </p>
                <p>
                    Author: {" "+props.data.author_name}
                </p>
                <p>
                    Published:{" "+props.data.first_publish_year}
                </p>

            </div>
        </div>
    )
}

export default Book