import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import torque from "../../img/torquelogo.jpg";

export const crearPdf = (data) => {
  let datos = { ...data };

  const doc = new jsPDF();

  // --- LOGO ---
  doc.addImage(torque, "PNG", 8, 8, 30, 30);

  // --- TÍTULO Y CABECERA ---
  doc.setFontSize(14);
  doc.text("PERNOS Y TUERCAS TORQUE-G46 SAC", 50, 18);
  doc.setFontSize(8);
  doc.text("CALLE HOLANDA 2250 URB. CHACRA RIOS NORTE - LIMA", 56, 23);
  doc.text("E-mail : ventas@torqueg46.com.pe  // Tel : 999999999", 60, 27);

  // --- DATOS DEL DOCUMENTO (RUC / COTIZACIÓN) ---
  doc.setLineWidth(0.5);
  doc.roundedRect(155, 13, 45, 20, 2, 2);
  doc.setFontSize(10);
  doc.text(`R.U.C : 207030551312`, 160, 18);
  doc.text("COTIZACION", 165, 24);
  doc.text(`F001-00000`, 168, 30);

  // --- DATOS DEL CLIENTE ---
  doc.setFontSize(8);
  doc.text(`SEÑOR(ES) `, 14, 42);
  doc.text(`:`, 31, 42);
  doc.text(`${datos.nombreCliente}`, 34, 42);

  doc.text("RUC  ", 14, 47);
  doc.text(`:`, 31, 47);
  doc.text(`${datos.rucCliente}`, 34, 47);

  doc.text(`DIRECCION`, 14, 52);
  doc.text(`:`, 31, 52);
  doc.text(`${datos.direccion}`, 34, 52);

  doc.text(`FECHA EMISION`, 130, 42);
  doc.text(`:`, 160, 42);
  doc.text(`${datos.fechaEmision}`, 163, 42);

  console.log(datos.tipoMoneda);

  doc.text("TIPO DE MONEDA", 130, 47);
  doc.text(`:`, 160, 47);
  doc.text(`${datos.tipoMoneda}`, 163, 47);

  doc.text(`METODO DE PAGO`, 130, 52);
  doc.text(`:`, 160, 52);
  doc.text(`${datos.metodoPago}`, 163, 52);

  // --- TABLA ---
  const columns = [
    "N° item",
    "Código",
    "Descripción",
    "Cantidad",
    "Precio",
    "Subtotal",
  ];
  const rows = datos.producto.map((item, index) => [
    index + 1,
    item.codigo || "",
    item.descripcion || "",
    item.cantidad || 0,
    parseFloat(item.precioUnitario || 0).toFixed(2),
    parseFloat(item.total || 0).toFixed(2),
  ]);

  autoTable(doc, {
    head: [columns],
    body: rows,
    startY: 60, // Evita solapar el encabezado
    theme: "grid",
    headStyles: { fillColor: [63, 81, 181], textColor: 255, halign: "center" },
    styles: { fontSize: 8, cellPadding: 2 },
    columnStyles: {
      0: { halign: "center", cellWidth: 10 },
      1: { halign: "center", cellWidth: 18 },
      2: { cellWidth: 94 },
      3: { halign: "right", cellWidth: 20 },
      4: { halign: "right", cellWidth: 20 },
      5: { halign: "right", cellWidth: 20 },
    },
  });

  // --- POSICIÓN FINAL DE LA TABLA ---
  const finalY = doc.lastAutoTable.finalY + 10;
  const yTotales = finalY;

  // --- OBSERVACIONES ---
  doc.text("Observaciones :", 14, finalY - 2);
  doc.text(`${datos.observaciones}`, 16, finalY + 5);
  doc.setDrawColor(199, 199, 199);
  doc.setLineWidth(0.2);
  doc.roundedRect(14, yTotales, 134, 25, 1.5, 1.5);

  // --- TOTALES ---
  doc.setDrawColor(199, 199, 199);
  doc.setLineWidth(0.2);
  doc.roundedRect(150, yTotales, 45, 25, 1.5, 1.5);
  doc.setFontSize(9);
  doc.text(`SUBTOTAL`, 152.5, yTotales + 5);
  doc.text(": ", 171, yTotales + 5);
  doc.setLineWidth(0.2);

  doc.line(150, yTotales + 8, 195, yTotales + 8);
  doc.text(`IGV (18%)`, 152.5, yTotales + 13);
  doc.text(": ", 171, yTotales + 13);
  doc.setLineWidth(0.2);

  doc.line(150, yTotales + 16, 195, yTotales + 16);
  doc.text(`TOTAL`, 152.5, yTotales + 22);
  doc.text(": ", 171, yTotales + 22);
  doc.setLineWidth(0.2);

  const subtotal = datos.producto.reduce(
    (acc, item) => acc + Number(item.total || 0),
    0
  );
  const igv = +(subtotal * 0.18).toFixed(2);
  const total = +(subtotal + igv).toFixed(2);

  doc.text(`${subtotal.toFixed(2)}`, 177, yTotales + 5);
  doc.text(`${igv.toFixed(2)}`, 177, yTotales + 13);
  doc.text(`${total.toFixed(2)}`, 177, yTotales + 22);

  doc.line(173, yTotales, 173, yTotales + 25);

  // --- GUARDAR PDF ---
  doc.save("cotizacion.pdf");
};
