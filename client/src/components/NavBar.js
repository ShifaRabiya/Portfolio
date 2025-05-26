import React, { useState,useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/navIcon1.png';
import navIcon2 from '../assets/img/navIcon2.png';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

       const onUpdateActiveLink = (value) => {
        setActiveLink(value);
       } 

    return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/shifa-rabiya-4871b2255" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linkedin"/></a>
                    <a href="https://github.com/ShifaRabiya" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub"/></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span>
                </button>
            </span>
            <Navbar.Collapse id="basic-navbar-nav" className="mobile-menu">
            <Nav className="me-auto">
                <Nav.Link
                    href="#home"
                    className={`navbar-link ${activeLink === 'home' ? 'active-navbar-link' : ''}`}
                    onClick={() => onUpdateActiveLink('home')}
                    >
                    Home
                </Nav.Link>
            <Nav.Link
                href="#skills"
                className={`navbar-link ${activeLink === 'skills' ? 'active-navbar-link' : ''}`}
                onClick={() => onUpdateActiveLink('skills')}
                >
                Skills
            </Nav.Link>
            <Nav.Link
                href="#projects"
                className={`navbar-link ${activeLink === 'projects' ? 'active-navbar-link' : ''}`}
                onClick={() => onUpdateActiveLink('projects')}
                >
                Projects
            </Nav.Link>
            </Nav>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}