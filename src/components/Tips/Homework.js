import styles from './Test.module.scss'

export default function Homework(){
    return(
        <span className={styles.list}>
        <ul className={styles.tip1}>Have students eat a small snack before starting.</ul>
        <ul className={styles.tip2}>Schedule a regular study time.</ul>
        <ul className={styles.tip3}>Have your child do their homework independently. When they are done then you can review or help if needed.</ul>
        <ul className={styles.tip4}>Make sure your child has all the materials and tools needed.</ul>
        <ul className={styles.tip5}>Keep distractions to a minimum.</ul>
        <ul className={styles.tip6}>Set up a quiet homework-friendly area.</ul>
    </span>
    )
}