# Portfolio de ingeniería industrial

Web estática responsive en React, TypeScript, Vite, Tailwind CSS, Motion y Lucide. No necesita backend, claves ni servicios de pago. Incluye seis secciones, fichas modales de proyectos, línea temporal, español/inglés, tema claro/oscuro y descarga de CV provisional.

## Instalar y desarrollar

Requisitos: Node.js 22.12 o superior compatible y npm.

```sh
npm ci
npm run dev
```

## Probar y compilar

```sh
npm test
npm run build
npm run preview
```

`npm test` comprueba los tipos de TypeScript; no es una suite de pruebas funcionales. `npm run build` comprueba tipos y genera `dist`. Abre la URL local que indica Vite para revisar el resultado. Revisa manualmente móvil y escritorio, ambos idiomas y temas, navegación con Tab, Enter y Escape, cierre y recuperación del foco de las fichas, descarga del CV y reducción de movimiento del sistema.

## Personalizar

- Edita `src/data/portfolio.ts`: identidad, contactos, traducciones, experiencia, proyectos y competencias tipadas. Todo el contenido profesional es provisional; valida los datos antes de publicar. No se han inventado empresas, titulaciones, logros o cifras.
- Configura `profile.linkedin` con una URL real. Mientras está vacío, aparece como pendiente y no es un enlace. El correo `nombre@example.com` es ilustrativo.
- Sustituye `public/cv-provisional.txt` por tu CV, por ejemplo `public/cv.pdf`, y actualiza `profile.cv`. La descarga actual entrega una plantilla identificada en español e inglés.
- Ajusta título y metadatos iniciales en `index.html`, y sus traducciones en `src/App.tsx`. Añade URL canónica y `og:url` cuando conozcas tu dominio real.
- Los diagramas SVG originales se renderizan sin imágenes externas: son ligeros, escalables y decorativos. Si añades fotografías, utiliza AVIF/WebP, dimensiones explícitas, `srcset`, texto alternativo pertinente y `loading="lazy"` fuera del primer viewport.

## Accesibilidad

Enlace para saltar al contenido, landmarks semánticos, foco visible, controles etiquetados y diálogo nativo con bloqueo del foco, cierre con Escape y devolución del foco al activador. Motion respeta `prefers-reduced-motion`; CSS desactiva transiciones y scroll suave en ese modo. El idioma y el tema se guardan en localStorage. Los diagramas decorativos están ocultos a lectores de pantalla.

## Desplegar en GitHub Pages

Destino autorizado: `BorjaRejano/BorjaRejano`, rama `main`.

1. En **Settings → Pages → Build and deployment → Source**, selecciona **GitHub Actions**.
2. El workflow `.github/workflows/deploy.yml` ejecuta `npm ci` y `npm run build`, carga `dist` y publica en Pages. También permite ejecución manual desde Actions.
3. Visita `https://borjarejano.github.io/BorjaRejano/` cuando termine el workflow.

Vite usa `base: '/BorjaRejano/'` y el CV y favicon respetan esa base. No hay rutas de cliente: las secciones usan anclas. El README de perfil existente se conserva en GitHub; estas instrucciones se publican como `PORTFOLIO.md`.

Para migrar a `BorjaRejano.github.io` y servir desde la raíz, cambia la base a `/` y actualiza las URLs canónicas.
