import styles from './Home.module.scss'
import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'

export default function Home() {
    return(
        <>
        <NavigationBar />
        <div className={styles.home}>
            <h1>Home Page!</h1>
        </div>
        </>
    )
}