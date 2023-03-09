import React from 'react';
import { stringify_weewoo_time } from '../../Util/weewootransform';
import './WeeWooTimeDisplay.css'


const WeeWooTimeDisplay = (props) => {
    return (
        <div className="timebox">
            { stringify_weewoo_time(props.display_date)}
        </div>
    )
}

export default WeeWooTimeDisplay