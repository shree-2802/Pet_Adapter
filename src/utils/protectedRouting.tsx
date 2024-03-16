import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
export type ProtectedRoutingType = {
    isAuthenticated: boolean
}
const ProtectedRouting = ({ isAuthenticated }: ProtectedRoutingType) => {
    const location = useLocation();
    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default ProtectedRouting
