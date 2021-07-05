import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import Sidebar from "react-sidebar";
import { useMediaQuery } from 'react-responsive'
import SideMenu from '../components/sidebar'
import {HiMenuAlt3} from 'react-icons/hi'
import {Dropdown} from 'react-bootstrap';
export default ({sidebarOpen,setsidebarOpen}) => {
    const isTablet = useMediaQuery({ query: '(max-width: 991px)' })

    return <div style={{backgroundColor:'white'}} className={`${isTablet?"asdfds-dasfheu81":""}`}>
        <Navbar className="container asf90e23jsd2ax"  expand="lg">
            <Navbar.Brand href="#home">
            <img alt="" className="w-100px" src="/images/logo.png"/>
           
            </Navbar.Brand>
           
            {isTablet?<>
    <button style={{zIndex:10}} onClick={()=>setsidebarOpen(true)} className="btn"><HiMenuAlt3 style={{fontSize:'2rem'}} /></button>
    </>:<>
   
    </>}
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100 justify-content-around asnd1289xzxw">
                <Nav.Link href="#home" className="asdhasj-afsdr1 ">Crypto</Nav.Link>
                    <Nav.Link href="#home" className="asdhasj-afsdr1 asdhasj-afsdr-active1">Masternodes</Nav.Link>
                    <Nav.Link href="#home" className="asdhasj-afsdr1 ">NFT</Nav.Link>
                    <Nav.Link href="#home" className="asdhasj-afsdr1">Staking</Nav.Link>
                    <Nav.Link href="#home" className="asdhasj-afsdr1">Mining</Nav.Link>
                    <Nav.Link href="#home" className="csanks-2dsd asdhasj-afsdr1" >FYD</Nav.Link>
                    
                </Nav>
                
            </Navbar.Collapse>
           {
               !isTablet?<>
                <Dropdown >
  <Dropdown.Toggle className="sadai219adas30 asdhasj-afsdr1">
    EN
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"><span className="country-flag pt" style={{backgroundPosition:258}}></span> Português</Dropdown.Item>
    <Dropdown.Item href="#/action-1"><span className="country-flag pt" style={{backgroundPosition:289}}></span> Español</Dropdown.Item>
    <Dropdown.Item href="#/action-1"><span className="country-flag pt" style={{backgroundPosition:225}}></span> Deutsch</Dropdown.Item>
    <Dropdown.Item href="#/action-1"><span className="country-flag pt" style={{backgroundPosition:193}}></span> Français</Dropdown.Item>
    <Dropdown.Item href="#/action-1"><span className="country-flag pt" style={{backgroundPosition:162}}></span> العربية</Dropdown.Item>
    <Dropdown.Item href="#/action-1"><span className="country-flag pt" style={{backgroundPosition:385}}></span> 日本語</Dropdown.Item>
    <Dropdown.Item href="#/action-1"><span className="country-flag pt" style={{backgroundPosition:32}}></span> Հայերեն</Dropdown.Item>
    <Dropdown.Item href="#/action-1"><span className="country-flag pt" style={{backgroundPosition:128}}></span> Türkçe</Dropdown.Item>
    <Dropdown.Item href="#/action-1"><span className="country-flag pt" style={{backgroundPosition:96}}></span> Русский</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
               </>:<></>
           }
        </Navbar>
    </div>
}