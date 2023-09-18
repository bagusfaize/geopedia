import React from 'react'
import Navbar from '../components/Navbar'

export default function AdminLayout({children}) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2">
        <Navbar />
      </div>
      <div className="col-span-10 p-10">
        {children}
      </div>
    </div>
  )
}