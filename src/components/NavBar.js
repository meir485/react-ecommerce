import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"
export default class navBar extends Component {

cart = () =>{
    let x = document.getElementById('cartB');
    let y = document.getElementById('homeB');
    this.props.cart(x,y);
}
home = () =>{
    let x = document.getElementById('homeB');
    let y = document.getElementById('cartB');
    this.props.home(x,y);
}
    render() {
        return (
            <nav class="navbar navbar-light bg-light justify-content-between">
                <h2 className="navbar-brand">sv store</h2>

                  <ul className="navbar-nav">

                   
                    <li className="nav-item" id = 'cartB'>
                         <button  onClick={this.cart}>cart</button>
                    </li>
                    <li className="nav-item" id = 'homeB' style={{display: 'none'}}>
                        <button  onClick={this.home}>home</button>
                    </li>
                    </ul>
  
            </nav>
           
                
                // <nav className="navbar navbar-expand-lg navbar-light bg-light">
                //  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                //  <span class="navbar-toggler-icon"></span>
                //  </button>
                // <div style={{background: "green"}} className="collapse navbar-collapse" id="navbarNav">
                //
                // </div>
                // </nav>
                
            
        )
    }
}
