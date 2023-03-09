import React from 'react';
import date from 'date-and-time';
import './WeeWooTimeDisplay.css'


const WeeWooTimeDisplay = (props) => {
    return (
        <div className="timebox">
                {date.format(props.display_date, 'h:mm:ss A')}
        </div>
    )
}

export default WeeWooTimeDisplay