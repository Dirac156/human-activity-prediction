import React from 'react'
import { useNavigate } from 'react-router-dom';
import WebcamStreamCapture from '../../components/webcam/webcam.component';
import Navbar from '../../layout/navbar.layout';
import "./prediction.style.css";


const Prediction = () => {
    const navigate = useNavigate();
    const [prediction, setPrediction] = React.useState("")

    return(
        <div className=''>
            <div className='prediction'>
                <Navbar />
                <div className='prediction-box'>
                    <div className='prediction-signal risk danger'>
                        <div>
                            <WebcamStreamCapture 
                            updatePrediction = {(data) => setPrediction(data)}
                            />
                        </div>
                    </div>
                    <div className='prediction-result'>
                        {
                            prediction ? <span>Action Performed: {prediction}</span> : ""
                        }
                        
                    </div>
                </div>
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

export default Prediction;