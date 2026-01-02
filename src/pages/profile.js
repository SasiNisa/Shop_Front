import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api'; // use your centralized axios instance

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = localStorage.getItem('access');
      if (!accessToken) {
        navigate('/login'); // no token → redirect
        return;
      }

      try {
        const res = await API.get('/profile/');
        setUser(res.data);
      } catch (err) {
        console.error('Failed to fetch profile:', err);
        navigate('/login'); // in case refresh also fails
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) return <div className="text-center mt-10 text-gray-700">Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome, {user.username}!
        </h2>
        <p className="text-gray-600 mb-4">User ID: {user.id}</p>

        <button
          onClick={() => {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            navigate('/login');
          }}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
