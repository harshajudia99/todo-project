import React from 'react'
import { Outlet } from 'react-router-dom'

export const Root = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <Outlet />
        </div>
    )
}
