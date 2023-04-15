import styles from './Development.module.scss'

export default function Development() {
    return (
        <>
            <a className={styles.link} href="/services">
                <div className={styles.development}>

                    <span className={styles.header}>Why Duluc Learning?</span>
                    <span className={styles.click}>
                        <span className={styles.ul1}>Our tutors are all certified teachers with a vast knowledge of the curriculum and how to scaffold concepts to help your child understand. </span>
                        <span className={styles.ul2}>Our tutors have the knowledge and experience to work with all kinds of students including but not limited to those with special needs. </span>
                        <span className={styles.ul3}>We work with parents and children to create an academic plan that is best for each child. </span>
                        <span className={styles.ul4}>We track students progress consistently and make changes when needed in order for each to succeed.</span>
                    </span>

                </div>
            </a>
        </>
    )
}
