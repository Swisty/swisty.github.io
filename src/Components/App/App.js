import React, { useState, useEffect } from 'react';
import { stringify_weewoo, from_gregorian_to_weewoo } from '../../Util/weewootransform';
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
        <div className="weewoo">
            <div className="weewoodate">
                <p>
                    {get_weewoo_string()}
                </p>
            </div>
            <div className="weewootime">
                <p>
                    {date.format(current_date, 'h:mm:ss A')}
                </p>
            </div>
        </div>

    )
}

export default App