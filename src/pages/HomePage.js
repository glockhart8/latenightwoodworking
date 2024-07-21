// HomePage.js
import React from 'react'
import LandingSection from '../components/Home/LandingSection'
import ReactGA from 'react-ga4'

ReactGA.event({
    category: "website",
    action: "home-page-loaded"
  });

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
