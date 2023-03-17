import styles from './About.module.scss'
import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'

export default function About() {
    return(
        <>
        <NavigationBar />
        <div className={styles.about}>
            <h1>About Page!</h1>
        </div>
        </>
    )
}