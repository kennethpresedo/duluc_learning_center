import styles from './About.module.scss'
import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Founder from '../../components/Founder/Founder'
import Footer from '../../components/Footer/Footer'

export default function About() {
    return(
        <>
        <NavigationBar />
        <div className={styles.about}>
            <Founder />
        </div>
        <Footer />
        </>
    )
}