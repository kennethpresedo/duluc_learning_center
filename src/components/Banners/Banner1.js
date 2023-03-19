import styles from './Banner1.module.scss'

export default function Banner1() {
    return (
        <>
            <div className={styles.banner1}>
                <span className={styles.span1}><p className={styles.words1}>Some inspiring words or something, like "we care about them lol"</p></span>
                <span className={styles.span2}><p className={styles.words2}>Some inspiring words or something, like "we care about them lol"</p></span>
            </div>
        </>
    )
}