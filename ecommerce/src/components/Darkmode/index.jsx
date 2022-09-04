import React from 'react'
import './styles.css';

const Darkmode = ({handleColor}) => {
    return (
        <div>
            <select className='darkmode mx-2' name="navColor" id="navColor" onChange={handleColor}>
                <option value="#f8f9fa">Light</option>
                <option value="black">Dark</option>
            </select>
        </div>
    )
}

export default Darkmode