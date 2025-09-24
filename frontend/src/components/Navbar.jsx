import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', label: 'Home' },
     { path: '/dashboard', label: 'Dashboard' },
    { path: '/register', label: 'Register' },
    { path: '/login', label: 'Login' },
    { path: '/post-project', label: 'Post Project' },
    { path: '/view-projects', label: 'View Projects' },
    { path: '/bid-project', label: 'Bid Project' },
    { path: '/assign-freelancer', label: 'Assign' },
    { path: '/submit-work', label: 'Submit Work' },
    { path: '/view-bids', label: 'View Bids' },
    { path: '/view-submissions', label: 'View Submissions' },
  ];

  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">SB Works</h1>
        <div className="flex flex-wrap gap-4 mt-2 sm:mt-0">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="hover:bg-indigo-800 px-3 py-1 rounded transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
