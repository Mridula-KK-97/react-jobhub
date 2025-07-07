import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import { useUser } from '../context/UserContext';

export const EmployerLogin = () => {
  const { setUsername } = useUser(); // 👈 get setter
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  
  const handleLogin = (e) => {
      e.preventDefault();

    // Simple validation or API call can go here

    // ✅ Navigate to AddJob page
      setUsername(email); // ✅ set globally
      navigate("/addjob");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <div className="text-center mb-6">
          <img src="logos.png" alt="logo" className="w-20 h-20 mx-auto mb-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Job Hub</h2>
          <p className="text-gray-600 text-sm">Sign in to manage your job applications</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password" required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
