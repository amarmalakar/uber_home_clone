import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Navbar from './Components/Navbar'

const App = () => {
    return (<>
    <Navbar />
        <Header />

        <div className="uber__for__buisness">
            <div className="uber__for__buisness--wrapper">
                <div className="container">
                    <div className="uber__for__buisness--title">Uber for Business</div>
                    <p className="uber__for__buisness--desc">Transform the way your company moves and feeds its people.</p>
                    <a href="/" className="btn btn-black">See how</a>
                </div>
            </div>
        </div>

        <div className="container" style={{ padding: '30px' }}>
            <div className="home__flex">
                <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1624484990/assets/fa/f20c42-425a-4243-866b-b480d3bd68b4/original/gettyimages-1139275491-2048x2048_With-Mask.png"
                    alt=""
                    className="home__flex--img"
                />

                <div className="home__flex--texts">
                    <div className="home__flex--heading">Uber Rentals</div>
                    <p className="home__flex--desc">Book Rentals to save time with one car and driver for your multi-stop trips.</p>
                    <p>
                        <a href="#" className="home__flex--link">Learn more</a>
                    </p>
                </div>
            </div>

            <div className="home__flex">
                <div className="home__flex--texts">
                    <div className="home__flex--heading">Uber Intercity</div>
                    <p className="home__flex--desc">Book Intercity to head outstation anytime in convenient and affordable cars.</p>
                    <p>
                        <a href="#" className="home__flex--link">Learn more</a>
                    </p>
                </div>

                <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1623719981/assets/4d/b05e4c-7340-40c4-a3e9-da0de41f14fc/original/rentals-iindia.jpg"
                    alt=""
                    className="home__flex--img-right"
                />
            </div>

            <div className="focus__on__safety">
                <div className="focus__on__safety--title">Focused on safety, wherever you go</div>

                <div className="focus__on__safety--grid">
                    <div>
                        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_507,h_338/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" alt="" />
                        <h4>Our commitment to your safety</h4>
                        <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                        <p>
                            <a href="#" className="home__flex--link">See all safety features</a>
                        </p>
                    </div>

                    <div>
                        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_507,h_338/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png" alt="" />
                        <h4>Setting 10,000+ cities in motion</h4>
                        <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                        <p>
                            <a href="#" className="home__flex--link">View all cities</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="about__us__grid">
                <div>
                    <div className="about__us__grid--icon">
                        <i className="fas fa-user-friends"></i>
                    </div>
                    <h4 className="about__us__grid--title">About us</h4>
                    <p>Find out how we started, what drives us, and how we’re igniting opportunity.</p>
                    <p>
                        <a href="#" className="home__flex--link">Learn more</a>
                    </p>
                </div>

                <div>
                    <div className="about__us__grid--icon">
                        <i className="far fa-newspaper"></i>
                    </div>
                    <h4 className="about__us__grid--title">Newsroom</h4>
                    <p>See announcements about our latest releases, initiatives, and partnerships.</p>
                    <p>
                        <a href="#" className="home__flex--link">Learn more</a>
                    </p>
                </div>

                <div>
                    <div className="about__us__grid--icon">
                        <i className="fas fa-home"></i>
                    </div>
                    <h4 className="about__us__grid--title">Global citizenship</h4>
                    <p>Read about our commitment to making a positive impact in the cities we serve.</p>
                    <p>
                        <a href="#" className="home__flex--link">Learn more</a>
                    </p>
                </div>
            </div>
        </div>

        <div style={{ padding: '45px 30px', backgroundColor: 'whitesmoke' }}>
            <div className="container">
                <div className="focus__on__safety--title">There’s more to love in the apps</div>
                <div className="download__app__grid">
                    <a href="#" className="download__app__grid--a">
                        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png" alt="" />
                        <div className="download__app__grid--text">
                            Download the Driver app
                        </div>
                        <div className="download__app__grid--icon">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>
                    <a href="#" className="download__app__grid--a">
                        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1618459257/assets/13/6bfdbd-cdb6-4221-92c1-cab1feaa39f3/original/Rider-App-logo.png" alt="" />
                        <div className="download__app__grid--text">
                            Download the Driver app
                        </div>
                        <div className="download__app__grid--icon">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div style={{ padding: '75px 30px' }}>
            <div className="container">
                <div className="signup__grid">
                    <a href="#">
                        <div className="signup__grid--heading">Sign up to drive</div>
                        <div className="signup__grid--icon">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>

                    <a href="#">
                        <div className="signup__grid--heading">Sign up to ride</div>
                        <div className="signup__grid--icon">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <Footer />
    </>)
}

export default App
