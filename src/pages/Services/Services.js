import styles from './Services.module.scss'
import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'

export default function Services() {
    return(
        <>
        <NavigationBar />
        <div className={styles.services}>
            <h1>Services Page!</h1>
        </div>
        </>
    )
}