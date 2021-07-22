import React, { useRef, useState } from 'react'
import '../header.css'
import Driver from './headerComponents/Driver'
import Eat from './headerComponents/Eat'
import Ride from './headerComponents/Ride'

const Header = () => {
    const [header, setHeader] = useState({
        imgUrl: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1349,h_667/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png',
        header_body: <Driver />
    })
    const deliverLink = useRef();
    const eatLink = useRef();
    const rideLink = useRef();

    const handleDrive = () => {
        setHeader({
            imgUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1349,h_667/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png",
            header_body: <Driver />
        })

        deliverLink.current.style.borderBottom = '5px solid #000';
        eatLink.current.style.borderBottom = 'none';
        rideLink.current.style.borderBottom = 'none';
    }
    const handelEat = () => {
        setHeader({
            imgUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1349,h_599/v1613521576/assets/9d/2ff1e0-a207-425a-a1b8-cf40c95d6567/original/Eats_Home_bg_desktop2x.png",
            header_body: <Eat />
        })

        deliverLink.current.style.borderBottom = 'none';
        eatLink.current.style.borderBottom = '5px solid #000';
        rideLink.current.style.borderBottom = 'none';
    }
    const handelRide = () => {
        setHeader({
            imgUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1349,h_644/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png",
            header_body: <Ride />
        })

        deliverLink.current.style.borderBottom = 'none';
        eatLink.current.style.borderBottom = 'none';
        rideLink.current.style.borderBottom = '5px solid #000';
    }
    // deliverLink.current.style.borderBottom = '5px solid #000';

    return (<>
        <header>
            <div className="header__container">
                <div className="header__intro--wrapper">

                    <div className="header__intro--header">
                        <a
                            href="javascript:void(0)"
                            onClick={handleDrive}
                            className="header__intro--header-link"
                            ref={deliverLink}
                            style={{ borderBottom: '5px solid #000' }}
                        >
                            <i className="fas fa-truck"></i>
                            <span>Drive or <br />deliver</span>
                        </a>
                        <a
                            href="javascript:void(0)"
                            onClick={handelEat}
                            className="header__intro--header-link"
                            ref={eatLink}
                        >
                            <i className="fas fa-utensils"></i>
                            <span>Eat</span>
                        </a>
                        <a
                            href="javascript:void(0)"
                            onClick={handelRide}
                            className="header__intro--header-link"
                            ref={rideLink}
                        >
                            <i className="fas fa-car"></i>
                            <span>Ride</span>
                        </a>
                    </div>

                    <div className="header__intro--body">
                        {header.header_body}
                    </div>

                </div>
            </div>

            <img src={header.imgUrl} alt="" className="header__image" />
        </header>
    </>)
}

export default Header
