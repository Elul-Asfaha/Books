import Favorite from "./Favorite"

const Book=(props)=>{
    return(
        <div  className="relative shadow-md shadow-slate-700 w-10/12 md:flex md:flex-col md:w-4/12 lg:w-3/12">
            <div className="flex min-h-[300px] max-h-[300px]">
                <img className="w-full object-cover" src={"https://covers.openlibrary.org/b/isbn/"+props.isbn[0]+"-M.jpg"} alt="No_cover_found"/>
            </div>
            <div className=" flex flex-col items-start w-full p-5">
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


            <Favorite data={props.data} isbn={props.isbn} />

        </div>
    )
}

export default Book