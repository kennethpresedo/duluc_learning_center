import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Intro from '../../components/Intro/Intro'
import Development from '../../components/Development/Development'
import Services from '../../components/Services/Services'
import Banner1 from '../../components/Banners/Banner1'
import Banner2 from '../../components/Banners/Banner2'
import Thumbnails from '../../components/Thumbnails/Thumbnails'
import Footer from "../../components/Footer/Footer"

export default function Home() {
    return (
        <>
            <NavigationBar />
            <Intro />
            <Development />
            <Banner1 />
            <Banner2 />
            <Services />
            <Thumbnails />
            <Footer />
        </>
    )
}
