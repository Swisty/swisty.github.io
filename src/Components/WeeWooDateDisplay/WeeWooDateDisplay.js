import React from 'react';
import { stringify_weewoo, from_gregorian_to_weewoo } from '../../Util/weewootransform';
import './WeeWooDateDisplay.css'


const WeeWooDateDisplay = (props) => {
    return (
        <div className="datebox">
            { stringify_weewoo(from_gregorian_to_weewoo(props.display_date)) }
        </div>
    )
}

export default WeeWooDateDisplay