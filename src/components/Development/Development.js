import styles from './Development.module.scss'

export default function Development() {
    return (
        <>
            <a className={styles.link} href="/services">
                <div className={styles.development}>

                    <p className={styles.header}>Why Duluc Learning?</p>
                        <p className={styles.click}>Our tutors are all certified teachers with a vast knowledge of the curriculum and how to scaffold concepts to help your child understand. Our tutors have the knowledge and experience to work with all kinds of students including but not limited to those with special needs.
    We work with parents and children to create an academic plan that is best for each child.
    We track students progress consistently and make changes when needed in order for each to succeed.
                    </p>

                </div>
            </a>
        </>
    )
}
