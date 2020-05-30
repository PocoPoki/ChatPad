import React from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {
    return (
        <>
        <div className="app">
            <FaCode style={{ fontSize: '4rem' }} /><br />
            <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
            <span style={{ fontSize: '1rem' }}>채팅준비중。。</span>
        </div>
        <div style={{ float:'right' }}>Thanks For Using This Boiler Plate by Poco</div>
        </>
    )
}

export default LandingPage
