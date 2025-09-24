import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PostProject from './components/PostProject';
import BidProject from './components/BidProject';
import AssignFreelancer from './components/AssignFreelancer';
import ViewProjects from './components/ViewProjects';
import SubmitWork from './components/SubmitWork';
import ViewBids from './components/ViewBids';
import ViewSubmissions from './components/ViewSubmissions';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post-project" element={<PostProject />} />
        <Route path="/bid-project" element={<BidProject />} />
        <Route path="/assign-freelancer" element={<AssignFreelancer />} />
        <Route path="/view-projects" element={<ViewProjects />} />
        <Route path="/submit-work" element={<SubmitWork />} />
        <Route path="/view-bids" element={<ViewBids />} />
        <Route path="/view-submissions" element={<ViewSubmissions />} />
      </Routes>
    </>
  );
}

export default App;
