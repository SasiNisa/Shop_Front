import React, { useEffect, useState } from 'react';
import API from '../api';

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get('profile/');
        setUser(response.data);
      } catch (err) {
        console.error(err.response?.data);
        setError('Failed to load profile. Maybe token expired.');
      }
    };

    fetchProfile();
  }, []);

  if (error) return <p className="text-red-600">{error}</p>;
  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">User Profile</h2>
      <p>Username: {user.username}</p>
      <p>ID: {user.id}</p>
    </div>
  );
}

export default Profile;
