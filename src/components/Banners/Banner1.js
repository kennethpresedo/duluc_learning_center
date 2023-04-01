import styles from './Banner1.module.scss'

export default function Banner1() {
    return (
        <>
            <div className={styles.banner1}>
                <span className={styles.span1}><p className={styles.words1}>High-quality, individualized tutoring.</p></span>
                <span className={styles.span2}><p className={styles.words2}>Supporting student learning and growth.</p></span>
            </div>
        </>
    )
}