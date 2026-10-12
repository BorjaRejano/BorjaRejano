# Borja Rejano · Engineering

Portfolio estático de ingeniería eléctrica e industrial. Diseño grafito + naranja industrial, con Space Grotesk, Inter y JetBrains Mono alojadas localmente. React, TypeScript, Vite, Tailwind CSS, Motion y Lucide React. Sin backend, claves ni servicios de pago.

## Estado del proyecto

Destino autorizado: `BorjaRejano/BorjaRejano`, dirección `https://borjarejano.github.io/BorjaRejano/` y base `/BorjaRejano/`. Se conserva el README de perfil existente; esta documentación se publica como `PORTFOLIO.md`. El repositorio de dominio raíz no está accesible, por lo que se actualiza la web existente siguiendo la elección del titular.

El resumen profesional usa los aproximadamente 10 años, sectores y responsabilidades aportados por el titular. El correo y LinkedIn proceden de su perfil GitHub existente. Los proyectos son plantillas explícitas; puestos, empresas, fechas, herramientas y resultados siguen pendientes. No se publican documentos técnicos ni datos confidenciales.

## Desarrollo

Requisitos: Node.js 22.12 o superior compatible y npm.

```sh
npm ci
npm run dev
```

Abre la URL que indique Vite. Para comprobar el resultado de producción:

```sh
npm run build
npm test
npm run preview
```

`npm run build` verifica TypeScript y genera `dist`. `npm test` verifica tipos y ejecuta cuatro pruebas con Node sobre el build, metadatos y contraste. Ejecuta el build antes de las pruebas, ya que estas inspeccionan los archivos generados. No necesitas instalar un navegador ni una librería de tests adicional.

## Estructura

- `src/App.tsx`: composición de las secciones y preferencias de idioma/tema.
- `src/components/Header.tsx`: cabecera fija y menú móvil.
- `src/components/Section.tsx`: sección accesible reutilizable y animación discreta.
- `src/components/Projects.tsx`: filtros, tarjetas y fichas modales con rutas hash.
- `src/components/EngineeringDiagram.tsx`: ilustraciones SVG decorativas originales.
- `src/data/portfolio.ts`: perfil, sectores, intervenciones, proyectos, experiencia y competencias tipadas.
- `src/data/copy.ts`: textos de interfaz y navegación en español/inglés.
- `src/lib/preferences.ts`: persistencia opcional sin fallar si localStorage está bloqueado.
- `src/styles.css`: paleta, composición y reglas responsive desde 320 px.
- `public/`: CV provisional, favicon, imagen social, robots y sitemap.
- `tests/site.test.mjs`: comprobaciones de publicación y contraste.
- `.github/workflows/deploy.yml`: instalación, build, pruebas y publicación de `dist`.

## Personalización y proyectos reales

Edita `src/data/portfolio.ts`. No hacen falta cambios en los componentes para modificar perfil, experiencia, herramientas o añadir proyectos.

Cada `Project` necesita un `id` único y estable, referencia, `sector` (`industry`, `building` o `water`), `interventions` (`design`, `delivery`, `management`), `title`, `summary`, `status`, `problem`, `scope`, `responsibilities`, `solution`, `technologies` y `results`. Los textos se crean con `text('Español', 'English')`.

1. Sustituye una plantilla por un proyecto real, describiendo contexto, alcance y tu participación exacta.
2. Incluye solo herramientas realmente utilizadas y resultados verificables. No añadas cifras ni nombres de clientes sin autorización.
3. Cuando hayas verificado la información y la autorización para compartirla, cambia `status` de `placeholder` a `verified`.
4. Completa empresas, periodos y puestos de la línea temporal. El primer elemento actual es un resumen de trayectoria, no un empleo atribuido a una empresa.
5. Sustituye `public/cv-provisional.txt` por tu CV definitivo; configura `profile.cv` sin barra inicial (por ejemplo `cv.pdf`) y `cvIsPlaceholder: false`.

Las fichas usan `/#project/industrial`, `/#project/mep` y `/#project/water`. El fragmento hash no se envía al servidor: una recarga solicita el índice de la aplicación y React abre la ficha. No hay rutas de servidor ni necesidad de un 404.html de redirección. Al cerrar, se vuelve a `#projects`; se soporta Atrás del navegador.

### Imágenes

Por defecto se usan diagramas SVG ligeros y decorativos. Si un proyecto dispone de una imagen autorizada, añade opcionalmente:

```ts
image: {
  src: 'images/proyecto.webp',
  alt: text('Descripción pertinente de la instalación', 'Relevant description of the facility'),
  width: 1200,
  height: 800,
  // srcSet y sizes opcionales para variantes optimizadas
}
```

Guarda los archivos en `public/images/`, utiliza AVIF/WebP y elimina información sensible. El componente aplica dimensiones explícitas, `loading="lazy"` y `decoding="async"`. Usa rutas completas desde la raíz en `srcSet`, por ejemplo `/images/proyecto-640.webp 640w, /images/proyecto-1200.webp 1200w`, y un `sizes` acorde a las tarjetas.

## Accesibilidad y SEO

Enlace para saltar al contenido, secciones y navegación etiquetadas, foco visible, botones de filtro con `aria-pressed`, aviso de resultados con `aria-live`, diálogo modal con recorrido de Tab/Shift+Tab, Escape y devolución del foco al enlace que lo abrió. El menú móvil se cierra con Escape. CSS y Motion respetan `prefers-reduced-motion`. Las preferencias no requieren cookies ni servicios externos.

La paleta de ambos temas se comprueba con umbrales AA: 4.5:1 para texto normal y 3:1 para límites de controles. La comprobación de paleta no sustituye una auditoría completa con tecnologías de asistencia.

`index.html` incluye title, description, URL canónica y Open Graph con imagen PNG de 1200 × 630. `robots.txt` referencia `sitemap.xml`, que contiene el índice de la aplicación; las fichas hash no son páginas indexables independientes. Actualiza esos archivos si cambias de dominio. Los títulos/descripciones visibles se traducen con el selector de idioma. La aplicación requiere JavaScript, como una SPA React convencional.

## GitHub Pages

1. Usa **BorjaRejano/BorjaRejano**. Inspecciona los cambios remotos antes de actualizar y conserva el README de perfil.
2. Sube el proyecto, incluido `package-lock.json`, a `main` cuando autorices publicar.
3. En **Settings → Pages → Build and deployment → Source**, selecciona **GitHub Actions**. No selecciones publicación desde una rama: serviría el código fuente y React no cargaría.
4. El workflow ejecuta `npm ci`, `npm run build` y `npm test`, y publica únicamente `dist` mediante el entorno `github-pages`.
5. Comprueba que build y deploy terminan con éxito y que `https://borjarejano.github.io/BorjaRejano/` carga la interfaz y sus recursos, además de las rutas hash.

La base `/BorjaRejano/` corresponde al repositorio actual. Para migrar al repositorio de usuario `BorjaRejano.github.io`, cambia la base a `/` y ajusta canónica, Open Graph, robots y sitemap. Nunca publiques la carpeta fuente directamente con Jekyll.

Consulta `VALIDATION.md` para el resultado y límites de la verificación local.

