// @ts-check
/**
 * Función que crea un cursor circular y sigue la posición del mouse.
 * @example UxCursor({}) // Importación con los valores por defecto
 * @example UxCursor({
 *  size:40 // Cambia el tamaño del cursor a 40px
 * })
 * @param {Object} options - Opciones para personalizar el cursor.
 * @param {Number} [options.size=25] - Cambia el tamaño del círculo. Por defecto está en 25.
 * @param {String} [options.mixBlend='exclusion'] - Define el modo de mezcla CSS para el cursor. Por defecto está en 'exclusion'.
 * @param {String} [options.borderRadius='50%'] - Define el radio de borde CSS para el cursor. Por defecto está en '50%'.
 * @param {String} [options.color='#fff'] - Define el color del cursor. Por defecto está en '#fff'.
 * @param {String} [options.border='none'] - Define el borde del cursor. Por defecto está en 'none'.
 * @param {String} [options.opacity='100%'] - Define la opacidad del cursor. Por defecto está en 100%.
 * @returns {HTMLElement} - Elemento HTML que representa el cursor.
 */
export default function uxCursor (options) {
  const {
    size = 25,
    mixBlend = 'exclusion',
    borderRadius = '50%',
    color = '#fff',
    border = 'none',
    opacity = '100%'
  } = options

  const createCursor = () => {
    const cursor = document.createElement('div')
    cursor.id = 'custom-uxcursor'
    cursor.style.width = `${size}px`
    cursor.style.height = `${size}px`
    cursor.style.borderRadius = borderRadius
    cursor.style.backgroundColor = color
    cursor.style.position = 'fixed'
    cursor.style.opacity = opacity
    cursor.style.zIndex = '1000'
    cursor.style.pointerEvents = 'none'
    cursor.style.border = border
    cursor.style.transition = 'width 0.3s ease, height 0.1s ease'
    cursor.style.transform = 'translate3d(-50%,-50%,0)'
    cursor.style.mixBlendMode = mixBlend
    document.body.appendChild(cursor)
    return cursor
  }
  const cursor = createCursor()
  /**
   * Función anónima que captura la posición del mouse, la almacena y actualiza la posición del cursor creado en la función createCursor agregando los estilos Top y Left.
   * @param {MouseEvent} event
   */
  const updateCursorPosition = (event) => {
    const mouseX = event.clientX
    const mouseY = event.clientY
    cursor.style.top = `${mouseY}px`
    cursor.style.left = `${mouseX}px`
  }
  /**
   * Función anónima que tiene una condicional si el target del mouse es tipo hover o tiene una clase en específico y realizar el cambio de estilo al cursor.
   * @param {MouseEvent} event
   */
  const isHover = (event) => {
    const eventDocument = event.target

    const hoverClass = 'hover'
    const tagName = eventDocument.tagName.toLowerCase()
    const targetClasses = eventDocument.classList
    const computedStyle = window.getComputedStyle(eventDocument)

    // Verificar si el elemento tiene cursor: pointer en sus estilos.
    const hasPointerCursor = computedStyle.getPropertyValue('cursor') === 'pointer'

    if (
      tagName === 'button' ||
      tagName === 'input' ||
      targetClasses.contains(hoverClass) ||
      hasPointerCursor
    ) {
      cursor.style.width = `${size + 15}px`
      cursor.style.height = `${size + 15}px`
    } else {
      cursor.style.width = `${size}px`
      cursor.style.height = `${size}px`
    }
  }

  document.addEventListener('mousemove', updateCursorPosition)
  document.addEventListener('mousemove', isHover)

  return createCursor()
}
