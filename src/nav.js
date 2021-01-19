import { Component } from "react";
import "./App.css";

const Nav = ({ninja}) => {
  
    // const {ninja} = props
    const ninjalist = ninja.map((ninja)=>{
    //   if (ninja.age >20){
    //     return(
    //       <div className="ninja">
    //         <p>Name: {ninja.nom}</p>
    //       </div>
    //     )
    //   }
    //   else
    //   return null
      
    // })
    return (ninja.age >20) ? (
      <div className="ninja" key={ninja.id}>
        <p>Name: {ninja.nom}</p>
        <p>Name: {ninja.age}</p>
        <p>Name: {ninja.gender}</p>
        
      </div>
      ) : null;
    });


    return(
      <div>
        <h1>{ninjalist}</h1>
      </div>
    )
  
}
export default Nav;
