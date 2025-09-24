import { useState } from 'react';

export default function PlaceBid() {
  const [form, setForm] = useState({
    projectId: '',
    freelancerId: '',
    proposalText: '',
    bidAmount: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const placeBid = async () => {
    try {
      const res = await fetch('http://localhost:3000/bid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const result = await res.json();
      alert(result.message);
    } catch (err) {
      alert('❌ Error placing bid');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">📨 Place a Bid</h2>

        <input
          id="projectId"
          placeholder="Project ID"
          onChange={handleChange}
          value={form.projectId}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          id="freelancerId"
          placeholder="Freelancer ID"
          onChange={handleChange}
          value={form.freelancerId}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          id="proposalText"
          placeholder="Proposal Message"
          onChange={handleChange}
          value={form.proposalText}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <input
          id="bidAmount"
          type="number"
          placeholder="Bid Amount (₹)"
          onChange={handleChange}
          value={form.bidAmount}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={placeBid}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Bid 🚀
        </button>
      </div>
    </div>
  );
}
