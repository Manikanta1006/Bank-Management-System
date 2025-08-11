import React from 'react'
import "./Atmfinder.css"
function Atmfinder() {
    return (
        <div className='map_outer'>
            <h1 className='map_heading'>Main Branch</h1>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6431.988918534955!2d78.38669773974927!3d17.499115040478276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e1dee6987f%3A0x5b8efdd5dd2b5060!2sEduPoly!5e0!3m2!1sen!2sin!4v1754634892773!5m2!1sen!2sin" className='iframe' style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>
        </div>
    )
}

export default Atmfinder
