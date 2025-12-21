# Diseño Completo - Territorio

## Análisis de Secciones y Funcionalidades

---

## 1. HEADER (Ya implementado parcialmente)

### Elementos Visuales:
- Logo "TERRITORIO" (blanco, mayúsculas)
- Links sociales: Instagram, LinkedIn (iconos)
- Toggle de idioma: ES / ENG
- Menú hamburguesa

### Funcionalidades:
- ✅ Logo con link a home
- ✅ Links sociales (Instagram, LinkedIn)
- ✅ Toggle de idioma (ES/ENG)
- ✅ Botón hamburguesa
- ❌ Menú desplegable del hamburguesa (pendiente)
- ❌ Navegación entre secciones (pendiente)
- ❌ Cambio de idioma funcional (pendiente - solo UI)

### Comportamiento:
- Fixed position (top)
- Fondo con gradiente transparente
- Responsive: oculta sociales e idioma en mobile (<768px)

---

## 2. HERO SECTION (Ya implementado parcialmente)

### Elementos Visuales:
- **Imagen de fondo:** Foto de personas celebrando (tonos cálidos)
- **Texto principal:** 
  - "Luz," (blanco) "Cámara, Emoción." (rojo)
  - Párrafo descriptivo: "Estamos convencidos en el espíritu de las imágenes, en las emociones y el corazón detrás de cada plano."

### Funcionalidades:
- ✅ Video de fondo (implementado)
- ❌ Texto overlay con título y descripción
- ❌ Animaciones de entrada del texto
- ❌ Responsive: imagen diferente en mobile

### Comportamiento:
- Full viewport height (100vh)
- Video autoplay, loop, muted
- Overlay con gradiente

---

## 3. INTRODUCCIÓN / MISIÓN

### Elementos Visuales:
- **Texto destacado:** "Convertimos IDEAS en historias visuales cautivadoras, creando contenido a medida que captura la ESCENCIA de cada CLIENTE y conecta con tu AUDIENCIA."
- **Logos de clientes:** Adobe, BID, Colgate, flybondi, Força (BY SAMSA DIGITAL), Sanofi, ICRC

### Funcionalidades:
- ❌ Sección completa nueva
- ❌ Grid de logos de clientes
- ❌ Animación de aparición al hacer scroll
- ❌ Responsive: logos se adaptan

### Comportamiento:
- Fondo negro sólido
- Texto blanco con palabras destacadas
- Logos en fila horizontal (scroll horizontal en mobile?)

---

## 4. TRABAJO / SHOWCASE

### Elementos Visuales:
- **Barra de título:** "PUBLICIDAD // REDES // TV // VIDEOCLIPS // DOCUMENTALES"
- **Grid de thumbnails:** 12 proyectos (4 filas x 3 columnas)

