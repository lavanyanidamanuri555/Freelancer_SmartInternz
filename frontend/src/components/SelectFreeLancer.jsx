import { useState } from 'react';

export default function SelectFreelancer() {
  const [projectId, setProjectId] = useState('');
  const [freelancerId, setFreelancerId] = useState('');
  const [message, setMessage] = useState('');

  const assignFreelancer = async () => {
    try {
      const res = await fetch('http://localhost:3000/select-freelancer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, selectedFreelancerId: freelancerId })
      });
      const result = await res.json();
      setMessage("✅ " + result.message);
    } catch (err) {
      setMessage("❌ Error assigning freelancer");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">Assign Freelancer</h2>

        <input
          type="text"
          placeholder="Project ID"
          value={projectId}
          onChange={e => setProjectId(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="text"
          placeholder="Freelancer ID"
          value={freelancerId}
          onChange={e => setFreelancerId(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          onClick={assignFreelancer}
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
        >
          🎯 Assign Now
        </button>

        {message && (
          <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}
