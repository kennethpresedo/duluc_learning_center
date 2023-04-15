import { useState } from "react"
import Homework from './Homework'
import Test from './Test'
import styles from './Tips.module.scss'

export default function Tips() {
    const [blankBanner, showHomework] = useState(false); 
    const [blankBannerB, showTest] = useState(false);

    const handleClickHomework = e => {
        showHomework(currentHomework => !currentHomework)
     
    }
    const handleClickTest = e => {
        showTest(currentTest => !currentTest)
        

    }
    return (
        <>
            <div className={styles.tips}>

                <span className={styles.homeworkSpan}>
                    <button className={styles.homeworkButton} onClick={handleClickHomework}>Homework Tips</button><br />
                    {blankBanner && <Homework />}
                </span>

                <span className={styles.testSpan}>
                    <button className={styles.testButton} onClick={handleClickTest}>Test Tips</button><br />
                    {blankBannerB && <Test />}
                </span>

            </div>

        </>
    )
}