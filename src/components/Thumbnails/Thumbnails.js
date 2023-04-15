import Photo1 from '../KidPhotos/Photo1'
import Photo4 from '../KidPhotos/Photo4'
import Photo5 from '../KidPhotos/Photo5'
import Photo6 from '../KidPhotos/Photo6'
import Photo9 from '../KidPhotos/Photo9'
import Photo12 from '../KidPhotos/Photo12'
import styles from './Thumbnails.module.scss'


export default function Thumbnails(){
    return(
        <>
            <div className={styles.thumbnails}>
                <span className={styles.item1}><Photo1 /></span>
                <span className={styles.item2}><Photo4 /></span>
                <span className={styles.item3}><Photo6 /></span>
                <span className={styles.item4}><Photo9 /></span>
                <span className={styles.item5}><Photo12 /></span>
                <span className={styles.item6}><Photo5 /></span>
            </div>
        </>
    )
}