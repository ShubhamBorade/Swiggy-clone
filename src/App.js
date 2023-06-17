import Header from './Components/Header';
import './App.css';
import {Outlet} from "react-router-dom"

function App() {

  return (
    <div className="">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
