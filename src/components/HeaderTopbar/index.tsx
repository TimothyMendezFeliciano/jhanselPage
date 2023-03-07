import Link from "next/link";

const HeaderTopbar = () => {
    return (
        <div className={'topbar'}>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col col-md-5 col-sm-12 col-12'}>
                        <div className={'contact-info'}>
                            <ul>
                                {/*TODO: Scroll to About section*/}
                                <li><Link href={'/#'}>About Us</Link></li>
                                <li><Link href={'/#'}>FAQ</Link></li>
                                <li><a target={"_blank"} href={'https://www.facebook.com/profile.php?id=100088853995294&sk=about_details'}><i className={'ti-facebook'}></i></a></li>
                                <li><a target={"_blank"} href={'https://www.instagram.com/the_closing_company/'}><i className={'ti-instagram'}></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={'col col-md-7 col-sm-12 col-12'}>
                        <div className={'contact-intro'}>
                            <ul>
                                <li><i className={'fi ti-location-pin'}>1064 Ave. Ponce de Leon, San Juan PR 00907</i></li>
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