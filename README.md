# Mi Portfolio

Este es mi **portfolio personal**, una **Single Page Application (SPA)** construida con **React**, que muestra mis habilidades, proyectos y experiencia en desarrollo web.  

El portfolio está estructurado en secciones para destacar **experiencia, tecnologías, proyectos, información sobre mí y contacto**.

---

## Tecnologías usadas

- React
- React Router
- CSS3 / HTML5 (estilos modularizados por componente)
- Diseño responsivo
- Despliegue: Netlify con dominio personalizado

---

## Arquitectura de CSS

La aplicación utiliza una arquitectura de **CSS modularizada por componente**, donde cada sección o componente tiene su propio archivo `.css`. Esto permite mantener los estilos organizados y escalables a medida que el proyecto crece.

Características principales:

- Uso de **BEM naming convention** para consistencia (`.component__element--modifier`) en todos los componentes.
- **Media queries** para garantizar diseño responsivo en móviles, tablets y desktop (`@media`).
- **Transiciones y efectos suaves** en botones, enlaces y elementos interactivos.
- Uso de **variables CSS y gradientes** para mantener un estilo uniforme y moderno en toda la aplicación.
- Componentes como menús, tarjetas de proyectos, secciones de contacto, etc., tienen estilos aislados para evitar conflictos globales.

Esta estrategia permite **aislar estilos por componente**, facilitando mantenimiento, escalabilidad y consistencia visual en toda la SPA.

---

## Secciones de la SPA

| Sección | Descripción |
|---------|-------------|
| `Home` | Sección Hero que me presenta |
| `Experience` | Experiencia laboral y educativa |
| `Tech` | Tecnologías y herramientas que manejo |
| `Projects` | Proyectos destacados con descripción y links |
| `About` | Información sobre mí y mi trayectoria |
| `Contact` | Formulario de contacto y enlaces a redes sociales |
| `Footer` | Footer con enlaces e información adicional |

---

## Despliegue

**Live Demo:** [Mi Portfolio](https://patrilago.com)

---

## Notas

- Esta es una **SPA frontend-only**, no incluye backend.  
- Enfocada en **UI, diseño responsivo y navegación con scroll suave**.  
- Construida como una **muestra personal para portfolio**.  

---