import React from 'react';
import { Search } from 'lucide-react';

function JobApplications() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-md shadow">
        <div className="flex items-center gap-2 mb-4">
          <Search className="w-5 h-5 text-gray-600" />
          <h2 className="text-xl font-semibold">Job Applications (0)</h2>
        </div>

        {/* Search + Filters + Sort */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search by company, job title, or location..."
            className="border rounded-md px-4 py-2 flex-1 min-w-[250px]"
          />

          {/* Filter buttons */}
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-black text-white rounded-md">All</button>
            <button className="px-4 py-1.5 border rounded-md hover:bg-gray-100">Applied</button>
            <button className="px-4 py-1.5 border rounded-md hover:bg-gray-100">Interview</button>
            <button className="px-4 py-1.5 border rounded-md hover:bg-gray-100">Offer</button>
            <button className="px-4 py-1.5 border rounded-md hover:bg-gray-100">Rejected</button>
          </div>

          {/* Sort dropdown */}
          <select className="border rounded-md px-4 py-2">
            <option>Sort by Date</option>
            <option>Sort by Company</option>
          </select>
        </div>

        {/* Count */}
        <p className="text-sm text-gray-500 mt-4">Showing 0 of 0 applications</p>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-md shadow p-12 flex flex-col items-center justify-center text-center">
        <Search className="w-12 h-12 text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-700 mb-1">No jobs found</h3>
        <p className="text-sm text-gray-500">You haven't added any job applications yet</p>
      </div>
    </div>
  );
}

export default JobApplications;

