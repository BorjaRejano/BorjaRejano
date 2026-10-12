# Verificación de la versión grafito + naranja

Fecha: 12 de octubre de 2026. Entorno local Windows, Node.js 22.12.0. No se ha publicado ni subido este rediseño.

## Inspección

- La carpeta contiene la versión anterior y no tiene repositorio `.git` local.
- `BorjaRejano/BorjaRejano` sigue en el commit `b9cf2161d1350d3724a3ff919be106d030084a17`. No se ha modificado su contenido remoto.
- La conexión GitHub devuelve 404 para `BorjaRejano/BorjaRejano.github.io`. No se puede confirmar su existencia ni preparar allí un despliegue hasta crearlo o habilitar acceso.

## Comandos ejecutados

- `npm install @fontsource/space-grotesk @fontsource/inter @fontsource/jetbrains-mono`: correcto; fuentes locales, lockfile actualizado.
- `npm ci --cache .npm-cache --fetch-retries=0 --fetch-timeout=20000`: correcto; 0 vulnerabilidades notificadas.
- `npm run build`: correcto; TypeScript y Vite completados. JS principal: aproximadamente 384 kB / 121 kB gzip; CSS: 23 kB / 6 kB gzip. Fuentes separadas, servidas desde assets locales.
- `npm test`: 4 pruebas aprobadas, 0 fallos.
- Vista previa de producción con Vite: respuesta HTTP 200.

## Pruebas automáticas

1. El índice de producción referencia recursos compilados existentes desde `/assets/`, no `/src/main.tsx`. CV y favicon incluidos.
2. Canónica, Open Graph, robots y sitemap apuntan al dominio raíz solicitado; imagen social PNG de 1200 × 630.
3. Las URLs de fuentes y recursos CSS resuelven a archivos incluidos en `dist`.
4. Paletas clara y oscura: contraste mínimo 4.5:1 para texto normal/acento sobre superficies y 3:1 para límites de controles.

## Comprobación en navegador

- Diseño revisado a 1280 px; comprobación de ancho a 320, 768 y 1280 px sin desbordamiento horizontal del documento.
- Filtro combinado agua + diseño: estado vacío correcto. Restablecer recupera las tres fichas.
- Apertura de ficha por enlace hash y recarga directa en `#project/water` correctas, sin ruta de servidor adicional.
- Escape cierra el diálogo y devuelve el foco al enlace que lo abrió.
- Corrección aplicada y comprobada: Tab y Shift+Tab recorren los dos controles de cierre dentro de la ficha.
- Menú móvil abre, cierra con Escape y devuelve el foco al botón.
- Idioma y tema persisten al recargar; title y lang se actualizan.
- Enlace de salto por teclado mueve el foco a `main`.
- Fuente Space Grotesk disponible según `document.fonts.check`.
- No se observaron mensajes de consola de nivel error en la vista previa de producción durante las comprobaciones.

## Límites y pendientes

- No se ha hecho una auditoría completa con lector de pantalla. El test de contraste comprueba paletas, no todos los estados ni cada combinación de estilos.
- La reducción de movimiento está implementada con MotionConfig, useReducedMotion y media query; no se modificó la preferencia de movimiento del sistema del usuario para probarla.
- Las ilustraciones actuales son SVG decorativos. La opción de imágenes reales con alt, dimensiones, lazy loading y decoding async está preparada, pero no se ha incorporado una fotografía ni documentación confidencial.
- Sustituir plantillas por proyectos reales autorizados, concretar experiencia y herramientas, y completar CV.
- Crear o dar acceso al repositorio de usuario. Configurar Source = GitHub Actions. Después de autorizar y realizar la subida, verificar el workflow y la web pública; esta verificación local no acredita un despliegue remoto.

## Actualización autorizada a la web existente

El titular ha elegido actualizar `BorjaRejano/BorjaRejano`. Se adapta la base a `/BorjaRejano/`, con canónica, Open Graph, robots, sitemap y pruebas parametrizadas para esa dirección. `npm run build` y las cuatro pruebas de `npm test` pasan tras la adaptación. Este apartado se prepara antes del despliegue; el estado remoto debe confirmarse en GitHub Actions.
