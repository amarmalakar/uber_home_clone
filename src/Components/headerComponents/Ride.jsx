import React from 'react'

const Ride = () => {
    return (<>
        <h2>Request a ride now</h2>
        <div className="ride__form">
            <div className="ride__form__control">
                <i class="far fa-circle"></i>
                <input
                    type="text"
                    placeholder="Enter pickup location"
                />
                <i class="fas fa-location-arrow"></i>
            </div>
            <div className="ride__form__control">
                <i class="far fa-square"></i>
                <input
                    type="text"
                    placeholder="Enter destination"
                />
            </div>
        </div>

        <a href="#" className="btn">Request Now</a>
        <a href="#" className="btn gray">Schedule for later</a>
    </>)
}

export default Ride
