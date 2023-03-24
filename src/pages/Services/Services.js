import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Bar from '../../components/Bar/Bar'
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner"
import Tutoring from "../../components/Tutoring/Tutorting"
import Footer from "../../components/Footer/Footer"

export default function Services() {
    return (
        <>
            <NavigationBar />
            <Bar />
            <ServiceBanner />
            <Bar />
            <Tutoring />
            <Footer />
        </>
    )
}