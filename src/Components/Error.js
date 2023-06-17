import {useRouteError} from "react-router-dom";

const Error = () =>{

    const err =  useRouteError();
    console.log(err);
    return(
        <div className="m-5 flex-col justify-between font-bold">
            <h1>Opps!!</h1>
            <h2>Something went wrong!!</h2>
            <h2>{err.data}</h2>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}
export default Error;