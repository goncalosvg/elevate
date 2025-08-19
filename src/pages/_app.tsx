import type { AppProps } from 'next/app'

import '@styles/@root/containers.scss'
import '@styles/carousel.scss'
import '@styles/globals.scss'
import '@styles/normalize.css'

import '@styles/@pages/index.scss'

import '@queries/1024px.scss'
import '@queries/1440px.scss'
import '@queries/320px.scss'
import '@queries/768px.scss'
import SmoothScroll from '~/components/SmoothScroll'

import 'swiper/css'
import 'swiper/css/pagination'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothScroll>
      <Component {...pageProps} />
    </SmoothScroll>
  )
}
