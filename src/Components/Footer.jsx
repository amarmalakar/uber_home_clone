import React from 'react'

const Footer = () => {
    return (
        <footer>
            
            <div className="footer__heading">
                <h3><span>u</span>ber</h3>
                <h4>Visit Help Center</h4>
            </div>

            <div className="footer__widget__1">
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our offering</a></li>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">AI</a></li>
                        <li><a href="#">Gift cards</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Products</h4>
                    <ul>
                        <li><a href="#">Ride</a></li>
                        <li><a href="#">Drive</a></li>
                        <li><a href="#">Deliver</a></li>
                        <li><a href="#">Eat</a></li>
                        <li><a href="#">Uber for Buisness</a></li>
                        <li><a href="#">Uber Freight</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Global citizenship</h4>
                    <ul>
                        <li><a href="#">Safety</a></li>
                        <li><a href="#">Diversity and Inclusion</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Travel</h4>
                    <ul>
                        <li><a href="#">Airports</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer__widget__2">
                <ul className="footer__widget__2__social__links">
                    <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>

                <ul className="footer__widget__2__details">
                    <li><a href="#"><i className="fas fa-globe"></i> <span>English</span></a></li>
                    <li><a href="#"><i className="fas fa-map-marker-alt"></i> <span>San Francisco Bay Area</span></a></li>
                </ul>

                <ul className="footer__widget__2__img">
                    <li><a href="#"><img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg" alt="" /></a></li>
                    <li><a href="#"><img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg" alt="" /></a></li>
                </ul>
            </div>

            <div className="footer__widget__3">
                <p>© 2021 Uber Technologies Inc.</p>

                <ul>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Terms</a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer
