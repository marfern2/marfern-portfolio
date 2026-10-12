# marfern.dev

Portfolio profesional de Marcos Fernández Espeja, Backend Developer especializado en Java y Spring Boot.

## Stack

- Angular 21 con componentes standalone
- TypeScript y SCSS
- Contenido estático tipado en `src/app/data`
- Animaciones nativas con `IntersectionObserver`

## Desarrollo

```bash
npm install
npm start
```

La web queda disponible en `http://localhost:4200`.

## Validación

```bash
npm test -- --watch=false
npm run build
```

El build de producción se genera en `dist/marfern-portfolio/browser` y está preparado para servirse como SPA estática desde nginx.

## Assets pendientes

Añadir el retrato profesional en `public/images/profile.jpg`. La interfaz incluye un fallback mientras el archivo no exista.
