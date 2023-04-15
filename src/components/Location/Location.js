import styles from './Location.module.scss'

export default function Location(){
    return(
        <>
        
        <div className={styles.location}>

            <span className={styles.service}>Areas We Service</span>
            <span className={styles.towns}>Pembroke Pines &nbsp;&nbsp; Hollywood &nbsp;&nbsp; Davie &nbsp;&nbsp; Miramar &nbsp;&nbsp; Plantation &nbsp;&nbsp; Cooper City</span>

        </div>
        
        </>
    )
}