// @ts-check

/**
 * Clase para manejar un cursor personalizado que sigue la posición del mouse.
 */
export class UXCursor {
  /**
   * Crea una instancia de CustomCursor.
   * @param {HTMLElement} container - Contenedor donde se añadirá el cursor.
   */
  constructor (container) {
    this.container = container
    this.cursor = this.createCursor()
    this.updateCursor = this.updateCursor.bind(this)
    this.handleLinkHover = this.handleLinkHover.bind(this)
    document.addEventListener('mousemove', this.updateCursor)
    this.container.addEventListener('mouseover', this.handleLinkHover)
    this.container.addEventListener('mouseout', this.handleLinkHover)
  }

  /**
   * Crea el cursor personalizado.
   * @returns {HTMLElement} - Elemento del cursor.
   */
  createCursor (size = '20px') {
    const cursor = document.createElement('div')
    cursor.style.width = size
    cursor.style.height = size
    cursor.style.borderRadius = '50%'
    cursor.style.mixBlendMode = 'exclusion'
    cursor.style.backgroundColor = '#fff'
    cursor.style.position = 'fixed'
    cursor.style.zIndex = '1000'
    cursor.style.pointerEvents = 'none'
    cursor.style.transform = 'translate3d(-50%,-50%,0)'
    cursor.style.transition = 'width 0.1s ease, height 0.5s ease'
    this.container.appendChild(cursor)
    return cursor
  }

  /**
   * Actualiza la posición del cursor según la posición del mouse.
   * @param {MouseEvent} event - Evento de mouse.
   */
  updateCursor (event) {
    const x = event.clientX
    const y = event.clientY
    this.cursor.style.left = `${x}px`
    this.cursor.style.top = `${y}px`
  }

  /**
   * Cambia el tamaño del cursor cuando se produce un evento de hover en un enlace.
   * @param {MouseEvent} event - Evento de mouse.
   */
  handleLinkHover (event) {
    if (event.target.tagName === 'A') {
      if (event.type === 'mouseover') {
        this.cursor.style.width = '40px'
        this.cursor.style.height = '40px'
      } else if (event.type === 'mouseout') {
        this.cursor.style.width = '20px'
        this.cursor.style.height = '20px'
      }
    }
  }

  /**
   * Destruye el cursor personalizado y elimina los eventos de mouse.
   */
  destroy () {
    document.removeEventListener('mousemove', this.updateCursor)
    this.container.removeEventListener('mouseover', this.handleLinkHover)
    this.container.removeEventListener('mouseout', this.handleLinkHover)
    this.cursor.remove()
  }
}

// Crear una instancia de CustomCursor y pasar el body como contenedor.
const customCursor = new UXCursor(document.body)
