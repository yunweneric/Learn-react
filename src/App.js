import { Component } from "react";
import "./App.css";
import Nav from "./nav";


// class App extends Component{
//   state = {
//     data : [
//       {nom: "Eric", age: 22, gender: "male"},
//       {nom: "noel", age: 12, gender: "male"},
//       {nom: "lionel", age: 32, gender: "female"},
//       {nom: "clovis", age: 25, gender: "male"},
//     ]
//   }
//   render(){
//     return (
//       <div className="App">
//         <div>
//         <Nav content = {this.state.content}/>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
//             veritatis sed provident repudiandae, earum officiis voluptatem,
//             aspernatur pariatur tempore ducimus error alias beatae itaque rem sit
//             nisi magnam deserunt culpa.
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

function App() {
  const state = {
    data : [
      {nom: "Eric", age: 22, gender: "male"},
      {nom: "noel", age: 12, gender: "male"},
      {nom: "lionel", age: 32, gender: "female"},
      {nom: "clovis", age: 25, gender: "male"},
    ]
  }
  
  return (
    <div className="App">
      <div>
      <Nav content = {this.state.content}/>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
          veritatis sed provident repudiandae, earum officiis voluptatem,
          aspernatur pariatur tempore ducimus error alias beatae itaque rem sit
          nisi magnam deserunt culpa.
        </p>
      </div>
    </div>
  );
}

// export default App;
export default App;
