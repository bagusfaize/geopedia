import React from 'react'
// import Navbar from '../components/Navbar'

export default function AdminLayout({children}) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 p-10">
        {children}
      </div>
    </div>
  )
}