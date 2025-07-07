
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AddJob } from './components/AddJob'
import { EmployerLogin } from './pages/EmployerLogin'
import Dashboard from './components/Dashboard'
import JobApplications from './components/JobApplications'
import AddNewJob from './components/AddNewJob'
import JobList from './components/JobList'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<EmployerLogin />} />
      <Route path='/addjob' element={<AddJob />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/jobapplication' element={<JobApplications />} />
      <Route path='/addnewjob' element={<AddNewJob />} />
      <Route path='/joblist' element={<JobList />} />
    </Routes>
    </>
  )
}

export default App
