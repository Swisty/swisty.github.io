import React from 'react';
import { stringify_weewoo_date } from '../../Util/weewootransform';
import './WeeWooDateDisplay.css'


const WeeWooDateDisplay = (props) => {
    return (
        <div className="datebox">
            { stringify_weewoo_date(props.display_date) }
        </div>
    )
}

export default WeeWooDateDisplay