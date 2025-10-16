import jsPDF from "jspdf";
import torque from "../../img/torque.png";

export const crearPdf = (data) => {
  const doc = new jsPDF();

  // imagen de logo
  doc.addImage(torque, "PNG", 8, 8, 30, 30);
  // titulo y texto de la cotizacion
  doc.setFontSize(14);
  doc.text("PERNOS Y TUERCAS TORQUE-G46 SAC", 50, 18);
  doc.setFontSize(8);
  doc.text("CALLE HOLANDA 2250 URB. CHACRA RIOS NORTE - LIMA", 56, 23);
  doc.setFontSize(8);
  doc.text("E-mail : ventas@torqueg46.com.pe  // Tel : 999999999", 60, 27);

  //datos del documento
  doc.setLineWidth(0.5);
  doc.roundedRect(155, 13, 45, 20, 2, 2);
  doc.setFontSize(10);
  doc.text(`R.U.C : 207030551312`, 160, 18);
  doc.setFontSize(10);
  doc.text("COTIZACION", 165, 24);
  doc.setFontSize(10);
  doc.text(`F001-00000`, 168, 30);

  //datos del cliente
  doc.setFontSize(8);
  doc.text(`SEÑOR(ES) : `, 14, 42);
  doc.text("RUC : ", 14, 47);
  doc.text(`DIRECCION : `, 14, 52);
  //!!
  doc.setFontSize(8);
  doc.text(`FECHA EMISION : `, 130, 42);
  doc.text("TIPO DE MONEDA : ", 130, 47);
  doc.text(`METODO DE PAGO : `, 130, 52);
  //!!

  //tabla de productos
  // const startY = 60;
  // const tableColumn = ["CANT.", "DESCRIPCION", "P.UNIT", "IMPORTE"];
  // const tableRows = [];
  // data.forEach((item) => {
  //   const itemData = [
  //     item.cantidad,
  //     item.descripcion,
  //     item.precioUnitario,
  //     item.importe
  //   ];
  //   tableRows.push(itemData);
  // });

  // doc.autoTable({
  //   startY: startY,
  //   head: [tableColumn],
  //   body: tableRows,
  // });

  //Observaciones y totales
  doc.text("Observaciones : ", 14, 250);

  //totales
  doc.roundedRect(145, 170, 45, 25, 2, 2);
  doc.text(`SUBTOTAL : `, 148, 175);
  doc.line(145,178,190,178);
  doc.text(`IGV (18%) : `, 148, 183.5);
    doc.line(145,186,190,186);

  doc.text(`TOTAL : `, 148, 192);
    doc.line(160,170,190,178);


  doc.save("cotizacion.pdf");
};
