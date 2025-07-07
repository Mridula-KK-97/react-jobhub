import React from 'react';
import { useJobs } from '../context/JobContext'; // ✅ make sure path is correct

const JobList = () => {
  const { jobs } = useJobs(); // ✅ get jobs from context

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Available Job Listings</h2>

      {jobs.length === 0 ? (
        <p className="text-gray-500">No job applications have been posted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow hover:shadow-md p-6 transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Company:</strong> {job.company}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Status:</strong> {job.status}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Applied On:</strong> {job.date}</p>
              {job.notes && (
                <p className="text-sm text-gray-500 mt-2">{job.notes}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
