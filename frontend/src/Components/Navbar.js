import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <div>
        <ul className='nav-ul'>
            <li><Link to="/">Todos</Link></li>
            <li><Link to="/addtodo">Add Todo</Link></li>
          </ul>
    </div>
  )
}
