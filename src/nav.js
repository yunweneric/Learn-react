import { Component } from "react";
import "./App.css";

class Nav extends Component{
  render(){
    const {content} = this.props;
    const datalist = content.map(data =>{
      return(
        <div className="data">
          <p>{data.name}</p>
        </div>
      )
    })
    return(
      <div>
        <h1>Nav Bar</h1>
        
      </div>
    )
  }
}
export default Nav;
