import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import ITJobs from "./pages/ITJobs";
import NonITJobs from "./pages/NonITJobs";
import MNCJobs from "./pages/MNCJobs";
import WorkFromHome from "./pages/WorkFromHome";
import AITools from "./pages/AITools";
import Profile from "./pages/Profile";
import GovernmentJobs from "./pages/GovernmentJobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MockTests from "./pages/Mocktests";
import Jobs from "./pages/Job";
import CategoryButton from "./pages/CategoryButton";




function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/it-jobs" element={<ITJobs />} />
        <Route path="/non-it-jobs" element={<NonITJobs />} />
        <Route path="/mnc-jobs" element={<MNCJobs />} />
        <Route path="/work-from-home" element={<WorkFromHome />} />
        <Route path="/ai-tools" element={<AITools />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/government-jobs" element={<GovernmentJobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mock-tests" element={<MockTests />} />
        <Route path="/categoryButton" element={<CategoryButton/>} />
       
            <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
}

export default App;
