import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    delete = () =>{
        this.props.delete(this.props.i)
    }

    render() {
        return (
            <div>
               <h3>{this.props.name} price: {this.props.price} $ <button onClick={this.delete}>-</button> </h3> 
            </div>
        )
    }
}
