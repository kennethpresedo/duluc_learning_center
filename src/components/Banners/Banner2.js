import styles from './Banner2.module.scss'

export default function Banner2(){
    return(
        <>
            <div className={styles.banner2}>
                    <span className={styles.span1}><p className={styles.words1}>Empower students to achieve academic success.</p></span>
                    <span className={styles.span2}><p className={styles.words2}>Instill independence and confidence.</p></span>
            </div>
        </>
    )
}