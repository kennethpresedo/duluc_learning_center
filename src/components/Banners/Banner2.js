import styles from './Banner2.module.scss'

export default function Banner2(){
    return(
        <>
            <div className={styles.banner2}>
                    <span className={styles.span1}><p className={styles.words1}>Some inspiring words or something, like "we care about them lol"</p></span>
                    <span className={styles.span2}><p className={styles.words2}>Some inspiring words or something, like "we care about them lol"</p></span>
            </div>
        </>
    )
}