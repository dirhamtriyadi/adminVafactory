import jsPDF from "jspdf";
import "jspdf-autotable";
import { getToday, getItem } from "../../../../components";
const InvoicePenjualan = (data = "") => {
  const doc = new jsPDF("p", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];
  let finalY = 35;

  doc.setFontSize(15);
  doc.text("INVOICE PENJUALAN", 14, 15);
  doc.setFontSize(20);
  doc.text("VA Factory", 145, 15);
  doc.setFontSize(8);
  doc.text("Tanggal            : " + data.date, 14, 20);
  doc.text("Nama               : " + data.customerName, 14, 25);
  doc.text(
    "Jl. Raya Cicalengka - Majalaya, Cikuya, Kec. Cicalengka, Kabupaten Bandung, Jawa Barat 40395".slice(
      0,
      40
    ),
    145,
    20
  );
  doc.text("Kabupaten Bandung, Jawa Barat 40395".slice(0, 40), 145, 25);

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
      item.nama_barang,
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

    // `${sub_qty}`,
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
  finalY = doc.autoTableEndPosY() + 3;
  tableRows = [];
  const pages = doc.internal.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.width; //Optional
  const pageHeight = doc.internal.pageSize.height; //Optional
  doc.setFontSize(10); //Optional
  for (let j = 1; j < pages + 1; j++) {
    let horizontalPos = pageWidth / 2; //Can be fixed number
    let verticalPos = pageHeight - 10; //Can be fixed number
    doc.setPage(j);
    doc.text(`${j} of ${pages}`, horizontalPos, verticalPos, {
      align: "center",
    });
  }
  doc.save(`Invoice Penjualan.pdf`);
};

export default InvoicePenjualan;
