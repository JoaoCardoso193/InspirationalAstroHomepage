import React from "react"

class Quote extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: true,
            text: '',
            author: ''
        }
    }

    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://zenquotes.io/api/today"; // site doesn’t send Access-Control, using workaround from link below
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(res => res.json())
        .then(json => {
            this.setState(
                {loading: false, text: json[0].q, author: json[0].a}
            )
        })
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }

    render(){
        if(this.state.loading){
            return(<p>Loading...</p>)
        }
        else{
            return(
                <div>
                    <h1>"{this.state.text}"</h1>
                    <p>- {this.state.author}</p>
                </div>
            )
        }
    }

}

export default Quote