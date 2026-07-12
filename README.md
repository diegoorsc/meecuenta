# MEE Cuenta · Chivita

Sitio web de **MEE Cuenta** (MEE: Mecatrónica Escucha y Enseña), proyecto escolar de robótica de Santa Teresa de Illapel — World Robot Olympiad 2026, categoría Senior.

Robot: **Chivita**, el primer robot de MEE Cuenta, nacido para representar y dar voz al patrimonio de la provincia del Choapa. Slogan: *"La cabra que te guía por Illapel"*.

---

## Stack

- **[Eleventy (11ty)](https://www.11ty.dev/)** con plantillas Nunjucks. Compila a HTML/CSS estático puro — sin React/Vue ni JS de framework en el resultado final.
- **[Decap CMS](https://decapcms.org/)** (ex Netlify CMS) en `/admin`, para editar todo el contenido (lugares, noticias, textos de la landing y del start-up) desde un panel visual, sin tocar código.
- **Netlify**: hosting, build automático, Netlify Identity (login del CMS) y Netlify Forms (formulario de contacto de la sección start-up).

¿Por qué Eleventy? Es el generador estático más simple que se integra de forma nativa con Decap CMS (una colección de Decap = una carpeta de Markdown, que Eleventy lee directo), no requiere configuración pesada, y compila a HTML plano fácil de alojar y de entender para un estudiante manteniendo el proyecto.

---

## Estructura de carpetas

```
├── .eleventy.js            # Configuración de Eleventy (colecciones, copiado de archivos, filtros)
├── netlify.toml             # Build command y publish directory para Netlify
├── package.json
│
├── admin/
│   ├── index.html            # Carga Decap CMS
│   └── config.yml            # Colecciones editables: Lugares, Noticias, Contenido de páginas
│
├── src/
│   ├── _data/                 # Contenido editable (JSON) — sitio, landing, pasos, tecnologías, start-up
│   ├── _includes/
│   │   ├── layouts/            # base.njk (shell HTML), noticia.njk (layout de cada noticia)
│   │   └── partials/           # header.njk, footer.njk
│   │
│   ├── lugares/                # Los 15 lugares patrimoniales (1 archivo .md por lugar)
│   ├── noticias/                # Noticias del proyecto (1 archivo .md por noticia)
│   │
│   ├── index.njk                 # Landing (/)
│   ├── lugares.njk                # Galería "Descubre Illapel" (/lugares/)
│   ├── noticias.njk                # Listado de noticias (/noticias/)
│   ├── startup.njk                  # MEE Cuenta como start-up (/startup/)
│   ├── gracias.njk                   # Página de agradecimiento del formulario (/gracias/)
│   │
│   ├── favicon.svg / favicon.png / apple-touch-icon.png
│   │
│   ├── assets/
│   │   ├── css/                # tokens.css (paleta/tipografía), base.css, componentes.css
│   │   └── img/                 # logo-chivita.svg (logo del hero), og-image.png (imagen para compartir)
│   │
│   └── img/                      # Fotos subidas desde Decap CMS (lugares/, noticias/)
│
└── _site/                          # Output del build (no se versiona)
```

---

## Correr el sitio en local

Requisitos: [Node.js](https://nodejs.org/) (LTS).

```bash
npm install       # instala Eleventy
npm start         # levanta el servidor de desarrollo con recarga automática
```

Abre `http://localhost:8080`.

Para generar el sitio final sin levantar servidor:

```bash
npm run build     # genera todo en /_site
```

---

## Cómo entrar al panel de administración (Decap CMS)

El panel vive en `/admin` (por ejemplo `https://tu-sitio.netlify.app/admin/`). Requiere que el sitio ya esté desplegado en Netlify con **Netlify Identity** y **Git Gateway** activados (ver sección de deploy más abajo — son pasos de configuración de una sola vez).

Una vez activado:

1. Entrá a `/admin`.
2. Click en **"Login with Netlify Identity"**.
3. Iniciá sesión con el correo y contraseña con los que te invitaste como usuario.
4. Vas a ver 3 colecciones:
   - **Lugares patrimoniales**: los 15 lugares (nombre, descripción, foto, orden, destacado).
   - **Noticias**: título, fecha, portada, resumen, cuerpo.
   - **Contenido de páginas**: textos de la landing, los 5 pasos de "cómo funciona", la tabla de tecnología y toda la sección start-up (incluidos los precios de los planes).
5. Cualquier cambio que hagas y publiques (botón **"Publish"**) genera un commit automático al repositorio de GitHub, y Netlify vuelve a publicar el sitio solo en 1-2 minutos.

---

## Deploy: subir a GitHub y conectar a Netlify

Ver la guía paso a paso completa más abajo en este mismo repositorio (o pedísela a quien te ayudó a armar el sitio). En resumen:

- **Build command**: `npm run build`
- **Publish directory**: `_site`

Estos dos valores ya están configurados en [`netlify.toml`](netlify.toml), así que Netlify los detecta solo al importar el repositorio — no hace falta escribirlos a mano en el panel (pero si te los pide, son esos).

---

## Equipo — IronCow ("Los Chivos de Hierro")

- **Diego Salas** — Líder técnico
- **Francisca Suazo** — Reporte y arte
- **Maximiliano Cáceres** — Audio y narración
- **Profesor Sergio Oyarzún** — Profesor guía

Santa Teresa de Illapel, Región de Coquimbo, Chile.
