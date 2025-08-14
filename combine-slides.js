import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function combineSlides() {
  console.log('🖼️ Combinando slides en PDF visual...');
  
  const pdfDir = path.join(__dirname, 'PDF');
  
  // Verificar que existan las imágenes
  const slideFiles = [];
  for (let i = 1; i <= 15; i++) {
    const imgPath = path.join(pdfDir, `slide-${i}.png`);
    if (fs.existsSync(imgPath)) {
      slideFiles.push(imgPath);
    }
  }
  
  if (slideFiles.length === 0) {
    console.error('❌ No se encontraron archivos de slides');
    return;
  }
  
  console.log(`📊 Encontradas ${slideFiles.length} slides`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Crear HTML con las imágenes
    let html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            background: #2d3561;
          }
          .page {
            page-break-after: always;
            width: 297mm;
            height: 210mm;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #2d3561;
          }
          .page:last-child {
            page-break-after: auto;
          }
          img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
          .slide-number {
            position: absolute;
            bottom: 10mm;
            right: 10mm;
            color: rgba(255, 255, 255, 0.7);
            font-family: Arial, sans-serif;
            font-size: 12pt;
            background: rgba(0, 0, 0, 0.5);
            padding: 5px 10px;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
    `;
    
    // Agregar cada imagen
    for (let i = 0; i < slideFiles.length; i++) {
      const imgData = fs.readFileSync(slideFiles[i]);
      const base64 = imgData.toString('base64');
      
      html += `
        <div class="page">
          <img src="data:image/png;base64,${base64}" alt="Slide ${i + 1}">
          <div class="slide-number">Slide ${i + 1} / ${slideFiles.length}</div>
        </div>
      `;
    }
    
    html += `
      </body>
      </html>
    `;
    
    // Crear un archivo HTML temporal
    const tempHtmlPath = path.join(pdfDir, 'temp-slides.html');
    fs.writeFileSync(tempHtmlPath, html);
    
    // Navegar al archivo HTML
    await page.goto(`file://${tempHtmlPath}`, {
      waitUntil: 'networkidle0'
    });
    
    // Generar el PDF
    const pdfPath = path.join(pdfDir, 'Labsis-Expert-Presentacion-Visual.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      }
    });
    
    console.log(`✅ PDF visual generado: ${pdfPath}`);
    
    // Limpiar archivo temporal
    fs.unlinkSync(tempHtmlPath);
    
    // Limpiar imágenes PNG si se desea
    const cleanupImages = false; // Cambiar a true para eliminar las imágenes
    if (cleanupImages) {
      for (const imgPath of slideFiles) {
        fs.unlinkSync(imgPath);
      }
      console.log('🧹 Imágenes temporales eliminadas');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await browser.close();
  }
  
  console.log('✨ Proceso completado!');
}

// Ejecutar
combineSlides().catch(console.error);