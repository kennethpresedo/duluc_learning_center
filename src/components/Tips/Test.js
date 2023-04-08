import styles from './Test.module.scss'

export default function Test(){
    return(
        <span className={styles.list}>
            <ul className={styles.tip1}>Respond to any concerns your child has with encouragement and support.</ul>
            <ul className={styles.tip2}>Ask the teacher for the testing schedule and a practice test so that you can familarize your child with the format ahead of time.</ul>
            <ul className={styles.tip3}>Consult with your child's teacher to find out if there are specific skills you can practice at home.</ul>
            <ul className={styles.tip4}>Make sure your child eats a well-balanced meal.</ul>
            <ul className={styles.tip5}>Make sure your child gets good rest the night before the test.</ul>
        </span>
    )
}