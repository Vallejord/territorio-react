import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import {
  IntroductionSection,
  ContentWrapper,
  MissionText,
  EmphasizedText,
  LogosWrapper,
  LogoSlide,
  LogoImage,
  ForcaSubtext,
} from './Introduction.styles'
import { texts } from '../../../constants/texts'
import { clientLogos } from '../../../constants/clients'
import { useLanguage } from '../../../contexts/LanguageContext'
import 'swiper/css'

export const Introduction = () => {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const missionText = texts[language].introduction.mission

  // Dividir el texto y encontrar palabras enfatizadas
  const renderMissionText = () => {
    const words = missionText.split(' ')
    const emphasizedWords = ['IDEAS', 'ESCENCIA', 'CLIENTE', 'AUDIENCIA']
    const emphasizedWordsEn = ['IDEAS', 'ESSENCE', 'CLIENT', 'AUDIENCE']

    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, '')
      const isEmphasized =
        emphasizedWords.includes(cleanWord) ||
        emphasizedWordsEn.includes(cleanWord)

      return (
        <span key={index}>
          {isEmphasized ? (
            <EmphasizedText>{word}</EmphasizedText>
          ) : (
            word
          )}
          {index < words.length - 1 && ' '}
        </span>
      )
    })
  }

  return (
    <IntroductionSection
      ref={sectionRef}
      id="introduction"
      $isVisible={isVisible}
    >
      <ContentWrapper>
        <MissionText $isVisible={isVisible}>{renderMissionText()}</MissionText>

        <LogosWrapper>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView="auto"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
          >
            {clientLogos.map((client, index) => (
              <SwiperSlide key={client.name}>
                <LogoSlide>
                  <LogoImage
                    src={client.image}
                    alt={client.alt}
                    loading="lazy"
                    $delay={index * 0.1}
                    $isVisible={isVisible}
                  />
                  {client.name === 'Força' && (
                    <ForcaSubtext>BY SAMSA DIGITAL</ForcaSubtext>
                  )}
                </LogoSlide>
              </SwiperSlide>
            ))}
          </Swiper>
        </LogosWrapper>
      </ContentWrapper>
    </IntroductionSection>
  )
}

