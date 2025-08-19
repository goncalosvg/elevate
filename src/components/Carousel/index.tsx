// EmblaCarousel.tsx
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import React, { ReactNode } from 'react'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './CarouselArrowButtons'

type PropType = {
  children: ReactNode
  options?: EmblaOptionsType
  arrowPosition?: 'top' | 'bottom'
  arrows?: boolean
}

const Carousel: React.FC<PropType> = ({
  children,
  options,
  arrows = true,
  arrowPosition = 'bottom',
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      {arrows && arrowPosition === 'top' && (
        <div className="w-full flex h-end">
          <div
            className="embla__controls"
            style={{
              marginTop: -50,
              marginBottom: 30,
              gridTemplateColumns: '0fr',
            }}
          >
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      )}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {React.Children.map(children, (child, index) => (
            <div className="embla__slide" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      {arrows && arrowPosition === 'bottom' && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Carousel
