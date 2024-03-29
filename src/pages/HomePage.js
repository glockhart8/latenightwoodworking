// HomePage.js
import React from 'react'
import LandingSection from '../components/Home/LandingSection' // Import the new component
// import YoutubeEmbed from '../components/Common/YoutubeEmbed'

const HomePage = () => {
    return (
        <div>
            <LandingSection />
            <p style={{marginTop: "100vh"}}></p>
            {/* <h1>Latest Video</h1>
            <YoutubeEmbed embedId="XBjs5Xs-VNE?si=MXZM4fu4isKiTTMC" /> */}
        </div>
    )
}

export default HomePage
