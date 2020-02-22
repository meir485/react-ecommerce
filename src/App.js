import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Item from './components/Item'
import Cart from './components/Cart'
export default class App extends Component {

  state={
    itemList : [{name:"computer",price:800},{name:"book",price:15},{name:"pen",price:1}],
    cartList : [],
    buy : []
  }

  add = (n,p) =>{
    this.setState({cartList:[{name:n,price:p}, ...this.state.cartList]})
  } 

  delete = i => {
    let temPost = this.state.cartList.filter((el,index)=>( index!==i ))
    this.setState({cartList:[...temPost]})
 }

  total = () => {
    let m = 0
    for(let el of this.state.cartList){
      m=m+el.price
    }
    return m ;
  }

  buy =() => {
    this.setState({buy:[...this.state.cartList],cartList:[]})
  }
  
  showCart = (x,y) => {
    document.getElementById('home').style.display = "none"; 
    document.getElementById('cart').style.display = "block"; 
    x.style.display="none"
    y.style.display="block"
  }

  showHome = (x,y) => {
    document.getElementById('home').style.display = "block"; 
    document.getElementById('cart').style.display = "none";
    x.style.display="none"
    y.style.display="block"
  }

 

  render() {
    return (
      <div>
        <NavBar cart={this.showCart} home={this.showHome}/>

       
        <div id='home'>
           <h5>list of prouduct</h5>
          {this.state.itemList.map((element)=>{
          return <Item name={element.name} price={element.price}  add={this.add}/>
         })}
        </div>
        

        <div id='cart' style={{background: "red", display:'none'}}>
          <h3>cart</h3>
         
          {this.state.cartList.map((element,i)=>{
          return <Cart name={element.name} price={element.price} i={i} delete={this.delete}/>
          })}
          <h5>total {this.total()}</h5>
          <button onClick={this.buy}>buy</button>
        </div>
        

      </div>
    )
  }
}
