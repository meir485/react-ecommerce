import React, { Component } from 'react'

export default class item extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    add = () => {
        this.props.add(this.props.name,this.props.price)
    }
    render() {
        return (
            <div>
               <h2>{this.props.name} price: {this.props.price} $ <button onClick={this.add}>+</button> </h2>
              
               
            </div>
        )
    }
}