### Thumbnails identificados:
1. Mujer en aula vacía con luz natural
2. Vista aérea de ciudad con montañas
3. Pickup blanco en camino de tierra
4. Bus verde en camino serpenteante
5. Manos entrelazadas (B&W)
6. Persona con uniforme de fútbol americano (#15)
7. Primer plano de ojo humano
8. Estatua en jardín (JARDIN SON ORO - Natura/Naturgy)
9. Pareja mayor abrazándose (#VIVOENAMORADO)
10. Hombre hablando (logo "6" y "Id")
11. Fondo amarillo con texto flybondi
12. Hombre sonriendo (VOLARE OH OH OH)
13. Hombre en traje en desierto
14. Icono de laptop en fondo azul

### Funcionalidades:
- ❌ Sección completa nueva
- ❌ Grid responsive de proyectos
- ❌ Hover effects en thumbnails
- ❌ Click para abrir modal/lightbox con video/imagen completa
- ❌ Filtros por categoría (PUBLICIDAD, REDES, TV, etc.)
- ❌ Lazy loading de imágenes
- ❌ Animación de aparición al hacer scroll

### Comportamiento:
- Grid adaptativo (3 columnas desktop, 2 tablet, 1 mobile)
- Barra de título fija o sticky al hacer scroll
- Transiciones suaves

---

## 5. PROYECTOS EN CURSO

### Elementos Visuales:
- **Título:** "Proyectos en curso"
- **Card 1 - POLO:**
  - Imagen: Niño sin camisa, expresión seria
  - Texto: "POLO" (grande), "Polo" (pequeño), "Cortometraje - Pre producción"
- **Card 2 - TERRITORIO:**
  - Imagen: Persona con sombrero tamizando tierra/arena
  - Texto: "Territorio" (grande), "Documental - Post producción"

### Funcionalidades:
- ❌ Sección completa nueva
- ❌ Cards horizontales con imagen y texto
- ❌ Indicador de estado (Pre producción, Post producción)
- ❌ Click para ver más detalles del proyecto
- ❌ Animación de aparición

### Comportamiento:
- Cards en fila (2 columnas desktop, 1 mobile)
- Imagen a la izquierda, texto a la derecha (o viceversa)
- Fondo oscuro

---

## 6. EQUIPO / NOS.

### Elementos Visuales:
- **Título:** "Nos."
- **3 perfiles:**
  1. **Leandro Caterberg:** Director y editor
  2. **Joan Pesquera:** Director creativo y editor
  3. **Andrea Madruga:** Productora y realizadora

### Funcionalidades:
- ❌ Sección completa nueva
- ❌ Grid de perfiles del equipo
- ❌ Fotos en B&W
- ❌ Hover effects (mostrar más info?)
- ❌ Animación de aparición

### Comportamiento:
- Grid de 3 columnas (desktop), 1 columna (mobile)
- Fotos circulares o rectangulares
- Nombre y título debajo de cada foto

---

## 7. CONTACTO

### Elementos Visuales:
- **Pregunta:** "¿Querés contactarnos por un proyecto, una colaboración o simplemente para saludarnos?"
- **Emails:** 
  - hola@territorio.com.ar
  - leandrocaterberg@territorio.com.ar
- **Formulario:**
  - Campo NOMBRE
  - Campo MAIL
  - Campo MENSAJE (más grande)
- **Iconos sociales:** Instagram, LinkedIn, WhatsApp (grandes, cuadrados)
- **Oficinas:**
  - **Buenos Aires:** Zaballa 3584, dto 8. CP1426 | +54 9 11 50501840
  - **Mendoza:** Guardia Vieja 1310, CP1426 | +54 9 261 6335309

### Funcionalidades:
- ❌ Sección completa nueva
- ❌ Formulario de contacto funcional
- ❌ Validación de campos
- ❌ Envío de email (backend/integration)
- ❌ Links clickeables de emails y teléfonos
- ❌ Links a redes sociales
- ❌ Mapa de ubicaciones (opcional)
- ❌ Animación de aparición

### Comportamiento:
- Formulario con bordes blancos
- Campos con labels
- Botón de envío
- Responsive: formulario y oficinas se apilan en mobile

---

## 8. FOOTER

### Elementos Visuales:
- **Crédito:** "DESARROLLO WEB El Ezequiel Vallejos TM" (esquina inferior derecha)

### Funcionalidades:
- ❌ Footer nuevo
- ❌ Crédito de desarrollo

### Comportamiento:
- Fondo negro
- Texto pequeño, blanco
- Posición fija o al final del contenido

---

## FUNCIONALIDADES GLOBALES

### Navegación:
- ❌ Scroll suave entre secciones
- ❌ Menú de navegación (desktop y mobile)
- ❌ Links en header que llevan a cada sección
- ❌ Indicador de sección activa al hacer scroll

### Internacionalización (i18n):
- ❌ Sistema de traducción ES/ENG
- ❌ Contenido traducible en todas las secciones
- ❌ Persistencia del idioma seleccionado

### Animaciones:
- ❌ Scroll animations (fade in, slide up)
- ❌ Hover effects en elementos interactivos
- ❌ Transiciones suaves
- ❌ Loading states

### Performance:
- ❌ Lazy loading de imágenes/videos
- ❌ Optimización de assets
- ❌ Code splitting por sección

### Responsive:
- ❌ Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
- ❌ Adaptación de layouts en cada sección
- ❌ Menú mobile funcional

---

## RESUMEN DE COMPONENTES A CREAR

### Componentes Nuevos:
1. **Introduction** - Sección de misión con logos
2. **WorkShowcase** - Grid de proyectos con filtros
3. **ProjectCard** - Card individual de proyecto (reutilizable)
4. **CurrentProjects** - Sección de proyectos en curso
5. **ProjectStatusCard** - Card de proyecto en curso (reutilizable)
6. **Team** - Sección del equipo
7. **TeamMember** - Card de miembro del equipo (reutilizable)
8. **Contact** - Sección de contacto con formulario
9. **ContactForm** - Formulario de contacto
10. **ContactInfo** - Información de contacto (emails, oficinas)
11. **Footer** - Footer con créditos
12. **Navigation** - Menú de navegación (desktop/mobile)
13. **MobileMenu** - Menú desplegable mobile
14. **LanguageProvider** - Context para i18n
15. **ScrollToSection** - Utilidad para scroll suave

### Componentes a Mejorar:
1. **Header** - Agregar menú de navegación funcional
2. **Hero** - Agregar texto overlay con título y descripción

---

## ESTRUCTURA DE DATOS NECESARIA

### Tipos/Interfaces:
- `Project` - Datos de proyecto del showcase
- `CurrentProject` - Datos de proyecto en curso
- `TeamMember` - Datos de miembro del equipo
- `ContactFormData` - Datos del formulario
- `Language` - Tipo para idiomas ('es' | 'en')
- `Section` - Tipo para secciones de navegación

### Contenido/Datos:
- Lista de proyectos del showcase
- Lista de proyectos en curso
- Lista de miembros del equipo
- Traducciones (ES/EN)
- Información de contacto

