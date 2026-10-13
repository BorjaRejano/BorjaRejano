# Borja Rejano · Portfolio profesional

Portfolio estático React, TypeScript, Vite, Tailwind CSS, Motion y Lucide React. Diseño grafito y naranja, español/inglés y modo claro/oscuro.

## Desarrollo y comprobación

Requiere Node.js 22.12 o superior compatible.

```sh
npm ci
npm run dev
npm run build
npm test
npm run preview
```

El build genera `dist`. Las pruebas comprueban recursos, metadatos y contraste sobre el build.

## Contenido editable

- `src/data/portfolio.ts`: perfil, experiencia, formación y enlaces de proyectos.
- `src/data/copy.ts`: interfaz bilingüe.
- `src/data/projects/`: datos profesionales de cada proyecto; `english.ts` contiene su presentación inglesa.
- `src/components/`: componentes reutilizables, tarjetas y detalle.
- `public/assets/`: retrato e infografías aportadas por el titular.
- `public/cv-borja-rejano.pdf`: CV descargable autorizado por el titular.

Para añadir un proyecto, crea un objeto tipado `Project` con identificador estable, alcance y responsabilidades verificadas, impórtalo en `portfolio.ts` y añade su traducción en `english.ts`. Los enlaces de experiencia utilizan `text('Español', 'English')`.

Se usan infografías aportadas por el titular. Las fotografías de proyectos y sus referencias pendientes de autorización se han retirado. No incorporar documentos confidenciales ni resultados no verificados.

## GitHub Pages

Repositorio `BorjaRejano/BorjaRejano`. URL: https://borjarejano.github.io/BorjaRejano/. Vite utiliza base `/BorjaRejano/`. Los proyectos usan rutas hash y admiten recarga directa.

En Settings → Pages, selecciona Source = GitHub Actions. El workflow `.github/workflows/deploy.yml` instala con `npm ci`, ejecuta `npm run build` y `npm test`, y publica `dist` al actualizar `main`. Comprueba el resultado del workflow y la web publicada.

El README del perfil GitHub se conserva. Estas instrucciones se publican como `PORTFOLIO.md`.
