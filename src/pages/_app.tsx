import '@/styles/globals.css'
import "react-toastify/dist/ReactToastify.css"
import "react-toastify/dist/ReactToastify.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/animate.css"
import "../styles/flaticon.css"
import '../styles/font-awesome.min.css'
import '../styles/themify-icons.css'
import '../styles/sass/style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-image-gallery/styles/scss/image-gallery.scss'

import type { AppProps } from 'next/app'
import Head from "next/head";
import {ToastContainer} from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>The Closing Company</title>
      <meta name="description" content="The Closing Company" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    <ToastContainer />
  </>)
}
