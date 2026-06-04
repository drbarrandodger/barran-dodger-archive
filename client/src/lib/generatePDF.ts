import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export interface PDFMeta {
  title: string;
  filename: string;
}

export async function generatePagePDF(contentId: string, filename: string): Promise<void> {
  const style = document.createElement("style");
  style.id = "__pdf-hide__";
  style.textContent = `
    .fixed, .sticky,
    [data-pdf-hide],
    nav,
    .reading-progress-bar {
      display: none !important;
    }
    body {
      overflow: visible !important;
    }
  `;
  document.head.appendChild(style);

  await new Promise((r) => setTimeout(r, 120));

  try {
    const pageContent = document.getElementById(contentId) || document.getElementById("pdf-content") || document.body;

    const canvas = await html2canvas(pageContent, {
      scale: 1.5,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#09090b",
      logging: false,
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight,
    });

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = pdf.internal.pageSize.getHeight();

    const ratio = canvas.width / pdfW;
    const sliceHeightPx = Math.floor(pdfH * ratio);
    const totalPages = Math.ceil(canvas.height / sliceHeightPx);

    for (let i = 0; i < totalPages; i++) {
      if (i > 0) pdf.addPage();

      const srcY = i * sliceHeightPx;
      const srcH = Math.min(sliceHeightPx, canvas.height - srcY);

      const slice = document.createElement("canvas");
      slice.width = canvas.width;
      slice.height = srcH;
      const ctx = slice.getContext("2d")!;
      ctx.drawImage(canvas, 0, srcY, canvas.width, srcH, 0, 0, canvas.width, srcH);

      const imgData = slice.toDataURL("image/jpeg", 0.88);
      const sliceHeightMm = (srcH / ratio);
      pdf.addImage(imgData, "JPEG", 0, 0, pdfW, sliceHeightMm);
    }

    pdf.save(filename);
  } finally {
    document.getElementById("__pdf-hide__")?.remove();
  }
}
