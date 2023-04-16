import styles from './Contact.module.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Bar from '../../components/Bar/Bar';
import Footer from '../../components/Footer/Footer';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_slkal3d', 'template_1ze2845', form.current, '1EwcOAmY1ptL_d_LQ')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <>
            <NavigationBar />
            <Bar />
            <div className={styles.contact}>
                <div className={styles.formContainer}>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea className={styles.message} name="message" />
                        <input className={styles.submit} type="submit" value="Send" />
                    </form>
                </div>

                <div className={styles.contactWays}>
                    <div className={styles.emailDiv}>
                        < EmailIcon className={styles.emailIcon} />
                        <span className={styles.emailHeader}> Email Me! </span>
                        <a className={styles.email} href="mailto:duluclearning@outlook.com">duluclearning@outlook.com</a>
                    </div>

                    <div className={styles.phoneDiv}>
                        < LocalPhoneIcon className={styles.phoneIcon}></LocalPhoneIcon>
                        <span className={styles.phoneHeader}> Give Me a Ring!</span>
                        <span className={styles.phoneNumber}>(954)699-7625</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

