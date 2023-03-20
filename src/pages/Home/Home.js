
import React from "react"
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Intro from '../../components/Intro/Intro'
// import Carousel, { CarouselItem } from '../../components/Carousel/Carousel'
// import Photo1 from '../../components/KidPhotos/Photo1'
// import Photo2 from '../../components/KidPhotos/Photo2'
// import Photo3 from '../../components/KidPhotos/Photo3'
// import Photo4 from '../../components/KidPhotos/Photo4'
// import Photo5 from '../../components/KidPhotos/Photo5'
// import Photo6 from '../../components/KidPhotos/Photo6'
// import Photo7 from '../../components/KidPhotos/Photo7'
// import Photo8 from '../../components/KidPhotos/Photo8'
// import Photo9 from '../../components/KidPhotos/Photo9'
// import Photo10 from '../../components/KidPhotos/Photo10'
// import Photo11 from '../../components/KidPhotos/Photo11'
// import Photo12 from '../../components/KidPhotos/Photo12'
// import Photo13 from '../../components/KidPhotos/Photo13'
// import Photo14 from '../../components/KidPhotos/Photo14'
// import Photo15 from '../../components/KidPhotos/Photo15'
// import Photo16 from '../../components/KidPhotos/Photo16'
// import Photo17 from '../../components/KidPhotos/Photo17'
// import Photo18 from '../../components/KidPhotos/Photo18'
import Development from '../../components/Development/Development'
import Services from '../../components/Services/Services'
import Banner1 from '../../components/Banners/Banner1'
import Banner2 from '../../components/Banners/Banner2'
import Thumbnails from '../../components/Thumbnails/Thumbnails'

export default function Home() {
    return (
        <>
            <NavigationBar />
            <Intro />
            <Development />
            <Banner1 />
            <Banner2 />
            <Services />
            <Thumbnails />
            {/* <div className={styles.carousel}>
                <Carousel>
                    <CarouselItem><Photo1 /></CarouselItem>
                    <CarouselItem><Photo2 /></CarouselItem>
                    <CarouselItem><Photo3 /></CarouselItem>
                    <CarouselItem><Photo4 /></CarouselItem>
                    <CarouselItem><Photo5 /></CarouselItem>
                    <CarouselItem><Photo6 /></CarouselItem>
                    <CarouselItem><Photo7 /></CarouselItem>
                    <CarouselItem><Photo8 /></CarouselItem>
                    <CarouselItem><Photo9 /></CarouselItem>
                    <CarouselItem><Photo10 /></CarouselItem>
                    <CarouselItem><Photo11 /></CarouselItem>
                    <CarouselItem><Photo12 /></CarouselItem>
                    <CarouselItem><Photo13 /></CarouselItem>
                    <CarouselItem><Photo14 /></CarouselItem>
                    <CarouselItem><Photo15 /></CarouselItem>
                    <CarouselItem><Photo16 /></CarouselItem>
                    <CarouselItem><Photo17 /></CarouselItem>
                    <CarouselItem><Photo18 /></CarouselItem>
                </Carousel>
            </div> */}
        </>
    )
}
