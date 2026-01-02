import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1️⃣ Send login credentials to Django JWT endpoint
      const res = await axios.post('${process.env.REACT_APP_API_URL}/api/users/token/', {
        username,
        password,
      });

      // 2️⃣ Save tokens in localStorage (keys must match Navbar & API)
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);

      setMessage('Login successful! ✅');

      // 3️⃣ Optional: Update Navbar immediately if using state in Navbar
      window.dispatchEvent(new Event('storage')); // triggers Navbar state update

      

      // 4️⃣ Redirect to profile or home
      navigate('/profile');
    } catch (err) {
      console.error(err.response?.data);
      setMessage('Login failed. Check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes('failed') ? 'text-red-500' : 'text-green-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
