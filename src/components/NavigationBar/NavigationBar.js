import styles from './NavigationBar.module.scss'

export default function NavigationBar() {
    return(
        <>
            <div className={styles.nav}>

                <span className={styles.logo}>
                    <img className={styles.img} src='https://i.imgur.com/o5bualq.png' alt=''/>
                </span>

                <span className={styles.tabs}>
                <a className={styles.link} href="/">Home</a> &nbsp;
                <a className={styles.link} href="/about">About</a> &nbsp;
                <a className={styles.link} href="/contact">Contact</a>
                </span>


            </div>
        </>
    )
}