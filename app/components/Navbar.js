'use client'
import React from 'react'
import { Button } from 'antd'
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter()

    const onLogout = () => {
        router.push('/')
    };
    return (
        <div className="flex flex-col justify-between bg-white p-5 h-full">
            <div>
                <h1 className="mt-5 mb-24">Geopedia Admin</h1>
                <div>
                    <div className="my-5">Mining Data</div>
                    <div className="my-5">Setting</div>
                </div>
            </div>
            <div>
                <Button
                    onClick={onLogout}
                >
                    Logout
                </Button>
            </div>
        </div>
    )
}
