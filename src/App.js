import { Component } from "react";
import Nav from "./nav";
import Form from "./forms";
import "./App.css";
import Adddata from "./add-data";
class App extends Component {
  state = {
    data: [
      { nom: "Eric", age: 22, gender: "male", id: 1 },
      { nom: "noel", age: 12, gender: "male", id: 2 },
      { nom: "lionel", age: 32, gender: "female", id: 3 },
      { nom: "clovis", age: 25, gender: "male", id: 4 },
    ],
  };
  Adddata = (data) => {
    let finaledata = [...this.state.data, data]
    data.id = Math.random()
    this.setState({
      data: finaledata
    })
  };
  DeleteData = (id) =>{
    // console.log(id);
    let newdata = this.state.data.filter((data) =>{
      return data.id !==id;
    })
    this.setState({
      data: newdata
    })
  };
  render() {
    return (
      <div>
        <Nav  DeleteData = {this.DeleteData} alldata= {this.state.data}  />
        <Form Adddata={this.Adddata} />
        <Adddata />
      </div>
    );
  }
}
export default App;
