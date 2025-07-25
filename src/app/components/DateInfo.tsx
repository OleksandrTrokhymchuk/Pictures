'use client'

import { useEffect, useState } from 'react'
import mainStyles from '@/styles/main/main.module.css'

export default function DateInfo() {

    const [now, setNow] = useState(new Date())  

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date())
        }, 1000) 
      return () => clearInterval(interval)
    }, [])

    const day = now.getDate().toString().padStart(2, '0')

    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const year = now.getFullYear() 

    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')    

    return (
        <div style={{ marginTop: '20px' }}>
            <p className={mainStyles['text']}>{day}.{month}.{year} {hours}:{minutes}</p>
        </div>
    )
}
