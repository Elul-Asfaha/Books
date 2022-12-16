const Book=(props)=>{
    return(
        <div  className="h-[300px] border border-white border-2">
                {props.data.title}
        </div>
    )
}

export default Book