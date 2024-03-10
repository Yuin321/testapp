import React, {Component} from "react";

class Ask extends Component{

    constructor()
    {
        super()
        this.state = {
            message: 'Have you had lunch?'
        }
    }

    changeMessageYes()
    {
        this.setState({
            message: 'Thats great!'
        })
    }

    changeMessageNo()
    {
        this.setState({
            message: 'Awwwwwww'
        })
    }


    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=> this.changeMessageYes()}>Yes!</button>
                <button onClick={()=> this.changeMessageNo()}>No!</button>
            </div>
        )
    }
}

export default Ask