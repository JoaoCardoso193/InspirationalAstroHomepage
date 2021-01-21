function caption(props){
    return(
        <div>
            <h3 className="caption-title">{props.title}</h3>
            <br/>
            <p className="description-bold">Description:</p>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default caption