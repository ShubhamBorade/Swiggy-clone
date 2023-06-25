import react from "react"

class ProfileClass extends react.Component{
    constructor(props){
        super(props)
       console.log(this.props.name + "Child constructor")
    }

    componentDidMount(){
        console.log(this.props.name + "Child componentDidMount")
    }

    render(){
        console.log(this.props.name + "Child render")
        return(
            <h1>HII</h1>
        )
    }
}

export default ProfileClass;