import styles from './Tutoring.module.scss'

export default function Tutoring() {
    return (
        <>
            <div className={styles.tutoring}>
                <span className={styles.span2}>Tutoring<p className={styles.words1}>We will strengthen your child’s academic abilities in reading, math and writing through our personalized instruction approach. We use hands on, research-based strategies to help your child grasp those tough concepts and ensure learning gains. We will strengthen your child’s academic abilities in reading, math and writing. Tutoring can be 1:1 or in a small group (maximum 3 students per group)</p></span>
                <span className={styles.span1}>Homework Club<p className={styles.words2}>Our drop in homework club runs Monday- Thursday, 90 minutes a session. Students can drop in on the days they need to work on their homework or can choose to attend all days. We provide a distraction free environment for students to complete their homework and their technology requirements (I ready, Lexia, etc) with support from our knowledgeable aides. We offer explanation of concepts if the child is struggling to complete their assignments.</p></span>
            </div>
        </>
    )
}