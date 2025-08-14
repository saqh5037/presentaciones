/**
 * Utilidades de exportación para presentación Musi/FIFCO
 * Genera documentos Word editables y PDFs para revisión
 */

import { saveAs } from 'file-saver'
import jsPDF from 'jspdf'
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx'

/**
 * Exporta el contenido de la presentación a un documento Word editable (.docx)
 * Incluye todas las secciones con formato profesional
 * @returns {boolean} true si la exportación fue exitosa, false si hubo error
 */
export const exportToWord = () => {
  try {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          // Portada
          new Paragraph({
            text: "Sistema de Gestión de Espacios Comerciales",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),
          new Paragraph({
            text: "Kickoff Meeting - RFP-IMS-2025",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Cliente: ", bold: true }),
              new TextRun("Musi / Mussmanni (FIFCO)")
            ],
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Proveedor: ", bold: true }),
              new TextRun("WBI Innovations")
            ],
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Fecha: ", bold: true }),
              new TextRun("Agosto 2025")
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 800 }
          }),

          // Agenda
          new Paragraph({
            text: "1. Agenda de la Reunión",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: "1. Introducción y Bienvenida - Presentación de equipos y objetivos de la reunión",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "2. Visión General del Proyecto - Contexto, necesidades y oportunidades",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "3. Objetivos y Alcance - Metas específicas y límites del proyecto",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "4. Funcionalidades Clave - Demostración de capacidades principales",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "5. Cronograma y Fases - Timeline detallado de implementación",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "6. Equipo de Trabajo - Roles y responsabilidades",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "7. Próximos Pasos - Acciones inmediatas y compromisos",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "8. Sesión de Preguntas - Espacio para dudas y aclaraciones",
            bullet: { level: 0 },
            spacing: { after: 400 }
          }),

          // Sobre el proyecto
          new Paragraph({
            text: "2. Sobre el Proyecto",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: "Transformación Digital del Retail",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 200 }
          }),
          new Paragraph({
            text: "El Desafío",
            heading: HeadingLevel.HEADING_3,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "En el competitivo mercado retail actual, la gestión eficiente de espacios comerciales es crucial para maximizar ventas y mejorar la experiencia del cliente. Musi y Mussmanni necesitan una solución tecnológica que les permita optimizar la distribución de productos en sus múltiples puntos de venta.",
            spacing: { after: 200 }
          }),
          new Paragraph({
            text: "La Solución",
            heading: HeadingLevel.HEADING_3,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "Un sistema integral de gestión de espacios comerciales que permite:",
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "Diseño visual e intuitivo de layouts de tienda",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Análisis de rendimiento por ubicación",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Gestión centralizada de múltiples tiendas",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Reportes y analytics en tiempo real",
            bullet: { level: 0 },
            spacing: { after: 200 }
          }),
          new Paragraph({
            text: "Beneficios Esperados",
            heading: HeadingLevel.HEADING_3,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "30% de reducción en tiempo de planificación",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "25% de mejora en aprovechamiento del espacio",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Centralización total de la información",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Decisiones basadas en datos reales",
            bullet: { level: 0 },
            spacing: { after: 400 }
          }),

          // Objetivos
          new Paragraph({
            text: "3. Objetivos del Proyecto",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: "Objetivo Principal",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "Desarrollar e implementar un sistema integral de gestión de espacios comerciales que permita a Musi y Mussmanni optimizar la distribución de sus productos y mejorar la eficiencia operativa en todas sus tiendas.",
            spacing: { after: 200 }
          }),
          new Paragraph({
            text: "Objetivos Específicos",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "1. Optimizar la gestión de espacios - Maximizar el aprovechamiento del espacio disponible",
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "2. Mejorar la experiencia del cliente - Facilitar la navegación y compra",
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "3. Agilizar procesos operativos - Reducir tiempos de planificación",
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "4. Centralizar la información - Unificar la gestión en una plataforma única",
            spacing: { after: 200 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Valor Estimado del Proyecto: ", bold: true }),
              new TextRun({ text: "$24,640.00", bold: true, color: "FF0000" })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
          }),

          // Alcance
          new Paragraph({
            text: "4. Alcance del Proyecto",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: "✅ Incluido en el Alcance",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "Editor visual drag-and-drop para diseño de espacios",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Biblioteca de elementos predefinidos",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Gestión multi-tienda desde plataforma centralizada",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Sistema de usuarios y permisos por rol",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Dashboard con métricas clave de rendimiento",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Reportes exportables en múltiples formatos",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Integración con sistemas actuales de inventario",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Capacitación completa al personal",
            bullet: { level: 0 },
            spacing: { after: 200 }
          }),
          new Paragraph({
            text: "❌ Fuera del Alcance",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "Modificación de sistemas POS existentes",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Hardware adicional (tablets, equipos)",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Rediseño físico de tiendas",
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "Gestión de inventario en tiempo real",
            bullet: { level: 0 },
            spacing: { after: 400 }
          }),

          // Cronograma
          new Paragraph({
            text: "5. Cronograma del Proyecto",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: "5 Fases | Agosto - Diciembre 2025",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Fase 1: Agosto - ", bold: true }),
              new TextRun("Análisis y Diseño (Semanas 1-4)")
            ],
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "• Levantamiento de requerimientos",
            spacing: { after: 20 }
          }),
          new Paragraph({
            text: "• Diseño de arquitectura",
            spacing: { after: 20 }
          }),
          new Paragraph({
            text: "• Creación de mockups",
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Fase 2: Septiembre - ", bold: true }),
              new TextRun("Desarrollo Backend (Semanas 5-8)")
            ],
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "• Base de datos",
            spacing: { after: 20 }
          }),
          new Paragraph({
            text: "• APIs REST",
            spacing: { after: 20 }
          }),
          new Paragraph({
            text: "• Lógica de negocio",
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Fase 3: Octubre - ", bold: true }),
              new TextRun("Desarrollo Frontend (Semanas 9-12)")
            ],
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "• Interfaz de usuario",
            spacing: { after: 20 }
          }),
          new Paragraph({
            text: "• Editor visual",
            spacing: { after: 20 }
          }),
          new Paragraph({
            text: "• Dashboard",
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Fase 4: Noviembre - ", bold: true }),
              new TextRun("Testing y QA (Semanas 13-16)")
            ],
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "• Pruebas unitarias",
            spacing: { after: 20 }
          }),
          new Paragraph({
            text: "• Pruebas de integración",
            spacing: { after: 20 }
          }),
          new Paragraph({
            text: "• Corrección de bugs",
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Fase 5: Diciembre - ", bold: true }),
              new TextRun("Implementación (Semanas 17-20)")
            ],
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "• Despliegue",
            spacing: { after: 20 }
          }),
          new Paragraph({
            text: "• Capacitación",
            spacing: { after: 20 }
          }),
          new Paragraph({
            text: "• Go-live",
            spacing: { after: 400 }
          }),

          // Equipo
          new Paragraph({
            text: "6. Equipo de Trabajo",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: "WBI Innovations",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Francisco Gaivis - ", bold: true }),
              new TextRun("Project Lead (fgaivis@wbinnova.com)")
            ],
            spacing: { after: 50 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Samuel Quiroz - ", bold: true }),
              new TextRun("Tech Lead (squiroz@wbinnova.com)")
            ],
            spacing: { after: 200 }
          }),
          new Paragraph({
            text: "FIFCO",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Krisia Díaz - ", bold: true }),
              new TextRun("Project Manager (krisia.diaz@fifco.com)")
            ],
            spacing: { after: 50 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Vanessa Núñez - ", bold: true }),
              new TextRun("Project Manager T&T (uidext2553@fifco.com)")
            ],
            spacing: { after: 50 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Ariana González - ", bold: true }),
              new TextRun("Procurement (ariana.gonzalez@fifco.com)")
            ],
            spacing: { after: 50 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Hilary Quesada - ", bold: true }),
              new TextRun("Legal & Contracts (hilary.quesada@fifco.com)")
            ],
            spacing: { after: 400 }
          }),

          // Próximos Pasos
          new Paragraph({
            text: "7. Próximos Pasos",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: "1. 📄 Firma de Contrato - Esta semana",
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "2. 👥 Reunión de Requerimientos - Próxima semana",
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "3. 📅 Cronograma Detallado - Próxima semana",
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "4. 💻 Inicio de Desarrollo - Semana 3",
            spacing: { after: 50 }
          }),
          new Paragraph({
            text: "5. ✅ Primera Demo - Fin de Agosto",
            spacing: { after: 400 }
          }),

          // Compromiso
          new Paragraph({
            text: "🎯 Compromiso de Éxito",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 200 }
          }),
          new Paragraph({
            text: "En WBI Innovations estamos comprometidos con el éxito de este proyecto. Trabajaremos de la mano con el equipo de FIFCO para asegurar la entrega de una solución que supere las expectativas.",
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),
          new Paragraph({
            text: "¡Comencemos este viaje juntos! 🚀",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
          })
        ]
      }]
    })

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "Musi_FIFCO_Kickoff_Meeting.docx")
    })
    
    return true
  } catch (error) {
    console.error('Error exportando a Word:', error)
    return false
  }
}

