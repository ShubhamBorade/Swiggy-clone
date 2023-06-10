import Header from './Components/Header';
import './App.css';
import Body from './Components/Body';

function App() {
  return (
    <div className="App">
      {/* Header
          -Logo
          -Nav Items
         Body
          -Search
          -RestaurantContainer
         Footer
          -copyright
          -links 
  */}
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
