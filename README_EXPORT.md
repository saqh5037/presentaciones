# Sistema de Exportación - Presentación Musi/FIFCO

## Descripción General
Sistema completo de exportación para la presentación de kickoff meeting de Musi/FIFCO con múltiples formatos y opciones.

## Funcionalidades de Exportación

### 1. Exportación a Word (.docx)
- **Ubicación**: Dashboard principal → Tarjeta Musi → Botón "Word Editable"
- **Propósito**: Generar documento editable para revisión de contenido
- **Características**:
  - Documento estructurado con todas las secciones
  - Formato profesional con títulos y subtítulos
  - Incluye información completa del equipo con correos
  - Ideal para revisión y corrección de textos

### 2. Exportación a PDF (Diseño Original)
- **Ubicación**: Dashboard principal → Tarjeta Musi → Botón "PDF Presentación"
- **Propósito**: Exportar presentación con diseño visual exacto
- **Características**:
  - Mantiene colores, fuentes y layout originales
  - Exporta las 10 slides completas
  - Vista de impresión especial en `/presentation/musi-kickoff/print`
  - Optimizado para impresión A4 horizontal

### 3. Documento HTML (Vista Web)
- **Ruta**: `/presentation/musi-kickoff/export`
- **Propósito**: Vista de documento web para lectura en línea
- **Características**:
  - Diseño responsivo
  - Navegación fácil
  - Puede ser impreso desde el navegador

## Estructura de Archivos

```
src/
├── utils/
│   ├── exportUtils.js              # Funciones para Word y PDF básico
│   └── exportPresentationPDF.js    # Exportación PDF con diseño original
├── presentations/musi-kickoff/
│   ├── MusiExportDocument.jsx      # Vista de documento HTML
│   ├── MusiExportDocument.css      # Estilos para documento HTML
│   ├── MusiPrintView.jsx           # Vista de impresión con todas las slides
│   └── MusiKickoffPresentation.jsx # Presentación principal
└── pages/
    └── Dashboard.jsx                # Dashboard con botones de exportación
```

## Uso

### Para exportar a Word:
1. Ir al Dashboard principal
2. Buscar tarjeta "Musi - Kickoff Meeting"
3. Click en "Word Editable" (botón azul)
4. Se descarga archivo `Musi_FIFCO_Kickoff_Meeting.docx`

### Para exportar a PDF con diseño original:
1. Ir al Dashboard principal
2. Buscar tarjeta "Musi - Kickoff Meeting"
3. Click en "PDF Presentación" (botón rojo)
4. Se abre modal con instrucciones
5. Click en "Abrir Vista de Impresión"
6. Click en "Imprimir / Guardar PDF" o Ctrl+P
7. Seleccionar "Guardar como PDF"
8. Configurar:
   - Diseño: Horizontal
   - Márgenes: Ninguno
   - Opciones: Marcar "Gráficos de fondo"

## Tecnologías Utilizadas

- **docx**: Generación de documentos Word
- **jsPDF**: Generación de PDFs básicos
- **html2canvas**: Captura de elementos HTML (experimental)
- **file-saver**: Descarga de archivos generados

## Notas de Desarrollo

- El método de exportación PDF con diseño original usa la función de impresión del navegador para mantener fidelidad visual
- La vista de impresión (`MusiPrintView`) renderiza todas las slides en una sola página
- Los estilos de impresión están optimizados con media queries CSS
- Se recomienda Chrome o Edge para mejor compatibilidad de impresión

## Mejoras Futuras

- [ ] Implementar exportación a PowerPoint
- [ ] Agregar marca de agua personalizable
- [ ] Permitir selección de slides específicas para exportar
- [ ] Agregar opciones de calidad para PDF
- [ ] Implementar exportación en segundo plano