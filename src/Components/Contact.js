import React from "react";
// import ProfileClass from "./ProfileClass";
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
//             userinfo:{
//             name:"dummy",
//             location:"india"
//         }
            
//         }
//         console.log(" constructor")
//     }
//    async componentDidMount(){
//         console.log(" componentDidMount")
//        const data = await fetch("https://api.github.com/users/shubhamborade")
//        const json = await data.json();
//        console.log(json);

//        this.setState({
//          userinfo:json,
//        })
//     }
     
//     componentDidUpdate(){
//         console.log("componentdid update")
//     }
//     componentWillUnmount(){
//         console.log("componentwill unmount")
//     }
//     render(){

//         console.log(" render")

//         return(
//         <div> 
//             <h1 className="mt-20">This is a class component</h1>
//             <h2>Name:{this.state.userinfo.name}</h2>
//             <h3>Location: {this.state.userinfo.location}</h3>
//             <img src={this.state.userinfo.avatar_url} alt="" />

//            {/* <ProfileClass name="First"/> */}
//          </div> 
//         )
//     }
// }

export default Contact;