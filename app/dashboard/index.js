'use client'
import React from 'react'
import AdminLayout from '../layouts/Admin'
import SwitchToggle from '../components/SwitchToggle'
import DataTable from './components/DataTable'
import GraphView from './components/GraphView'
import { useActiveContent } from '../hooks/useActiveContent'

export default function Dashboard() {
    const { isActive, onSwitch, isTableView } = useActiveContent()

    // console.log('clg outside', isActive);

    return (
        <AdminLayout>
            <div className="mb-10 flex justify-between">
                <h1 className="text-2xl font-semibold">West Java Mining Data</h1>
                <SwitchToggle isActive={isActive} onSwitch={onSwitch}/>
            </div>
            <div className="container">
                {isTableView ?
                    <DataTable />
                    :
                    <GraphView />
                }
            </div>
        </AdminLayout>
    )
}
