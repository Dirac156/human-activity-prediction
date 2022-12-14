import React from 'react';
import Content from '../../components/content/content.component';
import Header from '../../layout/header.layout';
import { TbFreeRights } from "react-icons/tb";
import { CiTimer } from "react-icons/ci";
import { MdOnlinePrediction } from "react-icons/md";
import { FiTarget } from "react-icons/fi";
import { HiComputerDesktop } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const text = "Learn the latest animation techniques to create stunning motion design and captivate your audience."
    return(
        <div className='home-container'>
            <div className="home-background"></div>
            <div className='home'>
                <Header />
            </div>
            <div className="grid grid-cols-3 gap-20 home-content" style={{ marginTop: "10rem"}}>
                <div className='colored-gradient' style={{ 
                        borderRadius: "5rem", padding: "3rem 2rem", width: "100%", height: "32.2rem"
                    }}
                >
                    <h3 style={{
                            color: "white", fontWeight: "800",
                            fontSize: "3.2rem", lineHeight: "40px"
                        }}
                    >
                        Check out our most popular features and Advantages!
                    </h3>
                </div>
                <Content title="Free to use" text={text} icon={<TbFreeRights />}/>
                <Content title="Instant Surveillance" text={text} icon={<CiTimer />}/>
                <Content title="More than 10 Prediction classes" text={text} icon={<MdOnlinePrediction />}/>
                <Content title="Multi purpose" text={text} icon={<FiTarget />}/>
                <Content title="Multi platform" text={text} icon={<HiComputerDesktop />}/>
            </div>
            <div className='footer-box pointer'>
                <nav className="footer-nav">
                    <span className="footer-nav-logo" onClick={() => navigate("/")}>Skilled</span>
                    <button className="footer-nav-button" onClick={() => navigate("/application")}>Get started</button>
                </nav>   
            </div>
        </div>
    )
};

export default Home;