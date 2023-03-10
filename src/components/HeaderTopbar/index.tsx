import Link from "next/link";

const HeaderTopbar = () => {

    const options: ScrollIntoViewOptions = {
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    }

    const scrollToContactForm = () => {
        document.getElementById('contact-form').scrollIntoView(options)
    }

    const scrollToExpertise = () => {
        document.getElementById('expertise').scrollIntoView(options)
    }

    return (
        <div className={'topbar'}>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col col-md-5 col-sm-12 col-12'}>
                        <div className={'contact-info'}>
                            <ul>
                                <li>
                                    <div className={'hover:cursor-pointer'} onClick={scrollToContactForm}>Contact Us
                                    </div>
                                </li>
                                <li>
                                    <div className={'hover:cursor-pointer'} onClick={scrollToExpertise}>Our Expertise
                                    </div>
                                </li>
                                <li><a target={"_blank"}
                                       href={'https://www.facebook.com/profile.php?id=100088853995294&sk=about_details'}><i
                                    className={'ti-facebook'}></i></a></li>
                                <li><a target={"_blank"} href={'https://www.instagram.com/the_closing_company/'}><i
                                    className={'ti-instagram'}></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={'col col-md-7 col-sm-12 col-12'}>
                        <div className={'contact-intro'}>
                            <ul>
                                <li><Link
                                    className={'hover:cursor-pointer text-inherit'}
                                    href={'https://www.google.com/maps/place/1064+Av.+Juan+Ponce+de+Le%C3%B3n,+San+Juan,+00907/@18.4521508,-66.0790408,17z/data=!3m1!4b1!4m5!3m4!1s0x8c036f3128a1b4ab:0xad2638b105ce2dce!8m2!3d18.4521457!4d-66.0768521'}><i
                                    className={'fi ti-location-pin'}>1064 Ave. Ponce de Leon, San Juan PR
                                    00907</i></Link>
                                </li>
                                <li><i className={'fi flaticon-email'}>legaldesk@theclosingcompany.legal/</i></li>
                                {/*<li><i className={'fi flaticon-email'}>jnunez@theclosingcomapany.com</i></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar
