import styles from './Testimonials.module.scss'

export default function Testimonials() {
    return (
        
        <div className={styles.testimonials}>

            <span className={styles.test1}>
                <img className={styles.img1} src='https://i.imgur.com/r2eNxti.jpg' alt='' /></span>
            <span className={styles.test2}>
                <img className={styles.img1} src='https://i.imgur.com/dnZTm0z.jpg' alt='' /></span>

        </div>

    )
}