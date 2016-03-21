# Initiacueto

Initiacueto es un template HTML5 preparado para ofrecer una versión de producción minificada y optimizada, donde también se ofrecen herramientas de automatización como GULP, Bower e integración con BrowserSync.

Este template surgió a raíz del proyecto [SAGE](https://github.com/roots/sage), que es un theme dev, para WordPress. Por lo que van a encontrar mucho "copypasteo" de su repo oficial, pero llevando lo bueno de este gran proyecto a solo un template html5.

## Características

* [gulp](http://gulpjs.com/) build script that compiles both Sass and Less, checks for JavaScript errors, optimizes images, and concatenates and minifies files
* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing
* [Bower](http://bower.io/) for front-end package management
* [asset-builder](https://github.com/austinpray/asset-builder) for the JSON file based asset pipeline
* [Bootstrap](http://getbootstrap.com/)

## Desarrollo en el template

Initiacueto usa [gulp](http://gulpjs.com/) y [Bower](http://bower.io/) para el manejo de paquetes.

### Instalar gulp y Bower

Este template requiere de [node.js](http://nodejs.org/download/). Y te recomiendo que siempre actualices a la última versión de NPM: `npm install -g npm@latest`.

Pasos desde el terminal:

1. Instalar y/o actualizar [gulp](http://gulpjs.com) y [Bower](http://bower.io/) globalmente con `npm install -g gulp bower`
2. Navegar hasta el directorio del proyecto y luego correr `npm install`
3. Correr `bower install`

Ya tenés todas las dependencias necesarias para poder trabajar sobre el build.

### Comandos de GULP disponibles:

* `gulp` — Compila y optimiza todos los archivos e imágenes que están dentro de `src` y deja el resultado en `public'.
* `gulp watch` — Mismo que lo anterior, pero en segundo plano revisa continuamente los cambios en los distintos archivos e integra BrowserSync para ver el resultado en tiempo real.