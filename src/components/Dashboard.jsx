import { Briefcase, Clock, Calendar, TrendingUp } from 'lucide-react';
import React from "react";

function Dashboard({ jobs,onAddClick }) {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Applications" value={jobs.length} subtitle="Start adding job applications" icon={<Briefcase />} />
        <StatCard title="Applied" value={0} subtitle="Awaiting response" icon={<Clock />} />
        <StatCard title="Interviews" value={0} subtitle="In progress" icon={<Calendar />} />
        <StatCard title="Success Rate" value="0%" subtitle="Offers + Interviews" icon={<TrendingUp />} />
      </div>

      {/* Recent Applications */}
      <div className="bg-white p-6 rounded-md shadow">
        <h2 className="text-xl font-semibold mb-1">Recent Applications</h2>
        <p className="text-sm text-gray-500 mb-6">Your latest job applications</p>

        <div className="flex flex-col items-center justify-center py-10 text-center">
          <Briefcase className="w-12 h-12 text-gray-300 mb-4" />
          <p className="text-gray-400 mb-4">No job applications yet</p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition" onClick={onAddClick}>
            + Add Your First Job
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white p-4 rounded-md shadow flex flex-col justify-between gap-2">
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <span>{title}</span>
        <span>{icon}</span>
      </div>
      <div className="text-2xl font-bold text-black">{value}</div>
      <div className="text-sm text-gray-400">{subtitle}</div>
    </div>
  );
}

export default Dashboard;

