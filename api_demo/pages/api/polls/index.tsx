import Link from 'next/link'
import React from 'react';
import { useState, useEffect } from 'react';
import fetcher from '../../../lib/fetch'

export default function Polls() {
    const [status, setStatus] = useState('idle')
    const [data, setData] = useState({})
    const [error, setError] = useState({})

    const isLoading = status === 'loading'
    const isError = status === 'error'
    const success = status === 'success'

    useEffect(() => {
        const handler = async () => {
            setStatus('loading')
    try {
        const result = await getPolls({})
    } catch (error){
        setStatus('error')
        setError(error as any)
        
        setTimeout(() => {
            setStatus('idle')
        }, 2000)
    }

            
        }
        handler()
        setStatus('loading')
    }, [])
    
    if (isLoading) {
        return (
        <>
        <p>Henter data...</p>
        </>
        )
    }

    return (
        <>
        <h1>Polls</h1>
        <Link href="/polls/new"><a href='#'>Lag ny Poll</a></Link>
        <p>Data: {JSON.stringify(data)}</p>
        <p>Error: {JSON.stringify(error)}</p>
        </>
    )
}

function getPolls(arg0: {}) {
    throw new Error('Function not implemented.');
}
