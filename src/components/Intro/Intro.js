import styles from './Intro.module.scss'

export default function Intro(){
    return(
        <>
            <div className={styles.intro}>
                <p className={styles.missionStatement}>
                    <p className={styles.mission}>Welcome to Duluc Learning Center</p><br />Our mission is to provide high quality, individualized tutoring that supports student learning and empowers students to achieve academic success, independence and confidence.
                </p>
            </div>
        </>
    )
}