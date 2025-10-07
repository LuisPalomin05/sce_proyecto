import jsPDF from "jspdf";

export const crearPdf = (data) => {
    const doc = new jsPDF();
    doc.text("Cotización", 14, 15);
    doc.save("cotizacion.pdf");
};

