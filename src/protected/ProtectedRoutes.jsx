import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


export const ProtetedDashboard = () => {

    const { currentUser } = useAuth()

  return (
    currentUser ? <Outlet /> : <Navigate to="/login"/>
  )
}

export const ProtectedUsername = () => {

  const { currentUser } = useAuth()

  return (
    currentUser ? <Outlet /> : <Navigate to="/register" />
  )
}
