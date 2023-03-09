import React, { useState, useEffect } from 'react';
import { stringify_weewoo, from_gregorian_to_weewoo } from '../../Util/weewootransform';
import { range } from 'range'
import date from 'date-and-time';


const App = () => {

    const [current_date, set_current_date] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            set_current_date(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const get_weewoo_string = () => {
        return stringify_weewoo(from_gregorian_to_weewoo(current_date))
    }

    return (
        <p>
            {get_weewoo_string() + " " + date.format(current_date, "h:mm:ss A")}
        </p>
    )
}

export default App