/**
 * Exporta el contenido de la presentación a PDF con formato de documento
 * Nota: Para PDF con diseño original usar exportPresentationPDF.js
 * @returns {boolean} true si la exportación fue exitosa, false si hubo error
 */
export const exportToPDF = () => {
  try {
    const doc = new jsPDF('p', 'mm', 'a4')
    const pageHeight = doc.internal.pageSize.height
    let yPosition = 20
    
    // Configuración de fuente
    doc.setFont('helvetica')
    
    // Portada
    doc.setFontSize(24)
    doc.setTextColor(227, 30, 36)
    doc.text('Sistema de Gestión de', 105, yPosition, { align: 'center' })
    doc.text('Espacios Comerciales', 105, yPosition + 10, { align: 'center' })
    
    doc.setFontSize(16)
    doc.setTextColor(100)
    doc.text('Kickoff Meeting - RFP-IMS-2025', 105, yPosition + 30, { align: 'center' })
    
    doc.setFontSize(12)
    doc.setTextColor(0)
    doc.text('Cliente: Musi / Mussmanni (FIFCO)', 105, yPosition + 50, { align: 'center' })
    doc.text('Proveedor: WBI Innovations', 105, yPosition + 60, { align: 'center' })
    doc.text('Fecha: Agosto 2025', 105, yPosition + 70, { align: 'center' })
    
    // Nueva página - Agenda
    doc.addPage()
    yPosition = 20
    
    doc.setFontSize(18)
    doc.setTextColor(227, 30, 36)
    doc.text('1. Agenda de la Reunión', 20, yPosition)
    
    doc.setFontSize(11)
    doc.setTextColor(0)
    const agenda = [
      '1. Introducción y Bienvenida - Presentación de equipos',
      '2. Visión General del Proyecto - Contexto y necesidades',
      '3. Objetivos y Alcance - Metas específicas',
      '4. Funcionalidades Clave - Capacidades principales',
      '5. Cronograma y Fases - Timeline de implementación',
      '6. Equipo de Trabajo - Roles y responsabilidades',
      '7. Próximos Pasos - Acciones inmediatas',
      '8. Sesión de Preguntas - Dudas y aclaraciones'
    ]
    
    yPosition += 15
    agenda.forEach(item => {
      doc.text(item, 25, yPosition)
      yPosition += 8
    })
    
    // Objetivos
    doc.addPage()
    yPosition = 20
    
    doc.setFontSize(18)
    doc.setTextColor(227, 30, 36)
    doc.text('2. Objetivos del Proyecto', 20, yPosition)
    
    yPosition += 15
    doc.setFontSize(12)
    doc.setTextColor(0)
    const objectives = [
      'Objetivo Principal:',
      'Desarrollar e implementar un sistema integral de gestión de espacios',
      'comerciales que permita a Musi y Mussmanni optimizar la distribución',
      'de sus productos y mejorar la eficiencia operativa en todas sus tiendas.',
      '',
      'Objetivos Específicos:',
      '• Optimizar la gestión de espacios',
      '• Mejorar la experiencia del cliente',
      '• Agilizar procesos operativos',
      '• Centralizar la información',
      '',
      'Valor Estimado del Proyecto: $24,640.00'
    ]
    
    objectives.forEach(line => {
      if (line.startsWith('Objetivo Principal:') || line.startsWith('Objetivos Específicos:')) {
        doc.setFont('helvetica', 'bold')
      } else {
        doc.setFont('helvetica', 'normal')
      }
      
      if (yPosition > pageHeight - 20) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.text(line, 20, yPosition)
      yPosition += 7
    })
    
    // Cronograma
    doc.addPage()
    yPosition = 20
    
    doc.setFontSize(18)
    doc.setTextColor(227, 30, 36)
    doc.text('3. Cronograma del Proyecto', 20, yPosition)
    
    doc.setFontSize(14)
    doc.setTextColor(100)
    doc.text('5 Fases | Agosto - Diciembre 2025', 20, yPosition + 10)
    
    yPosition += 25
    doc.setFontSize(11)
    doc.setTextColor(0)
    
    const phases = [
      { month: 'Agosto', title: 'Análisis y Diseño', weeks: 'Semanas 1-4' },
      { month: 'Septiembre', title: 'Desarrollo Backend', weeks: 'Semanas 5-8' },
      { month: 'Octubre', title: 'Desarrollo Frontend', weeks: 'Semanas 9-12' },
      { month: 'Noviembre', title: 'Testing y QA', weeks: 'Semanas 13-16' },
      { month: 'Diciembre', title: 'Implementación', weeks: 'Semanas 17-20' }
    ]
    
    phases.forEach(phase => {
      doc.setFont('helvetica', 'bold')
      doc.text(`${phase.month} - ${phase.title}`, 25, yPosition)
      doc.setFont('helvetica', 'normal')
      doc.text(phase.weeks, 25, yPosition + 5)
      yPosition += 15
    })
    
    // Equipo
    doc.addPage()
    yPosition = 20
    
    doc.setFontSize(18)
    doc.setTextColor(227, 30, 36)
    doc.text('4. Equipo de Trabajo', 20, yPosition)
    
    yPosition += 15
    doc.setFontSize(12)
    doc.setTextColor(0)
    
    doc.setFont('helvetica', 'bold')
    doc.text('WBI Innovations:', 20, yPosition)
    yPosition += 7
    doc.setFont('helvetica', 'normal')
    doc.text('• Francisco Gaivis - Project Lead (fgaivis@wbinnova.com)', 25, yPosition)
    yPosition += 6
    doc.text('• Samuel Quiroz - Tech Lead (squiroz@wbinnova.com)', 25, yPosition)
    
    yPosition += 12
    doc.setFont('helvetica', 'bold')
    doc.text('FIFCO:', 20, yPosition)
    yPosition += 7
    doc.setFont('helvetica', 'normal')
    doc.text('• Krisia Díaz - Project Manager (krisia.diaz@fifco.com)', 25, yPosition)
    yPosition += 6
    doc.text('• Vanessa Núñez - PM T&T (uidext2553@fifco.com)', 25, yPosition)
    yPosition += 6
    doc.text('• Ariana González - Procurement (ariana.gonzalez@fifco.com)', 25, yPosition)
    yPosition += 6
    doc.text('• Hilary Quesada - Legal (hilary.quesada@fifco.com)', 25, yPosition)
    
    // Próximos pasos
    doc.addPage()
    yPosition = 20
    
    doc.setFontSize(18)
    doc.setTextColor(227, 30, 36)
    doc.text('5. Próximos Pasos', 20, yPosition)
    
    yPosition += 15
    doc.setFontSize(11)
    doc.setTextColor(0)
    
    const nextSteps = [
      '1. Firma de Contrato - Esta semana',
      '2. Reunión de Requerimientos - Próxima semana',
      '3. Cronograma Detallado - Próxima semana',
      '4. Inicio de Desarrollo - Semana 3',
      '5. Primera Demo - Fin de Agosto'
    ]
    
    nextSteps.forEach(step => {
      doc.text(step, 25, yPosition)
      yPosition += 8
    })
    
    yPosition += 20
    
    // Compromiso
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(227, 30, 36)
    doc.text('Compromiso de Éxito', 105, yPosition, { align: 'center' })
    
    yPosition += 10
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0)
    const commitment = [
      'En WBI Innovations estamos comprometidos con el éxito de este proyecto.',
      'Trabajaremos de la mano con el equipo de FIFCO para asegurar',
      'la entrega de una solución que supere las expectativas.'
    ]
    
    commitment.forEach(line => {
      doc.text(line, 105, yPosition, { align: 'center' })
      yPosition += 6
    })
    
    yPosition += 10
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('¡Comencemos este viaje juntos!', 105, yPosition, { align: 'center' })
    
    // Guardar el PDF
    doc.save('Musi_FIFCO_Kickoff_Meeting.pdf')
    return true
  } catch (error) {
    console.error('Error exportando a PDF:', error)
    return false
  }
}