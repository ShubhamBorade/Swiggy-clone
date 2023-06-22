import React from "react";
const Contact = () =>{
    return (
        <div>
         <h1 className="mt-20">This is a contact us page</h1>
         <img src="https://dmcrf.com/wp-content/uploads/2020/02/page-under-construction-1.jpg"/>
        </div>
    )
}



// class Contact extends React.Component{

//     constructor(props){
//     super(props);

//         this.state={
//             count : 0,
//         }
//     }

//     render(){

//         return(
//         <div> 
//             <h1 className="mt-20">This is a class component</h1>
//             <h2>{this.props.name}</h2>
//             <h3>count: {this.state.count}</h3>
//             <button onClick={()=>{
//                 this.setState({
//                     count:this.state.count + 1,
//                 })
//             }}>Click</button>
//          </div> 
//         )
//     }
// }

export default Contact;