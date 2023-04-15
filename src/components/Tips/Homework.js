import styles from './Test.module.scss'

export default function Homework(){
    return(
        <span className={styles.list}>
        <span className={styles.tip1}>Have students eat a small snack before starting.</span>
        <span className={styles.tip2}>Schedule a regular study time.</span>
        <span className={styles.tip3}>Have your child do their homework independently. When they are done then you can review or help if needed.</span>
        <span className={styles.tip4}>Make sure your child has all the materials and tools needed.</span>
        <span className={styles.tip5}>Keep distractions to a minimum.</span>
        <span className={styles.tip6}>Set up a quiet homework-friendly area.</span>
    </span>
    )
}