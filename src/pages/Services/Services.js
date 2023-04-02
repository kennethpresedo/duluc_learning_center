import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Bar from '../../components/Bar/Bar'
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner"
import Tutoring from "../../components/Tutoring/Tutoring"
import Footer from "../../components/Footer/Footer"
import Tips from "../../components/Tips/Tips"

export default function Services() {
    return (
        <>
            <NavigationBar />
            <Bar />
            <ServiceBanner />
            <Bar />
            <Tutoring />
            <Tips />
            <Footer />
        </>
    )
}