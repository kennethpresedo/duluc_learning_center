import Bar from '../Bar/Bar'
import Madelaine from '../Madelaine/Madelaine'
import styles from './Founder.module.scss'

export default function Founder() {

    return (
        <>
            <Bar />
            <div className={styles.founder}>
                <Madelaine />
                <span className={styles.word}>A word from our founder</span>
                <div className={styles.bioContainer}>
                    <span className={styles.bio}>Hello my name is Madelaine Duluc and welcome! Here at Duluc Learning Center we are passionate about teaching! A little but about me: I have been teaching for 8 years and working with children for over 15. In 2018, I received my masters degree in special education with an autism endorsement from Florida International University, having previously received a bachelor’s in education from the same university. I love working with children of all ages and helping them succeed academically, and tutoring gives me the opportunity to focus on closing a child’s academic gaps in a small group setting and seeing their results.</span>
                </div>
            </div>
            <Bar />
        </>
    )
}
