import Bar from '../Bar/Bar'
import Madelaine from '../Madelaine/Madelaine'
import styles from './Founder.module.scss'

export default function Founder() {

    return (
        <>
        <Bar />
                <div className={styles.founder}>
                    <Madelaine />
                    <span className={styles.word}>A word from our founder.</span>
                    <div className={styles.bioContainer}>
                    <span className={styles.bio}>Hello my name is Madelaine Duluc and welcome! Here at Duluc Learning Center we passionate about teaching! A little but about me: I have been teaching for 8 years and working with children for over 15 years. I graduated with a  masters degree in special education with an autism endorsement in 2018 from Florida International University and bachelor’s in education from Florida International University. I love working with kids of all ages and helping them succeed academically. I love tutoring because it gives me the opportunity to focus on closing a child’s academic gaps in a small group setting and seeing their results.</span>
                    </div>
                </div>
        </>
    )
}
