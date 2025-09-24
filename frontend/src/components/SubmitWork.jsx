import React, { useState } from 'react';
import axios from 'axios';

const SubmitWork = () => {
  const [projectId, setProjectId] = useState('');
  const [freelancerId, setFreelancerId] = useState('');
  const [submissionText, setSubmissionText] = useState('');
  const [submissionLink, setSubmissionLink] = useState('');
  const [resultMsg, setResultMsg] = useState('');

  const handleSubmit = async () => {
    const data = {
      projectId,
      freelancerId,
      submissionText,
      submissionLink
    };

    try {
      const res = await axios.post('http://localhost:3000/submit-work', data);
      setResultMsg("✅ " + res.data.message);
    } catch (error) {
      console.error(error);
      setResultMsg("❌ Error submitting work");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">📤 Submit Your Work</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="🔢 Project ID"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="text"
            placeholder="🧑‍💻 Freelancer ID"
            value={freelancerId}
            onChange={(e) => setFreelancerId(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
          />

          <textarea
            rows="4"
            placeholder="📝 Submission Description..."
            value={submissionText}
            onChange={(e) => setSubmissionText(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
          ></textarea>

          <input
            type="text"
            placeholder="🔗 Upload Link (Drive, GitHub, etc.)"
            value={submissionLink}
            onChange={(e) => setSubmissionLink(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            🚀 Submit Work
          </button>
        </div>

        {resultMsg && (
          <p className="mt-6 text-center font-medium text-green-600">{resultMsg}</p>
        )}
      </div>
    </div>
  );
};

export default SubmitWork;
