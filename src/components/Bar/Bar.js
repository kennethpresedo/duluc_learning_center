import styles from './Bar.module.scss'

export default function Bar(){
    return(
        <>
        <div className={styles.bar}>
            <span className={styles.column1}></span>
            <span className={styles.column2}></span>
            <span className={styles.column3}></span>
            <span className={styles.column4}></span>
            <span className={styles.column5}></span>
            <span className={styles.column6}></span>
        </div>
        </>
    )
}