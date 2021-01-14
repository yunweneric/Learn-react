import { Component } from "react";
import "./App.css";

class Nav extends Component{
  render(){
    const {name, age, gender} = this.props
    return(
      <div>
        <h1>Nav Bar</h1>
        <p>{name}</p>
        <p>{age}</p>
        <p>{gender}</p>
      </div>
    )
  }
}
export default Nav;
