# Portfolio Website - Triad Systems

Sitio web de portafolio profesional construido con Astro, enfocado en mostrar servicios, stack tecnologico, proyectos destacados, equipo y una seccion de contacto.

Este proyecto esta pensado como base para marca personal, agencia o estudio de software que quiera una presencia moderna, rapida y facil de mantener.

## De que trata este proyecto

La pagina principal incluye:

- Hero con propuesta de valor y llamadas a la accion.
- Carrusel de tecnologias.
- Seccion de proyectos destacados con categorias, stack y enlaces.
- Seccion de equipo.
- Formulario de contacto.
- Header con navegacion responsiva y animaciones de scroll.

## Stack principal

- Astro 6
- CSS global + estilos por componente (Astro)
- astro-icon + iconos via Iconify/Simple Icons
- PNPM como gestor de paquetes

## Requisitos

- Node.js 22.12.0 o superior
- PNPM instalado globalmente

## Instalacion y ejecucion

1. Clona el repositorio.
2. Instala dependencias:

```bash
pnpm install
```

3. Ejecuta en desarrollo:

```bash
pnpm dev
```

4. Abre en tu navegador:

```text
http://localhost:4321
```

## Scripts disponibles

```bash
pnpm dev      # Servidor local
pnpm build    # Build de produccion
pnpm preview  # Vista previa del build
pnpm astro    # Comandos de Astro CLI
```

## Estructura del proyecto

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── README.md
```

## Personalizacion rapida

Si quieres adaptar el proyecto a tu marca o cliente:

- Cambia textos y secciones en `src/components/sections/`.
- Actualiza proyectos en `src/data/projects.js`.
- Actualiza equipo en `src/data/team.js`.
- Actualiza tecnologias en `src/data/technologies.js`.
- Ajusta la identidad visual en `src/styles/global.css`.

## Mejoras y sugerencias

Las mejoras y sugerencias son bienvenidas.

Si quieres contribuir:

1. Haz un fork del repositorio.
2. Crea una rama con tu mejora:

```bash
git checkout -b feature/mi-mejora
```

3. Realiza tus cambios y haz commit.
4. Abre un Pull Request explicando:
- Que problema resuelve.
- Que cambio propone.
- Como probarlo.

Tambien puedes abrir un Issue para:

- Reportar errores.
- Proponer nuevas funcionalidades.
- Sugerir mejoras de diseño, rendimiento o accesibilidad.

Toda sugerencia constructiva es bienvenida para seguir mejorando el proyecto.

