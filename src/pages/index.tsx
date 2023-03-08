import React, {Fragment} from 'react'
import Navbar from "@/components/Navbar";
import Logo from '../../public/images/logo.png'
import Hero from "@/components/hero";
import Features from "@/components/Features";
import PracticeArea from "@/components/PracticeArea";

export default function Home() {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <Hero/>
            <Features/>
            <PracticeArea/>
        </Fragment>
    )
}
