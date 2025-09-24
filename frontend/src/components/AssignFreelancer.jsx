import React, { useState } from 'react';
import axios from 'axios';

const AssignFreelancer = () => {
  const [projectId, setProjectId] = useState('');
  const [freelancerId, setFreelancerId] = useState('');
  const [result, setResult] = useState('');

  const handleAssign = async (e) => {
    e.preventDefault();

    const data = {
      projectId,
      selectedFreelancerId: freelancerId,
    };

    try {
      const res = await axios.post('http://localhost:3000/select-freelancer', data);
      setResult("✅ " + res.data.message);
    } catch (err) {
      console.error(err);
      setResult("❌ Failed to assign freelancer");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center">
      <form
        onSubmit={handleAssign}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md transition-transform hover:scale-105"
      >
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Assign Freelancer
        </h2>

        <input
          type="text"
          placeholder="Project ID"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400"
          required
        />

        <input
          type="text"
          placeholder="Freelancer ID"
          value={freelancerId}
          onChange={(e) => setFreelancerId(e.target.value)}
          className="w-full p-3 mb-5 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Assign Freelancer
        </button>

        {result && (
          <div className="mt-4 text-center text-sm text-green-600 font-medium">
            {result}
          </div>
        )}
      </form>
    </div>
  );
};

export default AssignFreelancer;
