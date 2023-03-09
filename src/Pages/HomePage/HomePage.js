import React, { useState, useEffect } from 'react';
import WeeWooDateDisplay from '../../Components/WeeWooDateDisplay/WeeWooDateDisplay'
import WeeWooTimeDisplay from '../../Components/WeeWooTimeDisplay/WeeWooTimeDisplay'
import './HomePage.css'

const HomePage = () => {
    const [current_date, set_current_date] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            set_current_date(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="datetimecontainer">
           <WeeWooDateDisplay display_date={current_date}/>
           <WeeWooTimeDisplay display_date={current_date}/>
        </div>
    )
}

export default HomePage