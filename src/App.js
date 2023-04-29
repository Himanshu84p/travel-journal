import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card"
import data from "./Data"

function App() {

  const cards = data.map((item) => {
    return (
           <Card 
              key = {item.id}
              item = {item} //passing whole item object as prop
              
            />
    )
  })
  return (
    <div className="main">
      <div className="App">
        <Navbar />
        {cards}
      </div>
    </div>
  );
}

export default App;
