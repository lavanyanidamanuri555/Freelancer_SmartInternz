import { useState } from 'react';

export default function ViewSubmissions() {
  const [projectId, setProjectId] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState('');

  const fetchSubmissions = async () => {
    try {
      const res = await fetch(`http://localhost:3000/submissions/${projectId}`);
      const data = await res.json();
      setSubmissions(data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('❌ Error fetching submissions');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-100 flex items-center justify-center py-10 px-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">📥 View Submissions</h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            placeholder="🔍 Enter Project ID"
            value={projectId}
            onChange={e => setProjectId(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded w-full"
          />
          <button
            onClick={fetchSubmissions}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            View
          </button>
        </div>

        {error && <p className="text-center text-red-500">{error}</p>}

        {submissions.length > 0 ? (
          <ul className="space-y-4">
            {submissions.map((s, index) => (
              <li
                key={index}
                className="border border-gray-200 bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <p><strong className="text-gray-700">👤 Freelancer:</strong> {s.freelancerId}</p>
                <p><strong className="text-gray-700">📝 Text:</strong> {s.submissionText}</p>
                <p>
                  <strong className="text-gray-700">🔗 Link:</strong>{' '}
                  <a
                    href={s.submissionLink}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.submissionLink}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No submissions found yet.</p>
        )}
      </div>
    </div>
  );
}
