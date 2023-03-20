import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>

                <span className={styles.DLClogo}>
                    <a href="/">
                        <img className={styles.DLCimg} src='https://i.imgur.com/o5bualq.png' alt='' />
                    </a>
                </span>
                
                <span className={styles.instagram}>
                    <a href="https://instagram.com/duluclearning?igshid=MGU3ZTQzNzY="  target="_blank" rel="noopener noreferrer">
                        <img className={styles.igLogo} src='https://i.imgur.com/9PHqwqm.png' alt='' />
                    </a>
                </span>

                <span className={styles.facebook}>
                    <a href="https://www.facebook.com/duluclearningcenter/"  target="_blank" rel="noopener noreferrer">
                        <img className={styles.fbLogo} src='https://i.imgur.com/m3LRyAy.png' alt='' />
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