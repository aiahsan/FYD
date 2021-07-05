import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import Sidebar from "react-sidebar";
import { useMediaQuery } from 'react-responsive'
import SideMenu from '../components/sidebar'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default ({sidebarOpen,setsidebarOpen}) => {
    const isTablet = useMediaQuery({ query: '(max-width: 991px)' })

    return <div className={`${isTablet?"asdfds-dasfheu8":"bg-blue"}`}>
       {
           !isTablet?<>
           </>:<>
           <Sidebar
        sidebar={<SideMenu/>}
        open={isTablet && sidebarOpen}
        onSetOpen={()=>{setsidebarOpen(false)}}
        styles={{ sidebar: { background: "white",position:'fixed' ,backdropFilter: 'blur(2px)'} }}
        pullRight={true}
        
        overlayClassName="asda920-sadm223"
      ></Sidebar></>
       }
        <Navbar className="container"  expand="lg">
            <Navbar.Brand href="#home">
                <div >
                    <img className="adsfjio3-sf" src="/images/FYD_masternodes.png"/>
                </div>
            </Navbar.Brand>
           
           
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100 justify-content-center adnfisdn334n">
                <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250}   className="nav-link asdhasj-afsdr asdhasj-afsdr-active " >
                Masternodes 2021
                </Link>
                <Link activeClass="active" to="firstInsideContainer1" spy={true} smooth={true} duration={250}   className="nav-link asdhasj-afsdr" >
                What is Masternodes
                </Link>
        
                <Link activeClass="active" to="firstInsideContainer2" spy={true} smooth={true} duration={250}   className="nav-link asdhasj-afsdr" >
                Masternodes defination?
                </Link>
        
                    
                    
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    </div>
}