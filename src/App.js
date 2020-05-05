import React, { Component } from 'react';
// import { Button } from 'react-mdl';
//import Landingpage from './landingpage.js';
import {Link } from 'react-router-dom'
 import Liststories from './Liststories'
//import Landingpage from './landingpage';
import './App.css';

class App extends Component {


constructor(){
    super();
    
    this.state={
        items: [],
        currentitem: {
        addstory: " ", 
        key: '' 
        }
    }
    this.handlechange = this.handlechange.bind(this);
    this.additem = this.additem.bind(this);
}


handlechange(props){
    this.setState({
        currentitem: {
        [props.target.name] : props.target.value,
         key: Date.now()
        }
    })
}
additem(props) {
    props.preventDefault();
    const newItem = this.state.currentitem;
    console.log(newItem);
    if(newItem.addstory!==' '){
        const newitem = [...this.state.items, newItem];
        this.setState({
            items: newitem,
            currentitem: {
                addstory: ' ',
                key: ' '
            }
        })
    }
}
    render(){
    
        return(
            <div>
                <header><h1>ToDo List</h1>
                <form id="add-story" onSubmit={this.additem}>
                  <p><center>
                <input type="text"  name="addstory" placeholder="addstory"  value={this.state.currentitem.addstory} onChange={this.handlechange} />
            <button type="submit" >Add</button>
                               </center>                     </p><h1>{this.state.currentitem.addstory}</h1>

      
        </form>
        </header>
        <center>
          <div className="title">
          <Liststories items = {this.state.items} /> </div>
        </center></div>
         
        )
    }
  
}

export default App;



