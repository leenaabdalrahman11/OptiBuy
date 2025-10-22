import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className={style.navv}>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </div>
  )
}
