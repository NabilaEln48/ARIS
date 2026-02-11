import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Public Landing Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrainLine from './components/TrainLine';
import About from './components/About';
import Why from './components/Why';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import TakeControl from './components/TakeControl';
import Footer from './components/Footer';

// Auth & Dashboard Components
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import MainDashboard from './pages/Dashboard/MainDashboard';
import JobTracker from './pages/Dashboard/JobTracker';
import AIReview from './pages/Dashboard/AIReview';
import Emails from './pages/Dashboard/Emails';
import Interview from './pages/Dashboard/Interview';
import Profile from './pages/Dashboard/Profile';
import Billing from './pages/Dashboard/Billing'; // New Component
import CommandCenter from './pages/Dashboard/CommandCenter';

const LandingPage = () => (
  <div className="bg-[#0b0b0f]">
    <Navbar />
    <Hero />
    <TrainLine />
    <About />
    <Why />
    <Pricing />
    <Reviews />
    <TakeControl />
    <Footer />
  </div>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);

  return (
    <Router>
      <div className="min-h-screen bg-[#0b0b0f] text-white font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn onLogin={login} />} />
          <Route path="/signup" element={<SignUp onLogin={login} />} />

          // src/App.jsx
<Route 
  path="/dashboard" 
  element={isAuthenticated ? <MainDashboard /> : <Navigate to="/login" replace />} 
>
  {/* This 'index' route tells React to show CommandCenter when the path is exactly /dashboard */}
  <Route index element={<CommandCenter />} /> 
  
  <Route path="tracker" element={<JobTracker />} />
  <Route path="ai-review" element={<AIReview />} />
  <Route path="emails" element={<Emails />} />
  <Route path="interview" element={<Interview />} />
  <Route path="profile" element={<Profile />} />
  <Route path="billing" element={<Billing />} />
</Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}