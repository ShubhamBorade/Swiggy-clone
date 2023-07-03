import Header from './Components/Header';
import './App.css';
import {Outlet} from "react-router-dom"
import {Provider} from "react-redux"
import store from './Utils/store';

function App() {

  return (
    <div className="">
      <Provider store = {store}>
        <Header/>
        <Outlet/>
      </Provider>
    </div>
  );
}

export default App;
