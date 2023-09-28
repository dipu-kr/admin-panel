import "./App.css";
import Leftbar from "./components/Leftbar";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="left_container">
        <Leftbar />
      </div>
      <div className="right_container">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
