import React, { useState } from 'react';
import axios from 'axios';

const BidProject = () => {
  const [projectId, setProjectId] = useState('');
  const [freelancerId, setFreelancerId] = useState('');
  const [proposalText, setProposalText] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      projectId,
      freelancerId,
      proposalText,
      bidAmount
    };

    try {
      const res = await axios.post('http://localhost:3000/bid', data);
      setStatus("✅ " + res.data.message);
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to submit bid");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg transition-transform duration-300 hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          Submit Your Bid
        </h2>

        <input
          type="text"
          placeholder="Project ID"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="text"
          placeholder="Your Freelancer ID"
          value={freelancerId}
          onChange={(e) => setFreelancerId(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
          required
        />

        <textarea
          placeholder="Write your proposal..."
          value={proposalText}
          onChange={(e) => setProposalText(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded h-32 focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="number"
          placeholder="Bid Amount (₹)"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          className="w-full p-3 mb-5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Place Bid
        </button>

        {status && (
          <div className="mt-4 text-center font-medium text-green-600 animate-pulse">
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default BidProject;
