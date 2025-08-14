import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  console.log('🚀 Iniciando generación del PDF...');
  
  // Crear directorio PDF si no existe
  const pdfDir = path.join(__dirname, 'PDF');
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir);
    console.log('📁 Directorio PDF creado');
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Configurar viewport para presentación
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2
    });

    console.log('🌐 Navegando a la presentación...');
    
    // Navegar a la presentación local
    await page.goto('http://localhost:4322', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Esperar a que la primera slide cargue completamente
    await new Promise(resolve => setTimeout(resolve, 3000));

    const slides = [];
    const totalSlides = 15; // Total de slides en la presentación

    console.log(`📸 Capturando ${totalSlides} slides...`);

    // Capturar cada slide
    for (let i = 0; i < totalSlides; i++) {
      console.log(`  Slide ${i + 1}/${totalSlides}...`);
      
      // Esperar a que las animaciones se completen
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Tomar screenshot
      const screenshot = await page.screenshot({
        type: 'png',
        fullPage: false
      });
      
      slides.push(screenshot);
      
      // Navegar a la siguiente slide (excepto en la última)
      if (i < totalSlides - 1) {
        await page.keyboard.press('ArrowDown');
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    console.log('📄 Generando PDF combinado...');

    // Navegar a una página en blanco para el PDF
    await page.goto('data:text/html,<!DOCTYPE html><html><head><style>body{margin:0;padding:0;background:#2d3561;}</style></head><body></body></html>');

    // Generar HTML con todas las slides
    let htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            background: #2d3561;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }
          .page {
            page-break-after: always;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background: linear-gradient(135deg, #2d3561 0%, #3a2846 100%);
          }
          .page:last-child {
            page-break-after: auto;
          }
          .slide-content {
            width: 90%;
            height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
          }
          .slide-number {
            position: absolute;
            bottom: 20px;
            right: 20px;
            color: rgba(255, 255, 255, 0.5);
            font-size: 14px;
          }
          h1 { font-size: 3em; margin-bottom: 0.5em; }
          h2 { font-size: 2.5em; margin-bottom: 0.5em; color: #ffd89b; }
          h3 { font-size: 1.8em; margin-bottom: 0.5em; color: #667eea; }
          p { font-size: 1.2em; line-height: 1.6; margin: 0.5em 0; }
        </style>
      </head>
      <body>
    `;

    // Títulos de las slides
    const slideTitles = [
      'Labsis Expert - El Futuro del Laboratorio Clínico',
      'El Desafío Actual',
      'La Solución: Autovalidación Inteligente',
      'Diagnóstico Asistido por IA',
      'Bases de Datos Vectoriales',
      'Implementación en Labsis Expert',
      'Beneficios Clave para TI',
      '¿Cómo Funciona el Motor de Validación?',
      'Caso de Éxito - Hospital San Carlos',
      'Integración Simple',
      'IA Responsable',
      'ROI y Valor',
      'Próximos Pasos',
      'Testimonios',
      'Contacto - DT DIAGNOSTICOS SA DE CV'
    ];

    // Crear una página por cada slide
    slideTitles.forEach((title, index) => {
      htmlContent += `
        <div class="page">
          <div class="slide-content">
            <h2>${title}</h2>
            <p style="color: #ffd89b; margin-top: 2em;">
              Esta presentación fue diseñada para ser vista de forma interactiva.
              Para la experiencia completa, visite la versión web.
            </p>
          </div>
          <div class="slide-number">${index + 1} / ${totalSlides}</div>
        </div>
      `;
    });

    htmlContent += `
      </body>
      </html>
    `;

    // Establecer el contenido HTML
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });

    // Generar el PDF
    const pdfPath = path.join(pdfDir, 'Labsis-Expert-Presentacion.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    });

    console.log(`✅ PDF generado exitosamente: ${pdfPath}`);
    
    // También generar un PDF con screenshots
    console.log('🖼️ Generando PDF con capturas de pantalla...');
    
    // Crear un HTML con las imágenes
    let screenshotHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .page {
            page-break-after: always;
            width: 100%;
            height: 100vh;
            position: relative;
            overflow: hidden;
          }
          .page:last-child {
            page-break-after: auto;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        </style>
      </head>
      <body>
    `;

    // Guardar screenshots temporalmente y agregarlas al HTML
    for (let i = 0; i < slides.length; i++) {
      const imgPath = path.join(pdfDir, `slide-${i + 1}.png`);
      fs.writeFileSync(imgPath, slides[i]);
      
      // Convertir a base64 para incrustar en el HTML
      const base64 = slides[i].toString('base64');
      screenshotHtml += `
        <div class="page">
          <img src="data:image/png;base64,${base64}" alt="Slide ${i + 1}">
        </div>
      `;
    }

    screenshotHtml += `
      </body>
      </html>
    `;

    // Crear el PDF con screenshots
    await page.setContent(screenshotHtml, {
      waitUntil: 'networkidle0'
    });

    const screenshotPdfPath = path.join(pdfDir, 'Labsis-Expert-Presentacion-Visual.pdf');
    await page.pdf({
      path: screenshotPdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    });

    console.log(`✅ PDF visual generado: ${screenshotPdfPath}`);

    // Limpiar archivos temporales de screenshots
    for (let i = 0; i < slides.length; i++) {
      const imgPath = path.join(pdfDir, `slide-${i + 1}.png`);
      if (fs.existsSync(imgPath)) {
        fs.unlinkSync(imgPath);
      }
    }

    console.log('🎉 Proceso completado exitosamente!');
    console.log(`📂 Los PDFs se encuentran en: ${pdfDir}`);

  } catch (error) {
    console.error('❌ Error generando PDF:', error);
  } finally {
    await browser.close();
  }
}

// Ejecutar la función
generatePDF().catch(console.error);