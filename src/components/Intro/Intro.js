import styles from './Intro.module.scss'

export default function Intro(){
    return(
        <>
            <div className={styles.intro}>
                <span className={styles.mission}>Welcome to Duluc Learning Center</span>
                <span className={styles.missionStatement}>Our mission is to provide high quality, individualized tutoring that supports student learning and empowers students to achieve academic success, independence and confidence.</span>
            </div>
        </>
    )
}