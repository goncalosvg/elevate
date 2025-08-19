import { useRouter } from 'next/router'
import { getLenisInstance } from '~/components/SmoothScroll'

const useScrollToSection = () => {
  const router = useRouter()

  const scrollToSection = (id: string) => {
    const lenis = getLenisInstance()

    const navigateAndScroll = () => {
      const element = document.getElementById(id)
      if (element) {
        lenis?.start()
        lenis?.scrollTo(element, {
          duration: 2.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: 3,
        })
      }
    }

    if (router.pathname !== '/') {
      router.push('/').then(() => {
        setTimeout(navigateAndScroll, 300)
      })
    } else {
      navigateAndScroll()
    }
  }

  return scrollToSection
}

export default useScrollToSection
