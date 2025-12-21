import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { useMediaQuery } from '../../../utils/useMediaQuery'
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
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1024px)')

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
            spaceBetween={40}
            slidesPerView="auto"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            breakpoints={{
              320: {
                slidesPerView: 'auto',
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 'auto',
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 'auto',
                spaceBetween: 35,
              },
              1400: {
                slidesPerView: 'auto',
                spaceBetween: 40,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
          >
            {clientLogos.map((client, index) => {
              // Determine sizes based on screen size (mobile takes priority)
              let logoHeight = '120px'
              let logoMaxWidth = '250px'
              let slideMinWidth = '250px'
              
              if (isMobile) {
                logoHeight = '80px'
                logoMaxWidth = '180px'
                slideMinWidth = '180px'
              } else if (isTablet) {
                logoHeight = '100px'
                logoMaxWidth = '220px'
                slideMinWidth = '220px'
              }

              return (
                <SwiperSlide
                  key={client.name}
                  style={{
                    width: 'auto',
                    minWidth: slideMinWidth,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <LogoSlide>
                    <LogoImage
                      src={client.image}
                      alt={client.alt}
                      loading="lazy"
                      $delay={index * 0.1}
                      $isVisible={isVisible}
                      style={{
                        height: logoHeight,
                        minHeight: logoHeight,
                        width: 'auto',
                        maxWidth: logoMaxWidth,
                        objectFit: 'contain',
                      }}
                    />
                    {client.name === 'Força' && (
                      <ForcaSubtext>BY SAMSA DIGITAL</ForcaSubtext>
                    )}
                  </LogoSlide>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </LogosWrapper>
      </ContentWrapper>
    </IntroductionSection>
  )
}

