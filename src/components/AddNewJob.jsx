import React, { useState } from 'react';
import { useJobs } from '../context/JobContext'; // ✅ make sure this path is correct

function AddNewJob() {
  const { setJobs } = useJobs(); // ✅ use context instead of props

  const [form, setForm] = useState({
    company: '',
    title: '',
    location: '',
    date: '',
    notes: '',
    status: 'Applied',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobs((prev) => [...prev, form]);
    alert('Job added!');
    setForm({
      company: '',
      title: '',
      location: '',
      date: '',
      notes: '',
      status: 'Applied',
    });
  };

  return (
    <div className="bg-white p-8 rounded-md shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-xl">➕</span> Add New Job Application
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Application Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md px-4 py-2"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date Applied <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-4 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="4"
            className="mt-1 w-full border rounded-md px-4 py-2"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Add Job Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewJob;
