// // import { Component } from "react";
// import "./App.css";

// const Nav = ({ninja}) => {
  
//     // const {ninja} = props
//     const ninjalist = ninja.map((ninja)=>{
//     //   if (ninja.age >20){
//     //     return(
//     //       <div className="ninja">
//     //         <p>Name: {ninja.nom}</p>
//     //       </div>
//     //     )
//     //   }
//     //   else
//     //   return null
      
//     // })
//     return (ninja.age >20) ? (
//       <div className="ninja" key={ninja.id}>
//         <p>Name: {ninja.nom}</p>
//         <p>Name: {ninja.age}</p>
//         <p>Name: {ninja.gender}</p>
        
//       </div>
//       ) : null;
//     });


//     return(
//       <div>
//         <h1>{ninjalist}</h1>
//       </div>
//     )
  
// }
// export default Nav;




import "./App.css";
const Nav = ({alldata, DeleteData}) => {
    // const {ninja} = props
    const ninjalist = alldata.map((data)=>{
    return (data.age >0) ? (
      <div className="ninja" key={data.id}>
        <p>Name: {data.nom}</p>
        <p>Name: {data.age}</p>
        <p>Name: {data.gender}</p>
        <p>Name: {data.id}</p>
        <button onClick = {() => {DeleteData(data.id)}}>Delete data</button>
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
