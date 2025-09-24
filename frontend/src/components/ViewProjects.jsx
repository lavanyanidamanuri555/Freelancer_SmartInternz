import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await axios.get('http://localhost:3000/projects');
        setProjects(res.data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">📂 Available Projects</h2>

        {projects.length === 0 ? (
          <p className="text-center text-gray-600">No projects found.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, index) => (
              <li
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 transition-transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-indigo-800 mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-1"><strong>💰 Budget:</strong> ₹{p.budget}</p>
                <p className="text-sm text-gray-500"><strong>🆔 Project ID:</strong> {p._id}</p>
                <p className="text-sm text-gray-500"><strong>👤 Client ID:</strong> {p.clientId}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ViewProjects;
