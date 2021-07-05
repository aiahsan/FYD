import React from 'react';
import FooterLinks from '../components/footerLinks'
import { LinksFooter } from '../components/links'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { SiTwitter } from 'react-icons/si'
import {FaPaperPlane} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'

function App() {

  const [links, setLinks] = React.useState([
  ])

  return (
    <div className="footer-part">
      <div className="sdf230kfsa-asd232213">
        <div className="container sdf230kfsa-asd232">
        <img alt="" src="/images/logo1.png"/>
        </div>
      </div>
      <div className="container">

        <div className="footer">
          {/* <div className="footer-head">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.5 166" role="img"><path fill="#1292ee" d="M9.9 97.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L10.2 48.6C3.9 54.8 0 63.5 0 73c0 9.5 3.8 18 9.9 24.2zM127.6 68.8L79 117.4c-6.3 6.2-10.2 14.9-10.2 24.4 0 9.4 3.8 18 9.9 24.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.5-3.8-18-9.9-24.2zM127.3 48.7s0-.1 0 0c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L10.2 117.4C3.9 123.6 0 132.3 0 141.8c0 9.4 3.8 18 9.9 24.2L127.3 48.7z"></path></svg>
            <h3 className="footer-main-head">Tools for the world's most customer-centric businesses</h3>

          </div> */}

          <FooterLinks links={LinksFooter[0]} heading="Masternode" />
          <FooterLinks links={LinksFooter[1]} heading="Cryptocurrency" />
          <FooterLinks links={LinksFooter[2]} heading="NFT Crypto" />
          <FooterLinks links={LinksFooter[3]} heading="Staking" />
          <FooterLinks links={LinksFooter[4]} heading="Mining" />
          <FooterLinks links={LinksFooter[5]} hasCircle={true} heading="FYD" />

        </div>
        <div className="social-footer">
        <div >
        <a href="#" className="color-white masternodelink1">Masternode <span>wiki</span></a>
          </div>
          <div  className="foot-sgn">
            <div className="">
            <span className="masternodelink1" style={{fontSize:18}}>FYD © 2019-2021</span>
         </div>
             </div>
             <div >
            <FaPaperPlane className="f-social" />
            <SiTwitter className="f-social" />
            <AiFillFacebook className="f-social" />
            <FiYoutube className="f-social" />
          </div>
        </div>

      </div>

    </div>

  );
}

export default App;
