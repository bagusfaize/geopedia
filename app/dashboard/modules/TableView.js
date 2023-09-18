import React from 'react'
import { Table } from 'antd'

export default function TableView({ isLoading, data }) {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
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
        },
    ];

    if (isLoading) return <div>Loading Data...</div>


    return (
        <div>
            <Table dataSource={data} columns={columns} />
        </div>
    )
}
