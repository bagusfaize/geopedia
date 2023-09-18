'use client'
import React from 'react'
import AdminLayout from '../layouts/Admin'
import { useQuery } from '@tanstack/react-query';
import { getMiningData } from '../utils/api';
import TableView from './modules/TableView';

export default function Dashboard() {
    const { data, isLoading, isError } = useQuery(['miningData'], getMiningData);
    console.log('clg data', data);

    return (
        <AdminLayout>
            <h1 className="mb-10">West Java Mining Data</h1>
            <div className="container">
                <TableView data={data} isLoading={isLoading}/>
            </div>
        </AdminLayout>
    )
}
