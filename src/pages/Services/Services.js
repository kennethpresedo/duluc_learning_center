import styles from './Services.module.scss'
import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Bar from '../../components/Bar/Bar'

export default function Services() {
    return(
        <>
        <NavigationBar />
        <div className={styles.services}>
            <h1>Services Page!</h1>
            
        </div>
        <Bar />
        </>
    )
}