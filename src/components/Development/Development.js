import styles from './Development.module.scss'

export default function Development() {
    return (
        <>
            <a className={styles.link} href="/services">
                <div className={styles.development}>

                    <p className={styles.header}>Why Duluc Learning?</p>
                    <p className={styles.click}>
                        <ul className={styles.ul1}>Our tutors are all certified teachers with a vast knowledge of the curriculum and how to scaffold concepts to help your child understand.</ul>
                        <ul className={styles.ul2}>Our tutors have the knowledge and experience to work with all kinds of students including but not limited to those with special needs.</ul>
                        <ul className={styles.ul3}>We work with parents and children to create an academic plan that is best for each child.</ul>
                        <ul className={styles.ul4}>We track students progress consistently and make changes when needed in order for each to succeed.</ul>
                    </p>

                </div>
            </a>
        </>
    )
}
