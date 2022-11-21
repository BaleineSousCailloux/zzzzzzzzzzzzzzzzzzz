import React from 'react'
import logo from '../assets/Logo1.svg'
import logoW from '../assets/Logo2.svg'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const LogoNav = () => {
  const currentPage = useLocation().pathname

  return (
    <div className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        {currentPage === '/' ? (
          <img className="main-nav-logo-image" src={logo} alt="HRnet logo" />
        ) : (
          <img className="main-nav-logo-image" src={logoW} alt="HRnet logo" />
        )}
        <h1 className="sr-only">HRnet</h1>
      </NavLink>
      <div className="main-nav-menu">
        {currentPage === '/' ? (
          <Link className="text-home" to={'/current-employees'}>
            View Current Employees
          </Link>
        ) : (
          <Link className="text-list" to={'/'}>
            Create New Employee
          </Link>
        )}
      </div>
    </div>
  )
}

export default LogoNav

// import React from 'react'
// import LogoNav from './LogoNav'
// import Login from './Login'
// import Logout from './Logout'
// import { useStore } from 'react-redux'
// import { useState } from 'react'
// import { useLocation } from 'react-router-dom'

// const Header = () => {
//   const currentPage = useLocation().pathname
//   console.log(currentPage)
//   const [isToken, setIsToken] = useState(false)
//   const store = useStore()
//   store.subscribe(() => {
//     setIsToken(store.getState().user?.token?.length)
//   })
//   return (
//     <div className="main-nav">
//       <LogoNav />
//       <div className="main-nav-choice">{isToken ? <Logout /> : <Login />}</div>
//     </div>
//   )
// }
