import { Component } from "react";
import Nav from "./nav";
import Form from "./forms";
import "./App.css";
import Adddata from "./add-data";

// function App(){
//   return (
//     <div className="App">
//       <div>aduino
//       <Nav/>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
//           veritatis sed provident repudiandae, earum officiis voluptatem,
//           aspernatur pariatur tempore ducimus error alias beatae itaque rem sit
//           nisi magnam deserunt culpa.
//         </p>
//         <Form/>
//       </div>
//     </div>
//   );
// }

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
    console.log(data);
    let finaledata = [...this.state.data, data]
    data.id = Math.random()
    this.setState({
      data: finaledata
    })
  };
  render() {
    return (
      <div>
        <Nav ninja={this.state.data} />
        <Form Adddata={this.Adddata} />
        <Adddata />
      </div>
    );
  }
}
export default App;
