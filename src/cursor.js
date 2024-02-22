// @ts-check

/**
 * Función para manejar un cursor personalizado que sigue la posición del mouse.
 */
export default function uxCursor () {
  /**
   * Crea un custom cursor circular que sigue el puntero del mouse.
   * @param {number} size En las siguientes actualizaciones se le dará parámetros personalizados al cursor, NO usar.
   * @returns HTMLElement
  */
  const createCursor = (size = 25) => {
    const cursor = document.createElement('div')
    cursor.id = 'custom-uxcursor'
    cursor.style.width = `${size}px`
    cursor.style.height = `${size}px`
    cursor.style.borderRadius = '50%'
    cursor.style.backgroundColor = '#fff'
    cursor.style.position = 'fixed'
    cursor.style.zIndex = '1000'
    cursor.style.pointerEvents = 'none'
    cursor.style.transition = 'width 0.3s ease, height 0.1s ease'
    cursor.style.transform = 'translate3d(-50%,-50%,0)'
    cursor.style.mixBlendMode = 'exclusion'
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
   * Función anónima que tiene una condicional si el target del mouse es igual a un link o tagName A para cambiar su estilo.
   * @param {MouseEvent} event
   */
  const isHoverTagA = (event) => {
    if (event.target.tagName === 'A') {
      cursor.style.width = '40px'
      cursor.style.height = '40px'
    } else {
      cursor.style.width = '25px'
      cursor.style.height = '25px'
    }
  }

  document.addEventListener('mousemove', updateCursorPosition)
  document.addEventListener('mousemove', isHoverTagA)
}

uxCursor()
