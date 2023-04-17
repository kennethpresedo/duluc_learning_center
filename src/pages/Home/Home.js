import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Intro from '../../components/Intro/Intro'
import Development from '../../components/Development/Development'
import Services from '../../components/Services/Services'
import Banner1 from '../../components/Banners/Banner1'
import Banner2 from '../../components/Banners/Banner2'
import Thumbnails from '../../components/Thumbnails/Thumbnails'
import Footer from "../../components/Footer/Footer"
import Bar from "../../components/Bar/Bar"
import MailChimpForm from "../../components/Mailchimp/MailChimpForm"
import Testimonials from "../../components/Testimonials/Testimonials"
import Location from "../../components/Location/Location"

export default function Home() {
    return (
        <>
            <NavigationBar />
            <MailChimpForm />
            <Intro />
            <Bar />
            <Development />
            <Banner1 />
            <Banner2 />
            <Bar />
            <Services />
            <Thumbnails />
            <Bar />
            <Testimonials />
            <Location />
            <Footer />
        </>
    )
}
