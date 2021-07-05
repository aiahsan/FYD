import React,{useEffect,useState} from 'react'
import TopBar from '../src/components/topBar'
import Nav from '../src/components/nav'
import ReactStars from "react-rating-stars-component";
import { Dropdown } from 'react-bootstrap'
import { HiPlusSm } from 'react-icons/hi'
import { IoIosMenu } from 'react-icons/io'
import Footer from '../src/components/footer'
import {FiChevronUp} from 'react-icons/fi'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { useMediaQuery } from 'react-responsive'
import { FaFacebookF, FaTwitter, FaLinkedin, FaPinterest, FaReddit, FaMailBulk } from 'react-icons/fa'
import Lottie from 'react-lottie'
import animationData from '../src/animation/49259-scroll-s.json'
import VideoCard from '../src/components/newVideoCard'
import {ImEye} from 'react-icons/im'
import Head from 'next/head'
import   '../styles/Home.module.css'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
export default () => {
    const isTablet = useMediaQuery({ query: '(max-width: 991px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const [sidebarOpen, setsidebarOpen] = React.useState(false)

    const [isfixed,setrisfixed]=useState(false);
 
    const handleScroll = () => {
      const position = window.pageYOffset;
          if(position>100)
          {
              setrisfixed(true)
          }
          else
          {
              setrisfixed(false);
          }
     
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
    return          <div >
<Head>
<title>Create Next App</title>
<meta name="description" content="Generated by create next app" />
<link rel="icon" href="/favicon.ico" />
</Head>
      <div className={`${isfixed?"sadni29hasnesad":""}`}>
      <div className={`${isTablet && sidebarOpen ? "sa9du230-dsf3" : ""}`}>
            <TopBar sidebarOpen={sidebarOpen} setsidebarOpen={() => { setsidebarOpen(!sidebarOpen) }} />

        </div>
      
        <Nav sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen} />
      
      </div>
      <Element name="firstInsideContainer" >
 
        <div className={`${isfixed?"asdnoinawdoi3e":""} container banner`}>
            <div className="row">
                <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center">
                    <img src="/images/Masternode.png" className="flex-image flx-img" alt="" />
                </div>
                <div className="col-lg-1 col-12"></div>
                <div className="col-lg-6 col-12">
                    <div className="banner-description">
                        <h2>Learning about Masternodes <br></br> and Cryptocurrency</h2>
                        <div className="bottom-text">Masternode<span>.wiki</span></div>
                    </div>

                </div>

            </div>
            <div className="row">
                <div className="col-lg-6 col-12 d-flex asddji2-ads asfj2kass11">
                    <button className="btn banner-btns-btn">masternodes</button>
                    <button className="btn banner-btns-btn">cryptocurrency</button>
                </div>
                <div className="col-lg-6 col-12">

                    <div className="color-white-asd3 asddji2-ads">
                        <div className="dasf29i2-das">
                            <div className="dasf29i2-das-sd" style={{ backgroundColor: '#1977f0' }}><FaFacebookF color="white" /> <p>Share on Facebook</p> </div>
                            <div className="dasf29i2-das-sd-1" style={{ backgroundColor: '#20a1f1' }}><FaTwitter color="white" /> <p>Tweet This</p> </div>
                        </div>
                        <div className="cs2e2-asdw2" style={{ backgroundColor: '#0174b1' }}> <FaLinkedin color="white" /> </div>
                        <div className="cs2e2-asdw2" style={{ backgroundColor: '#c91f24' }}><FaPinterest color="white" /> </div>
                        <div className="cs2e2-asdw2" style={{ backgroundColor: '#fe5603' }}><FaReddit color="white" /> </div>
                        <div className="cs2e2-asdw2" style={{ backgroundColor: '#5fb82d' }}><FaMailBulk color="white" /> </div>
                        <div className="cs2e2-asdw2" style={{ backgroundColor: '#000000' }}><FaMailBulk color="white" /> </div>
                    </div>
                    <div className="asnasidasdsa-csdff mt-5">
                        <p className="hsadklasj-asdas">Rate Article</p>
                        <ReactStars
                            count={5}
                            size={30}
                            value={5}
                            activeColor="#ffd700"
                        />

                        <p className="adshsadklasj-asdas">492 Reviews</p>
                    </div>
                </div>

            </div>


        </div>
        <div className="mt-5">
            {isMobile ? <Lottie width={120} options={defaultOptions} />
                : <></>}
        </div>
        </Element>
        <section id="fydtest" className="fydtest">

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Everything you need to know<br></br> about a <span className="Sadj38hasd">masternode</span> in 2021</h1>

                        <p className="sub-title">
                            You've heard the term <span>"masternode"</span> online, but you've no idea what a masternode is? <span><br></br>This is the right place to find out!</span>
                        </p>


                        <p className="sub-title">
                            Educate yourself through free articles, <span className="sadn83nsdad">online video's,</span> and useful links about masternodes. Learn about the benefits of masternode coins, <span className="sadn83nsdad">masternode hosting</span>, masternode rewards, and <span className="sadn83nsdad">how to invest in masternodes.</span> <span>Open the masternode legend & jump to the right topic!</span>

                        </p>
                        <div className="d-flex justify-content-center">
                            <img src="/images/Arrow.png" className="w-100 asdni3ewad" alt="" />

                        </div>
                        <div className="d-flex justify-content-center asdfh390sadh3-asdf">
                            <div className="drp-cstsdf d-flex  mt-n5 kasdhjwe9x">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <IoIosMenu style={{ marginLeft: 10 }} />    Masternode legend  </Dropdown.Toggle>

                                    <Dropdown.Menu className="drps-dsfmne">
                                        <Dropdown.Item href="#/action-1">What is a Masternode <HiPlusSm style={{ marginLeft: 10 }} /></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="asdfji3wrscw3"></div>
       </section>
        <section className="video" id="masternode-legend">
        <Element name="firstInsideContainer1" >
                      <div className="askdn2e9isnasfn">
                <div className="row">
                    <div className="col-md-6">
                    <iframe style={{width:'100%',height:'100%'}} src="https://www.youtube.com/embed/qd5X8R1yXpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="fydtestsadf mt-3">
                            <h1>What is a masternode? </h1>
                            <p className="sub-title">
                            <span>Quick answer:</span> A masternode is a (strong) computer on a cryptocurrency network (blockchain) that enables additional features for the blockchain/cryptocurrency and its users.[1]
                            </p>


                            <p className="sub-title">
                            By locking a set amount of coins as collateral, investors can host a copy of the blockchain on a strong server and receive <span>masternode rewards</span> in return.    

                            </p>
                            <div className="d-flex justify-content-start asdfsodf3newsad mt-5">
                                <div className="asdb2uieaw ml-3">
                                    <div className="sadnuq29easd">
                                        <ImEye fontSize={20}/>
                                    </div>
                                    <div>
                                        <h7 className="sadni29uasds" >View video</h7>
                                    </div>
                                </div>

                                <div className="asdb2uieaw ml-4">
                                    <div className="sadnuq29easd">
                                        <ImEye fontSize={20}/>
                                    </div>
                                    <div>
                                        <h7 className="sadni29uasds" >View video</h7>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    
                </Element>
          </section>
          
          <Element name="firstInsideContainer2" >
        <section className="bg-blue " >
         <div className="askdn2e9isnasfn">
         <div className="asdfni32ksaff">
         <q className="asdn3iejasdoj93"> 

        <div className="asdfb3oriae09fj3">

        <h1 className="asdfi23e9asds">Masternode definition </h1>
            <p className="asdfn32insadfd">Masternodes are strong servers that host a copy of a <span>blockchain</span> to verify transactions, enable additional blockchain services such as instant send, private transactions and on-chain governance. For providing these services, masternodes receive <span>blockrewards</span> in return.</p>
            <p className="asdfn32insadfd mt-5">A common misconception about masternodes is that they mine cryptocurrency, while the blockrewards are set in the algorithm similar to mining, the rewards are automatically distributed to the masternodes from either <span>miners</span> or <span>stakers</span> depending on <span>the algorithm.</span> </p>

        </div>
        </q>

         </div>
         </div>
        </section>
        </Element>

        <section className="fydtest1 mt-5 video">
            <div className="">
                <h1 className="ft-30 text-center">You might also be interested in:</h1>
            </div>
            <div className="container mt-5 asdfhaish382hsad">
                <div className="row asfhi30eq2kas2 ">
                    <div className="col-md-6 ">
                    <VideoCard src="/images/what-is-a-masternode-min.jpg" title="Need help? Watch this simple explainer video?" />
                    </div>
                    <div className="col-md-6 ">
                    <VideoCard src="/images/what-is-a-masternode-min1.jpg" title="Need help? Watch this simple explainer video?" />
                    </div>

                </div>
            </div>
        </section>
        <Footer />
        <div onClick={()=> scroll.scrollTo(0)} className="fixedScrollbtn">
            <FiChevronUp className="asdni23k4eszckz2"/>
        </div>
    </div>
}