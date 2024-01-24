import jsPDF from "jspdf";
import "jspdf-autotable";
import { getToday, getItem } from "../../../../components";
const invoiceCustomer = (data = "") => {
  const doc = new jsPDF("p", "mm", [148, 105]);
  let tableRows = [];
  let tableColumn = [];
  let finalY = 35;

  doc.setFontSize(15);
  doc.setFontSize(20);
  doc.text("VA Factory", 52, 15, "center");
  doc.setFontSize(8);
  doc.text("Tanggal            : " + data.date, 14, 20);
  doc.text("Nama               : " + data.customerName, 14, 25);
  doc.text("No Faktur        : " + data.transaction_number, 14, 30);

  doc.setFontSize(10);

  doc.setProperties({
    title: "INVOICE PENJUALAN",
  });

  tableColumn = [
    [
      {
        content: `Barang`,
      },
      {
        content: `Kuantitas`,
        styles: {
          halign: "right",
        },
      },
      {
        content: `Harga`,
        styles: {
          halign: "right",
        },
      },

      {
        content: `Jumlah`,
        styles: {
          halign: "right",
        },
      },
    ],
  ];

  //   ISI
  data.databarang.forEach((item) => {
    let row = [
      {
        content: item.nama_barang,
      },
      {
        content: item.qty,
        styles: {
          halign: "right",
        },
      },
      {
        content: parseInt(item.price).toLocaleString("kr-KO"),
        styles: {
          halign: "right",
        },
      },
      {
        content: parseInt(item.subtotal).toLocaleString("kr-KO"),
        styles: {
          halign: "right",
        },
      },
    ];
    tableRows.push(row);
  });

  let footer = [
    {
      content: `Total`,
      styles: {
        halign: "center",
        fillColor: "#E8E5E5",
        textColor: "#000",
      },
    },
    {
      content: `${data.databarang.reduce((a, b) => a + parseInt(b.qty),0).toLocaleString("kr-KO")}`,
      styles: {
        fillColor: "#E8E5E5",
        textColor: "#000",
        halign: "right",
      },
    },
    {
      content: `${data.databarang.reduce((a, b) => a + parseInt(b.price),0).toLocaleString("kr-KO")}`,
      styles: {
        fillColor: "#E8E5E5",
        textColor: "#000",
        halign: "right",
      },
    },
    {
      content: `${data.databarang.reduce((a, b) => a + parseInt(b.subtotal),0).toLocaleString("kr-KO")}`,
      styles: {
        fillColor: "#E8E5E5",
        textColor: "#000",
        halign: "right",
      },
    },
  ];
  tableRows.push(footer);

  let printed = [
    {
      colSpan: 6,
      content: `Printed By ${getItem("userdata").name} / ${getToday()}`,
      styles: {
        fontStyle: "italic",
        textColor: "#000",
      },
    },
  ];
  tableRows.push(printed);

  doc.autoTable({
    head: tableColumn,
    body: tableRows,
    startY: finalY,
    theme: "plain",
    rowPageBreak: "avoid",
    margin: { top: 10 },
    bodyStyles: {
      fontSize: 8,
    },
    headStyles: {
      fontSize: 8,
      textColor: "#000",
      fillColor: "#E8E5E5",
    },
  });
  finalY = doc.lastAutoTable.finalY + 10;
  tableRows = [];
  // doc.internal.pageSize.height = finalY + 100;
  doc.save(`Invoice Penjualan Customer.pdf`);
};

export default invoiceCustomer;
