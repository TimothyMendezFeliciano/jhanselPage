import Image from "next/image"
import simg1 from '/public/images/slider/shape-1.png'
import simg2 from '/public/images/slider/shape-2.png'
import VideoModal from "@/components/VideoModal";
import React from "react";
import HeroImages from "@/pages/api/HeroImages";
import ImageGallery from 'react-image-gallery'

const Hero = () => {
    const scrollIntoFeatures = () => {
        const options: ScrollIntoViewOptions = {
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
        }
        document.getElementById('features').scrollIntoView(options)
    }
    return (
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div data-swiper-parallax="300" className="slide-title text-orange-500">
                            <h2>Ready to Close Every Real Estate Deal You Have?</h2>
                        </div>
                        <div data-swiper-parallax="400" className="slide-text">
                            <p>Meet you new heroes at The Closing Company.</p>
                        </div>
                        <div className="clearfix"></div>
                        <div data-swiper-parallax="500" className="slide-btns">
                            <div onClick={scrollIntoFeatures} className="theme-btn hover:cursor-pointer">Explore more</div>
                            <VideoModal/>
                        </div>
                        <div className="lawyer-pic">
                            <ImageGallery items={HeroImages} autoPlay={true}
                                          showNav={false} showThumbnails={false}
                                          showFullscreenButton={false} showPlayButton={false} showBullets={false}
                            />
                            <div className="lawyer-shape">
                                <div className="shape-1"><Image src={simg1} alt=""/></div>
                                <div className="shape-2"><Image src={simg2} alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero