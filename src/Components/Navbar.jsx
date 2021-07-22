import React, { useRef } from 'react'
import '../nav.css'

const Navbar = () => {
    const companySubNav = useRef()
    const chevronCompanyIcon = useRef()

    const handleCompanySubNav = () => {
        if (companySubNav.current.style.visibility === 'visible') {
            companySubNav.current.style.visibility = 'hidden';
            chevronCompanyIcon.current.classList = 'fas fa-chevron-down'
        } else {
            companySubNav.current.style.visibility = 'visible';
            chevronCompanyIcon.current.classList = 'fas fa-chevron-up'
        }
    }

    const fullPageNav = useRef();
    const chevronBarIcon = useRef();
    const handleFullPageNav = () => {
        if (fullPageNav.current.style.display === 'block') {
            fullPageNav.current.style.display = 'none';
            chevronBarIcon.current.classList = 'fas fa-bars'
        } else {
            fullPageNav.current.style.display = 'block';
            chevronBarIcon.current.classList = 'fas fa-times'
        }
    }

    const fullPageNavSubMenu = useRef();
    const fullPageNavSubMenuIcon = useRef();
    const handleFullPageNavSubMenu = () => {
        if (fullPageNavSubMenu.current.style.display === 'block') {
            fullPageNavSubMenu.current.style.display = 'none';
            fullPageNavSubMenuIcon.current.classList = 'fas fa-chevron-down'
        } else {
            fullPageNavSubMenu.current.style.display = 'block';
            fullPageNavSubMenuIcon.current.classList = 'fas fa-chevron-up'
        }
    }

    return (<>
        <nav className="main__nav">
            <div className="main__nav__container">
                <ul>
                    <li className="main__nav--brand-link"><a href="#">uber</a></li>
                    <li className="main__nav--sub-link">
                        <a href="#" onClick={handleCompanySubNav}>Company <i className="fas fa-chevron-down" ref={chevronCompanyIcon}></i></a>
                        <ul className="main__nav--sub-menu" ref={companySubNav}>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our offering</a></li>
                            <li><a href="#">How uber works</a></li>
                            <li><a href="#">Global citizenship</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Safety</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">COVID-19 resources</a></li>
                </ul>

                <ul>
                    <li><a href="#"><i className="fas fa-globe"></i> <span>EN</span></a></li>
                    <li><a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
                        </svg>
                        <span>Products</span>
                    </a></li>
                    <li><a href="#"><i className="fas fa-user"></i> <span>Log in</span></a></li>
                    <li><a href="#" className="main__nav-btn">sign up</a></li>
                </ul>
            </div>
        </nav>

        <nav className="mobile__nav">
            <a href="#" className="mobile__nav--brand">uber</a>

            <ul>
                <li><a href="#"><i className="fas fa-user"></i></a></li>
                <li><a href="#" className="main__nav-btn">Signup</a></li>
                <li><a href="#" onClick={handleFullPageNav}><i className="fas fa-bars" ref={chevronBarIcon}></i></a></li>
            </ul>
        </nav>

        <nav className="full__page__nav" ref={fullPageNav}>
            <ul>
                <li>
                    <a href="#" onClick={handleFullPageNavSubMenu}>
                        <span>Company</span>
                        <i className="fas fa-chevron-down" ref={fullPageNavSubMenuIcon}></i>
                    </a>

                    <ul className="full__page__nav--sub-menu" ref={fullPageNavSubMenu}>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our offering</a></li>
                        <li><a href="#">How uber works</a></li>
                        <li><a href="#">Global citizenship</a></li>
                    </ul>
                </li>

                <li><a href="#">Safety</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">COVID-19 resources</a></li>
            </ul>

            <a href="#" className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
                </svg>
                <span>Products</span>
            </a>
        </nav>
    </>)
}

export default Navbar
