import { Component } from "react";

class Form extends Component {
  state = {
    nom: null,
    age: null,
    gender: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.Adddata(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nom">Name</label>
          <input type="text" id="nom" onChange={this.handleChange} />

          <label htmlFor="age">Age</label>
          <input type="text" id="age" onChange={this.handleChange} />

          <label htmlFor="Gender">Gender</label>
          <input type="text" id="gender" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>


     

        
      </div>
    );
  }
}
export default Form;
