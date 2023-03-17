import styles from './Home.module.scss'
import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Intro from '../../components/Intro/Intro'

export default function Home() {
    return(
        <>
        <NavigationBar />
        <Intro />
        <div className={styles.home}>
            <h1>Home Page!</h1>
        </div>
        </>
    )
}