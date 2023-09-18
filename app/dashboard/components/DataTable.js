import React from 'react'
import { Table } from 'antd'
import { useMiningData } from '@/app/hooks/useMiningData';

export default function DataTable() {
    const {data, isLoading} = useMiningData()
    const yearFilter = [...new Set(data?.map(item => item.tahun))]?.map(item => ({text:item, value:item}));
    const mineralTypeFilter = [...new Set(data?.map(item => item.jenis_bahan_galian))]?.map(item => ({text:item, value:item}))

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Kode Provinsi',
            dataIndex: 'kode_provinsi',
            key: 'kode_provinsi',
        },
        {
            title: 'Provinsi',
            dataIndex: 'nama_provinsi',
            key: 'nama_provinsi',
        },
        {
            title: 'Jenis Bahan Galian',
            dataIndex: 'jenis_bahan_galian',
            key: 'jenis_bahan_galian',
            sorter: (a, b) => a.jenis_bahan_galian - b.jenis_bahan_galian,
            defaultSortOrder: 'ascend',
            filterSearch: true,
            filters : mineralTypeFilter,
            onFilter: (value, record) => record.jenis_bahan_galian === value,
        },
        {
            title: 'Jumlah Produksi',
            dataIndex: 'jumlah_produksi',
            key: 'jumlah_produksi',
        },
        {
            title: 'Satuan',
            dataIndex: 'satuan',
            key: 'satuan',
        },
        {
            title: 'Tahun',
            dataIndex: 'tahun',
            key: 'tahun',
            sorter: (a, b) => a.tahun - b.tahun,
            defaultSortOrder: 'ascend',
            filters: yearFilter,
            onFilter: (value, record) => record.tahun === value,
        },
    ];

    if (isLoading) return <div>Loading Data...</div>


    return (
        <div>
            <Table dataSource={data} columns={columns} />
        </div>
    )
}
