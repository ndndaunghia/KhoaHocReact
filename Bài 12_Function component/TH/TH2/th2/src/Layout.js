import React from 'react'
import { useNavigate, Outlet, redirect } from 'react-router-dom'

export default function Layout() {
    const navigate = useNavigate();
  return (
   <div>
     <nav>
          <ul>
            <li>
                <span onClick={()=> {
                    navigate('/home')
                }}>Home</span>
            </li>
            <li>
            <span onClick={()=> {
                    navigate('/about')
                }}>About</span>
            </li>
          </ul>
        </nav>
        <Outlet />
   </div>
  )
}
