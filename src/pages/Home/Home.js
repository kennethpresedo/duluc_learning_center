import styles from './Home.module.scss'
import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Intro from '../../components/Intro/Intro'
import Carousel, { CarouselItem } from '../../components/Carousel/Carousel'
import Photo1 from '../../components/KidPhotos/Photo1'
import Photo2 from '../../components/KidPhotos/Photo2'
import Photo3 from '../../components/KidPhotos/Photo3'
import Photo4 from '../../components/KidPhotos/Photo4'

export default function Home() {
    return(
        <>
        <NavigationBar />
        <Intro />
        <div className={styles.carousel}>
                <Carousel>
                    <CarouselItem><Photo1 /></CarouselItem>
                    <CarouselItem><Photo2 /></CarouselItem>
                    <CarouselItem><Photo3 /></CarouselItem>
                    <CarouselItem><Photo4 /></CarouselItem>
                </Carousel>
            </div>
        <div className={styles.home}>
            <h1>Home Page!</h1>
        </div>
        </>
    )
}
