import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', { email, password });

      if (res.status === 200) {
        alert("✅ Logged in as: " + res.data.role);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        if (res.data.role === "client") {
          window.location.href = "/post-project";
        } else if (res.data.role === "freelancer") {
          window.location.href = "/bid-project";
        } else {
          window.location.href = "/view-projects";
        }
      }
    } catch (err) {
      console.error("⚠️ Error during login:", err);
      alert("❌ Could not connect to server");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition-transform hover:scale-105"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-all"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-purple-600 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
