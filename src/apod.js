import React from "react"
import Image from "./image"
import Caption from "./caption"

class APOD extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: true,
            title: '',
            imgUrl: '',
            description: ''
        }
    }

    componentDidMount(){
        fetch('https://api.nasa.gov/planetary/apod?api_key=oRVHe50EmNIuZDAhKu5OdEpyciJgrIxL76GDp8gu')
        .then(res => res.json())
        .then(json => {
            this.setState(
                {loading: false, title: json.title, imgUrl: json.url, description: json.explanation}
            )
        })

    }

    render(){
        if(this.state.loading){
            return(
                <div className="loader"></div>
            )
        }
        else{
            return(
                <div>
                    <Image imgUrl={this.state.imgUrl}/>
                    <br/>
                    <Caption description={this.state.description} title={this.state.title}/>
                    <br/>
                </div>
            )
        }
    }
}

export default APOD