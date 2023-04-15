import styles from './Contact.module.scss'
import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'

export default function Contact() {
    return(
        <>
            <NavigationBar />
            <div className={styles.contact}>
                <h1>Contact Page!</h1>
            </div>
        </>
    )
}