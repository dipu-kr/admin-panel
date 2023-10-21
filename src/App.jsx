import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import ProfileForm from "./pages/ProfileForm";
import CalendarPage from "./pages/CalendarPage";
import Faq from "./pages/Faq";
import BarChart from "./pages/BarChart";
import PieChart from "./pages/PieChart";
import DoughnutChart from "./pages/DoughnutChart";
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
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/profile&Form" element={<ProfileForm />} />
          <Route exact path="/calender" element={<CalendarPage />} />
          <Route exact path="/faq&page" element={<Faq />} />
          <Route exact path="/bar&Chart" element={<BarChart />} />
          <Route exact path="/pie&Chart" element={<PieChart />} />
          <Route exact path="/doughnut&Chart" element={<DoughnutChart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
