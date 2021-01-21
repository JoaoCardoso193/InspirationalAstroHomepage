function image(props){
    return(
        <img className='image' src={props.imgUrl} alt="Astro image of the day, go down for its title and description"/>
    )
}

export default image