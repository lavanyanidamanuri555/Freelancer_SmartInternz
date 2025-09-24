// src/components/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">🔒 Please login to view the dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 p-6 flex flex-col items-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl text-center">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-3">
          Welcome, {user.name} 👋
        </h2>
        <p className="text-lg mb-1"><strong>Role:</strong> <span className="capitalize">{user.role}</span></p>
        <p className="text-gray-700 mb-6">
          <strong>Your ID:</strong> <code className="bg-gray-100 text-indigo-600 px-2 py-1 rounded">{user._id}</code>
        </p>

        {user.role === "client" && (
          <div className="space-y-3">
            <button
              onClick={() => navigate("/post-project")}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
            >
              ✍️ Post New Project
            </button>
            <button
              onClick={() => navigate("/view-projects")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
            >
              📂 View My Projects
            </button>
          </div>
        )}

        {user.role === "freelancer" && (
          <div className="space-y-3">
            <button
              onClick={() => navigate("/view-projects")}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
            >
              🔍 View Available Projects
            </button>
            <button
              onClick={() => navigate("/bid-project")}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded transition"
            >
              💼 Place a Bid
            </button>
            <button
              onClick={() => navigate("/submit-work")}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition"
            >
              ✅ Submit Work
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
