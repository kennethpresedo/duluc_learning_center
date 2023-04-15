import Services from '../Services/Services'
import styles from './ServiceBanner.module.scss'

export default function ServiceBanner(){
    return(
        <>
        <div className={styles.serviceBanner}>
            <span className={styles.words}>&nbsp;What We Offer</span>
        </div>
        <Services />
        </>
    )
}