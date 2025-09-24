import React, { useState } from 'react';
import axios from 'axios';

const PostProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [clientId, setClientId] = useState('');

  const handlePostProject = async (e) => {
    e.preventDefault();
    const data = { title, description, budget, clientId };

    try {
      const res = await axios.post('http://localhost:3000/projects', data);
      alert("✅ " + res.data.message);
    } catch (err) {
      console.error("❌ Error:", err);
      alert("❌ Failed to post project");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
      <form
        onSubmit={handlePostProject}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
          📋 Post a New Project
        </h2>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="number"
          placeholder="Budget (₹)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="text"
          placeholder="Client ID"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          required
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          🚀 Submit Project
        </button>
      </form>
    </div>
  );
};

export default PostProject;
