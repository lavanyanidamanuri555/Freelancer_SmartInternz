import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const actions = [
    { label: 'Register', path: '/register', color: 'bg-pink-500' },
    { label: 'Login', path: '/login', color: 'bg-blue-500' },
    { label: 'Post Project', path: '/post-project', color: 'bg-green-500' },
    { label: 'View Projects', path: '/view-projects', color: 'bg-yellow-500' },
    { label: 'Bid Project', path: '/bid-project', color: 'bg-purple-500' },
    { label: 'Assign Freelancer', path: '/assign-freelancer', color: 'bg-red-500' },
    { label: 'Submit Work', path: '/submit-work', color: 'bg-indigo-500' },
    { label: 'View Bids', path: '/view-bids', color: 'bg-teal-500' },
    { label: 'View Submissions', path: '/view-submissions', color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-800">🚀 SB Works Dashboard</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl">
        {actions.map((item) => (
          <div
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`text-white ${item.color} rounded-xl shadow-xl 
                        p-6 cursor-pointer text-center font-semibold 
                        text-xl h-40 w-72 flex items-center justify-center 
                        hover:brightness-110 hover:scale-105 transition-all duration-200`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
