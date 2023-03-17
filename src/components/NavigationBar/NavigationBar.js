import styles from './NavigationBar.module.scss'

export default function NavigationBar() {
    return (
        <>
            <div className={styles.nav}>

                <span className={styles.logo}>
                    <a href="/">
                        <img className={styles.img} src='https://i.imgur.com/o5bualq.png' alt='' />
                    </a>
                </span>

                <span className={styles.tabs}>
                    <a className={styles.link} href="/">Home</a> &nbsp;
                    <a className={styles.link} href="/about">About Us</a> &nbsp;
                    <a className={styles.link} href="/services">Our Services</a>&nbsp;
                    <a className={styles.link} href="/contact">Contact Us</a>
                  
                </span>


            </div>
        </>
    )
}