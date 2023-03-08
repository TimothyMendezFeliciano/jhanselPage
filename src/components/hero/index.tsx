import Link from "next/link";
import Image from "next/image"
import himg from '/public/images/slider/1.png'
import tccBanner from '/public/images/logo.png'
import jhanselGlasses from '/public/images/jhanselOne.jpg'

import simg1 from '/public/images/slider/shape-1.png'
import simg2 from '/public/images/slider/shape-2.png'
import VideoModal from "@/components/VideoModal";

const Hero =() => {
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
                            <Link href="/about" className="theme-btn">Explore more</Link>
                            <VideoModal/>
                        </div>
                        <div className="lawyer-pic">
                            <Image src={jhanselGlasses} height={360} width={360} className={'mr-32 mb-16'} alt="Jhansel Smiling"/>
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