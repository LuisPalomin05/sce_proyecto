import jsPDF from "jspdf";

export const crearPdf = (data) => {
  const doc = new jsPDF();

  // imagen de logo

  // titulo y texto de la cotizacion
  doc.text("PERNOS Y TUERCAS TORQUE-G46", 14, 15);
  doc.setFontSize(14);
  doc.text("CALLE HOLANDA 2250 URB. CHACRA RIOS NORTE - LIMA", 14, 20);
doc.setFontSize(14);
  doc.text("E-mail : ventas@torqueg46.com.pe  // Tel : 999999999", 14, 25);











  doc.save("cotizacion.pdf");
};
