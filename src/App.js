import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ITJobs from "./pages/ITJobs";
import NonITJobs from "./pages/NonITJobs";
import MNCJobs from "./pages/MNCJobs";
import SelfEmployed from "./pages/SelfEmployed";
import AITools from "./pages/AITools";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/it-jobs" element={<ITJobs />} />
        <Route path="/non-it-jobs" element={<NonITJobs />} />
        <Route path="/mnc-jobs" element={<MNCJobs />} />
        <Route path="/self-employed" element={<SelfEmployed />} />
        <Route path="/ai-tools" element={<AITools />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
