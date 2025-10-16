import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import torque from "../../img/torquelogo.jpg";

export const crearPdf = (data) => {
  let datos = {
    nombre: "",
    ruc: "",
    producto: "",
    codigo: "",
    cantidad: "",
    precioUnitario: "",
    fechaEmision: "",
    numeroCotizacion: "",
    observaciones: "",
  };

  datos = { ...data };

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
  doc.text(`${data.nombre}`, 34, 42);

  doc.text("RUC  ", 14, 47);
  doc.text(`:`, 31, 47);
  doc.text(`${data.ruc}`, 34, 47);

  doc.text(`DIRECCION`, 14, 52);
  doc.text(`:`, 31, 52);

  doc.text(`FECHA EMISION`, 130, 42);
  doc.text(`:`, 160, 42);

  doc.text("TIPO DE MONEDA", 130, 47);
  doc.text(`:`, 160, 47);

  doc.text(`METODO DE PAGO`, 130, 52);
  doc.text(`:`, 160, 52);

  // --- TABLA ---
  const columns = [
    "N° item",
    "Código",
    "Descripción",
    "Cantidad",
    "Precio",
    "Subtotal",
  ];
  const rows = [
    [1, "TOR-001", "Perno 1/2 cabeza hexagonal", 10, "S/ 2.50", "S/ 25.00"],
    [2, "TOR-002", "Tuerca M12 galvanizada", 10, "S/ 1.50", "S/ 15.00"],
    [3, "TOR-003", "Arandela plana M12", 10, "S/ 0.50", "S/ 5.00"],
  ];

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
      2: { cellWidth: 75 },
      3: { halign: "right", cellWidth: 20 },
      4: { halign: "right", cellWidth: 25 },
      5: { halign: "right", cellWidth: 25 },
    },
  });

  // --- POSICIÓN FINAL DE LA TABLA ---
  const finalY = doc.lastAutoTable.finalY + 10;

  // --- OBSERVACIONES ---
  doc.text("Observaciones :", 14, finalY);

  // --- TOTALES ---
  const yTotales = finalY;
  doc.setDrawColor(199, 199, 199);
  doc.setLineWidth(0.2);
  doc.roundedRect(145, yTotales, 45, 25, 1.5, 1.5);
  doc.setFontSize(9);
  doc.text(`SUBTOTAL`, 147.5, yTotales + 5);
  doc.text(": ", 170, yTotales + 5);
  doc.setLineWidth(0.2);

  doc.line(145, yTotales + 8, 190, yTotales + 8);
  doc.text(`IGV (18%)`, 147.5, yTotales + 13);
  doc.text(": ", 170, yTotales + 13);
  doc.setLineWidth(0.2);

  doc.line(145, yTotales + 16, 190, yTotales + 16);
  doc.text(`TOTAL`, 147.5, yTotales + 22);
  doc.text(": ", 170, yTotales + 22);
  doc.setLineWidth(0.2);

  doc.line(166, yTotales, 166, yTotales + 25);

  // --- GUARDAR PDF ---
  doc.save("cotizacion.pdf");
};
