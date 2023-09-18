'use client'

import React from 'react'
import { Button, Form, Input } from 'antd'
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter()

    const onSubmit = () => {
        router.push('/dashboard')
    };

    return (
        <div className="bg-white p-5">
            <div>
                <h1 className="text-lg font-bold">Sign In</h1>
            </div>
            <div>
                <Form>
                    <Input
                        className="my-2"
                        placeholder='Username'
                    />
                    <Input
                        className="my-2"
                        placeholder='Password'
                    />
                    <Button 
                        onClick={onSubmit}
                        type="primary" 
                        className="bg-blue-600"
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
