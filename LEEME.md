# Cuaderno de aves

Sitio estático (HTML, CSS y JavaScript), sin servidor ni base de datos.

## Estructura

```
aves/
├── index.html            Portada con la lista de lugares
├── comun/
│   ├── estilos.css       Diseño compartido por todos los lugares
│   ├── app.js            Galería, filtros, fichas, mapa y calendario
│   └── mapa.js           Contorno de las Américas para las rutas migratorias
└── san-simon/
    ├── index.html        Página del lugar (portada y textos propios)
    ├── datos.js          Especies, fotos, hábitos y dónde verlas
    └── fotos/            Fotos grandes (1200 px) y videos
        └── mini/         Copias pequeñas (640 px) para las tarjetas
```

## Agregar un lugar nuevo (p. ej. Cartagena)

1. Copiar la carpeta `san-simon/` como `cartagena/`.
2. En `cartagena/index.html`, cambiar los textos de la portada (nombre, altitud, coordenadas).
3. En `cartagena/datos.js`, cambiar `LUGAR` y reemplazar la lista de especies.
4. Poner las fotos en `cartagena/fotos/` y sus copias pequeñas en `cartagena/fotos/mini/`.
5. En `index.html` de la raíz, cambiar la tarjeta "Próximamente" por un enlace a `cartagena/`.

## Ver el sitio en el computador

Las páginas cargan archivos de otras carpetas, así que conviene abrirlas con un servidor local:
`python3 -m http.server` dentro de la carpeta `aves/` y luego abrir http://localhost:8000.
