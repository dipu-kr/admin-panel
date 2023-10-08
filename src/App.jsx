import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="left_container">
        <Sidebar />
      </div>
      <div className="right_container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route
            exact
            path="/users"
            element={<h1 className="text-green-600">users page</h1>}
          />
          <Route
            exact
            path="/contact&information"
            element={<h1 className="text-green-600">contact information</h1>}
          />
          <Route
            exact
            path="/invoices&Balances"
            element={<h1 className="text-green-600">invoices balances</h1>}
          />
          <Route
            exact
            path="/profile&Form"
            element={<h1 className="text-green-600">profile form</h1>}
          />
          <Route
            exact
            path="/calender"
            element={<h1 className="text-green-600">calender page</h1>}
          />
          <Route
            exact
            path="/faq&page"
            element={<h1 className="text-green-600">FAQ page</h1>}
          />
          <Route
            exact
            path="/bar&Chart"
            element={<h1 className="text-green-600">Bar Charts page</h1>}
          />
          <Route
            exact
            path="/pie&Chart"
            element={<h1 className="text-green-600">Pie Chart</h1>}
          />
          <Route
            exact
            path="/line&Chart"
            element={<h1 className="text-green-600">Line Chart page </h1>}
          />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
