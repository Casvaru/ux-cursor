## Instalación

```
  npm install ux-cursor
```

## Importación

```js
import UxCursor from './cursor.js';
UxCursor({}) // Valores por defecto
```

## Cambio de estilo (Props)

```js
UxCursor({
  size = 30, // Cambio del ancho y alto del cursor. Por defecto está en 25
  mixBlend = 'none', // filtro mixBlend. Por defecto está en exclusion
  borderRadius = '20px', //Cambiar el border radius. Por defecto está en 50%
  color = '#2E95D3', // Cambiar el color de fondo del curosr. Por defecto es blanco
  border = '1px solid #000', // Agrega un borde al cursor. Por defecto es none 
  opacity = '50%' // Cambia la opacidad del cursor. Por defecto es 100%
})
```