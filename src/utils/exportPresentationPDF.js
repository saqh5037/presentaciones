/**
 * Utilidades de exportación a PDF con diseño original de la presentación
 * Mantiene el formato visual exacto de las slides
 */

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

/**
 * Función auxiliar para esperar un tiempo determinado
 * @param {number} ms - Milisegundos a esperar
 * @returns {Promise} Promesa que se resuelve después del tiempo especificado
 */
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Exporta la presentación completa a PDF capturando cada slide (EXPERIMENTAL)
 * Nota: Función compleja que puede no funcionar en todos los navegadores
 * Se recomienda usar exportPresentationToPDFSimple en su lugar
 * @returns {Promise<boolean>} true si la exportación fue exitosa
 */
export const exportPresentationToPDF = async () => {
  try {
    // Crear un iframe oculto para renderizar la presentación
    const iframe = document.createElement('iframe')
    iframe.style.position = 'fixed'
    iframe.style.top = '0'
    iframe.style.left = '0'
    iframe.style.width = '1920px'
    iframe.style.height = '1080px'
    iframe.style.border = 'none'
    iframe.style.zIndex = '-9999'
    iframe.style.opacity = '0'
    iframe.src = '/presentation/musi-kickoff'
    
    document.body.appendChild(iframe)
    
    // Esperar a que el iframe cargue
    await new Promise((resolve) => {
      iframe.onload = resolve
    })
    
    // Esperar un poco más para que se renderice completamente
    await wait(3000)
    
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
    const slides = []
    
    // Obtener el número total de slides
    const totalSlides = 10
    
    // Mostrar mensaje de progreso
    const progressDiv = document.createElement('div')
    progressDiv.style.position = 'fixed'
    progressDiv.style.top = '50%'
    progressDiv.style.left = '50%'
    progressDiv.style.transform = 'translate(-50%, -50%)'
    progressDiv.style.background = 'white'
    progressDiv.style.padding = '30px'
    progressDiv.style.borderRadius = '10px'
    progressDiv.style.boxShadow = '0 10px 40px rgba(0,0,0,0.2)'
    progressDiv.style.zIndex = '10000'
    progressDiv.style.textAlign = 'center'
    progressDiv.innerHTML = `
      <h3 style="margin: 0 0 10px 0; color: #E31E24;">Generando PDF...</h3>
      <p style="margin: 0; color: #666;">Capturando slide <span id="current-slide">1</span> de ${totalSlides}</p>
      <div style="width: 200px; height: 4px; background: #eee; border-radius: 2px; margin: 15px auto 0;">
        <div id="progress-bar" style="width: 10%; height: 100%; background: #E31E24; border-radius: 2px; transition: width 0.3s;"></div>
      </div>
    `
    document.body.appendChild(progressDiv)
    
    // Capturar cada slide
    for (let i = 0; i < totalSlides; i++) {
      // Actualizar progreso
      document.getElementById('current-slide').textContent = i + 1
      document.getElementById('progress-bar').style.width = `${((i + 1) / totalSlides) * 100}%`
      
      // Navegar a la slide
      if (i > 0) {
        // Simular presionar flecha abajo para ir a la siguiente slide
        const event = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true })
        iframeDoc.dispatchEvent(event)
        await wait(1500) // Esperar a que la animación termine
      }
      
      // Buscar el contenedor de la slide actual
      const slideContainer = iframeDoc.querySelector('.slide-container') || 
                            iframeDoc.querySelector('.musi-slide') ||
                            iframeDoc.querySelector('.app')
      
      if (slideContainer) {
        // Capturar la slide
        const canvas = await html2canvas(slideContainer, {
          scale: 2,
          useCORS: true,
          logging: false,
          width: 1920,
          height: 1080,
          windowWidth: 1920,
          windowHeight: 1080,
          backgroundColor: '#ffffff'
        })
        
        slides.push(canvas)
      }
    }
    
    // Crear el PDF con las imágenes capturadas
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1920, 1080]
    })
    
    slides.forEach((canvas, index) => {
      if (index > 0) {
        pdf.addPage()
      }
      
      const imgData = canvas.toDataURL('image/png')
      pdf.addImage(imgData, 'PNG', 0, 0, 1920, 1080)
    })
    
    // Guardar el PDF
    pdf.save('Musi_FIFCO_Kickoff_Presentation.pdf')
    
    // Limpiar
    document.body.removeChild(iframe)
    document.body.removeChild(progressDiv)
    
    return true
  } catch (error) {
    console.error('Error exportando presentación a PDF:', error)
    
    // Limpiar en caso de error
    const iframe = document.querySelector('iframe[src="/presentation/musi-kickoff"]')
    if (iframe) document.body.removeChild(iframe)
    
    const progressDiv = document.querySelector('div[style*="Generando PDF"]')
    if (progressDiv) document.body.removeChild(progressDiv)
    
    return false
  }
}

/**
 * Abre un modal con instrucciones para exportar la presentación a PDF
 * Redirige a la vista de impresión con todas las slides visibles
 * Método recomendado para exportar con diseño original
 * @returns {boolean} Siempre retorna true
 */
export const exportPresentationToPDFSimple = () => {
  // Crear contenedor temporal
  const container = document.createElement('div')
  container.style.position = 'fixed'
  container.style.top = '50%'
  container.style.left = '50%'
  container.style.transform = 'translate(-50%, -50%)'
  container.style.background = 'white'
  container.style.padding = '40px'
  container.style.borderRadius = '12px'
  container.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'
  container.style.zIndex = '10000'
  container.style.textAlign = 'center'
  container.style.maxWidth = '500px'
  
  container.innerHTML = `
    <h2 style="color: #E31E24; margin: 0 0 20px 0;">Exportar Presentación a PDF</h2>
    <p style="color: #666; margin: 0 0 30px 0; line-height: 1.6;">
      Para exportar la presentación completa con el diseño original:
    </p>
    <ol style="text-align: left; color: #333; margin: 0 0 30px 0; padding-left: 20px; line-height: 2;">
      <li>Haz clic en "Abrir Vista de Impresión" abajo</li>
      <li>Se abrirá una página con todas las slides</li>
      <li>Haz clic en "Imprimir / Guardar PDF" o presiona <strong>Ctrl+P</strong></li>
      <li>Selecciona "Guardar como PDF"</li>
      <li>En opciones, marca "Gráficos de fondo"</li>
      <li>Guarda el archivo con todas las slides</li>
    </ol>
    <div style="display: flex; gap: 15px; justify-content: center;">
      <button id="open-presentation" style="
        padding: 12px 30px;
        background: #E31E24;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      ">Abrir Vista de Impresión</button>
      <button id="cancel-export" style="
        padding: 12px 30px;
        background: #eee;
        color: #666;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      ">Cancelar</button>
    </div>
  `
  
  document.body.appendChild(container)
  
  // Agregar eventos
  document.getElementById('open-presentation').addEventListener('click', () => {
    window.open('/presentation/musi-kickoff/print', '_blank')
    document.body.removeChild(container)
  })
  
  document.getElementById('cancel-export').addEventListener('click', () => {
    document.body.removeChild(container)
  })
  
  return true
}