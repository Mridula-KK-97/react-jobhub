import React, { useState } from 'react';
import Dashboard from './Dashboard';
import JobList from './JobList';
import AddNewJob from './AddNewJob';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const AddJob = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [jobs, setJobs] = useState([]);
  const { username, setUsername } = useUser();
  const navigate = useNavigate();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard jobs={jobs} onAddClick={() => setActiveTab('add')} />;
      case 'applications':
        return <JobList jobs={jobs} />;
      case 'add':
        return <AddNewJob setJobs={setJobs} />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    setUsername(null);
    navigate('/');
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center bg-white px-6 py-4 shadow-md">
        <div className="flex items-center gap-2">
          <img src="logos.png" alt="logo" className="w-10 h-10 object-contain" />
          <h2 className="text-xl font-semibold text-gray-800">Job Hub</h2>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-600">Welcome, {username}</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-6">
        <div className="flex justify-center gap-6">
          <button
            className="w-40 h-10 rounded-md text-gray-700 hover:bg-blue-100 bg-gray-100"
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className="w-40 h-10 rounded-md text-gray-700 hover:bg-blue-100 bg-gray-100"
            onClick={() => setActiveTab('applications')}
          >
            Job Applications
          </button>
          <button
            className="w-40 h-10 rounded-md text-gray-700 hover:bg-blue-100 bg-gray-100"
            onClick={() => setActiveTab('add')}
          >
            Add New Job
          </button>
        </div>
      </div>

      <div>{renderTabContent()}</div>
    </div>
  );
};
