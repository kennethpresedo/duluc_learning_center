import { useState } from "react"
import Homework from './Homework'
import Test from './Test'
import styles from './Tips.module.scss'

export default function Tips() {
    const [blankBanner, showHomework] = useState(true);
    const [blankBannerB, showTest] = useState(false);

    const handleClickHomework = e => {
        showHomework(currentHomework => !currentHomework)
        showTest(false)
    }
    const handleClickTest = e => {
        showTest(currentTest => !currentTest)
        showHomework(false)

    }
    return (
        <>
            <div className={styles.tips}>

                <span className={styles.homeworkSpan}>
                    <button className={styles.homeworkButton} onClick={handleClickHomework}>Click for Homework Tips</button><br />
                    {blankBanner && <Homework />}
                </span>

                <span className={styles.testSpan}>
                    <button className={styles.testButton} onClick={handleClickTest}>Click for Test Tips</button><br />
                    {blankBannerB && <Test />}
                </span>

            </div>

        </>
    )
}