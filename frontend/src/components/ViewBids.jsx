import React, { useState } from 'react';
import axios from 'axios';

const ViewBids = () => {
  const [projectId, setProjectId] = useState('');
  const [bids, setBids] = useState([]);
  const [error, setError] = useState('');

  const fetchBids = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/bids/${projectId}`);
      setBids(res.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('❌ Error fetching bids');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 shadow-2xl rounded-xl w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">🔍 View Bids for a Project</h2>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Project ID"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={fetchBids}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition"
          >
            🔎 View Bids
          </button>
        </div>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        {bids.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">📋 Bids:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bids.map((bid, index) => (
                <li
                  key={index}
                  className="bg-gray-100 border rounded-lg p-4 shadow-sm"
                >
                  <p><strong>🧑‍💻 Freelancer ID:</strong> <span className="text-gray-700">{bid.freelancerId}</span></p>
                  <p><strong>💰 Amount:</strong> ₹{bid.bidAmount}</p>
                  <p><strong>📝 Proposal:</strong> <br /><span className="text-gray-600 italic">{bid.proposalText}</span></p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewBids;
