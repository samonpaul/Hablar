import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthProvider } from './context/AuthContext'
import { ProtectedUsername, ProtetedDashboard } from './protected/ProtectedRoutes'
import Username from './pages/Username'
import Room from './pages/Room'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedUsername />}>
            <Route path="/username" element={<Username />}/>
          </Route>
          <Route element={<ProtetedDashboard />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route path='/room/:id' element={<Room id="ReactDevs"/>} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
