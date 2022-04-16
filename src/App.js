import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home, OldFom, UserDetails, UserTable } from './pages';
import { UserReactTable, UserForm } from './pages';
import { Login } from './pages/Login';
import { ProtectedRoutes, ProtectedRoutesLoggedinUsers } from './ProtectedRoutes';
const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoutesLoggedinUsers />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/user-table" element={<UserTable />} />
          <Route path="/form" element={<OldFom />} />
          <Route path="/user-react-table" element={<UserReactTable />} />
          <Route path="/user/:email" element={<UserDetails/>} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App