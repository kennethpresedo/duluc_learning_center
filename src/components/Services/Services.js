import styles from './Services.module.scss'

export default function Services() {
    return (
        <>
            <div className={styles.services}>

                <span className={styles.smallGroup}><img className={styles.smallGroupPic} src="https://i.imgur.com/zK5xFBv.jpg" alt=""/>Small Group Tutoring</span>
                <span className={styles.oneOnOne}><img className={styles.oneOnOnePic} src="https://i.imgur.com/7JZQaTJ.jpg" alt=""/>1:1 Tutoring </span>
                <span className={styles.homeworkClub}><img className={styles.homeworkClubPic} src="https://i.imgur.com/C334W7Q.jpg" alt=""/>Homework Club</span>
            </div>
       </>
    )
}