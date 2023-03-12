import jsPDF from "jspdf";
import "jspdf-autotable";
import { getToday, getItem } from "../../../../components";
const CetakLaporanUangKas = (data = "") => {
  const doc = new jsPDF("p", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];
  let finalY = 35;

  doc.setFontSize(15);
  doc.text("Laporan Uang Kas", 14, 15);
  doc.setFontSize(20);
  doc.text("VA Factory", 145, 15);
  doc.setFontSize(8);
  doc.text(
    "Jl. Raya Cicalengka - Majalaya, Cikuya, Kec. Cicalengka, Kabupaten Bandung, Jawa Barat 40395".slice(
      0,
      40
    ),
    145,
    20
  );
  doc.text("Kabupaten Bandung, Jawa Barat 40395".slice(0, 40), 145, 25);


  doc.setFontSize(10);

  doc.setProperties({
    title: "CetakLaporanUangKas",
  });

  tableColumn = [
    [
      {
        content: `USER ID`,
      },
      {
        content: `TANGGAL`,
      },
      {
        content: `DESKRIPSI`,
      },
      {
        content: `TIPE`,
      },
      {
        content: `NOMINAL`,
        styles: {
          halign: "right",
        },
      },
     
    ],
  ];

  //   ISI
  data.forEach((item) => {
    let row = [
      {
        content: item.user.name,
      },
      {
        content: item.transaction_date,
      },
      {
        content: item.cash_flow_type,
      },
      {
        content: item.description,
      },
      {
        content: Number(item.amount).toLocaleString('kr-KO'),
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
      colSpan : 4,
      styles: {
        halign: "center",
        fillColor: "#E8E5E5",
        textColor: "#000",
      },
    },
   
    {
      content: `${data.reduce((a, b) => a + Number(b.amount),0).toLocaleString("kr-KO")}`,
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
//   doc.save(`CetakLaporanUangKas.pdf`);
var string = doc.output("datauristring");
  var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
  var x = window.open();
  x.document.open();
  x.document.write(
    "<html><head><title>LAPORAN UANG KAS</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src=" +
      string +
      "></embed></body></html>"
  );
  x.document.write(embed);
};

export default CetakLaporanUangKas;
