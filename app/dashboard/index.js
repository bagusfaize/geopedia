'use client'
import React from 'react'
import SwitchToggle from '../components/SwitchToggle'
import DataTable from './components/DataTable'
import GraphView from './components/GraphView'
import { useActiveContent } from '../hooks/useActiveContent'
import { useMiningData } from '../hooks/useMiningData'

export default function Dashboard() {
    const {data, isLoading} = useMiningData();
    const { isActive, onSwitch, isTableView } = useActiveContent()


    return (
        <div>
            <div className="mb-10 flex justify-between flex-col sm:flex-row">
                <h1 className="text-2xl font-semibold mb-7 sm:mb-0 text-center">West Java Mining Data</h1>
                <SwitchToggle isActive={isActive} onSwitch={onSwitch}/>
            </div>
            <div className="container overflow-x-auto">
                {isTableView ?
                    <DataTable data={data} isLoading={isLoading}/>
                    :
                    <GraphView data={data} isLoading={isLoading}/>
                }
            </div>
        </div>
    )
}
