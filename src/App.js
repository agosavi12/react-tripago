import { useState } from "react";
import "./App.css";
import TripList from "./components/TripList";

function App() {
  const [showTripList, setShowTripList] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShowTripList(false)}>Hide List</button>
      {showTripList && <TripList />}
    </div>
  );
}

export default App;
