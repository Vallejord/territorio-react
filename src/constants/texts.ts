export const texts = {
  es: {
    introduction: {
      mission: 'Convertimos IDEAS en historias visuales cautivadoras, creando contenido a medida que captura la ESCENCIA de cada CLIENTE y conecta con tu AUDIENCIA.',
    },
    workShowcase: {
      categories: 'PUBLICIDAD // REDES // TV // VIDEOCLIPS // DOCUMENTALES',
    },
    currentProjects: {
      title: 'Proyectos en curso',
      polo: {
        title: 'POLO',
        subtitle: 'Polo Cortometraje - Pre producción',
      },
      territorio: {
        title: 'Territorio',
        subtitle: 'Documental - Post producción',
      },
    },
  },
  en: {
    introduction: {
      mission: 'We convert IDEAS into captivating visual stories, creating custom content that captures the ESSENCE of each CLIENT and connects with your AUDIENCE.',
    },
    workShowcase: {
      categories: 'ADVERTISING // SOCIAL MEDIA // TV // VIDEOCLIPS // DOCUMENTARIES',
    },
    currentProjects: {
      title: 'Projects in Progress',
      polo: {
        title: 'POLO',
        subtitle: 'Polo Short Film - Pre-production',
      },
      territorio: {
        title: 'Territorio',
        subtitle: 'Documentary - Post-production',
      },
    },
  },
} as const

export type Language = 'es' | 'en'

