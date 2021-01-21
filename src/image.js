function image(props){
    return(
        <img className='image' src={props.imgUrl} alt="Astro image of the day, title and description below"/>
    )
}

export default image