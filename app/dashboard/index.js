'use client'
import React from 'react'
import AdminLayout from '../layouts/Admin'
import DataTable from './modules/DataTable';

export default function Dashboard() {
    return (
        <AdminLayout>
            <h1 className="mb-10 text-2xl font-semibold">West Java Mining Data</h1>
            <div className="container">
                <DataTable />
            </div>
        </AdminLayout>
    )
}
