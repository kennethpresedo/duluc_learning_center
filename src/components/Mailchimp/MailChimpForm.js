import React from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import styles from './Mailchimp.module.scss'

export default function MailChimpForm() {
    const url = "https://outlook.us21.list-manage.com/subscribe/post?u=373803efbbb6415b94bc93f13&amp;id=db67847253&amp;f_id=00e0a8e1f0";
    const { loading, error, success, message, handleSubmit } = useMailChimpForm(
        url
    );
    const { fields, handleFieldChange } = useFormFields({
        EMAIL: ""
    });
    return (
        <>
            <span className={styles.words}>Never miss an update
                <span className={styles.words2}>Signup for our newsletter</span>
            </span>
            <div className={styles.div}>
                <form className={styles.form}
                    onSubmit={event => {
                        event.preventDefault();
                        handleSubmit(fields);
                    }}
                >
                    <input className={styles.input}
                        placeholder= 'Email'
                        id="EMAIL"
                        autoFocus
                        type="email"
                        value={fields.EMAIL}
                        onChange={handleFieldChange}
                    />
                    <button className={styles.button}>Signup</button>
                </form>
                {loading && "submitting"}
                {error && message}
                {success && message}
            </div>
        </>
    );
}
