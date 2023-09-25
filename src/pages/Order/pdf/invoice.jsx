import jsPDF from "jspdf";
import "jspdf-autotable";
import { getToday, getItem } from "../../../components";

const InvoiceOrder = (data = "", qr) => {
    // console.log(data, qr);
    const doc = new jsPDF("p", "mm", [297, 210]);
    let tableRows = [];
    let tableColumn = [];
    let rows = []
    // Barcode
    // let finalY = 75;
    let finalY = 37;
    let y = 0;

    doc.setFontSize(15);
    doc.text("INVOICE ORDER", 14, 15);
    doc.setFontSize(20);
    doc.text("VA Factory", 145, 15);
    doc.setFontSize(8);
    doc.text("Tanggal", 14, 20);
    doc.text(": "+ data.order_date, 40, 20);
    doc.text("Nama Customer", 14, 25);
    doc.text(": " + data.customer.name, 40, 25);
    doc.text(
        "Jl. Raya Cicalengka - Majalaya, Cikuya, Kec. Cicalengka, Kabupaten Bandung, Jawa Barat 40395".slice(
            0,
            40
        ),
        145,
        20
    );
    doc.text("Kabupaten Bandung, Jawa Barat 40395".slice(0, 40), 145, 25);
    doc.text("No Faktur", 14, 30);
    doc.text(": " + data.order_number, 40, 30);
    // doc.addImage(qr, "PNG", 14, 37, 30, 30);
    doc.setFontSize(10);
    doc.setProperties({
        title: "INVOICE ORDER",
    });

    // Head Table
    tableColumn = [
        [
            {
                content: `Nama Order`,
            },
            {
                content: `Kategori`
            },
            {
                content: `Jumlah`
            },
            {
                content: `Harga`
            },
            {
                content: `Total Harga`
            },
            {
                content: `Diskon`
            },
            {
                content: `Total`
            },
            // {
            //     content: `Deskripsi`
            // },
            // {
            //     content: `Tanggal Order`
            // }
        ]
    ]

    // Body Table
    rows = [
        data.name,
        data.print_type.name,
        data.qty,
        parseInt(data.price).toLocaleString("kr-KO"),
        parseInt(data.total).toLocaleString("kr-KO"),
        parseInt(data.discount).toLocaleString("kr-KO"),
        parseInt(data.subtotal).toLocaleString("kr-KO"),
        // data.description,
        // data.order_date
    ]
    tableRows.push(rows)
    // data.map((item) => {
    //     const rows = [
    //         item.order_number,
    //         item.customer_name,
    //         item.print_type,
    //         item.quantity,
    //         item.price,
    //         item.total_price,
    //         item.discount,
    //         item.sub_total,
    //         item.order_name,
    //         item.order_date
    //     ]
    //     tableRows.push(rows)
    // })

    doc.setFont(undefined, "bold");
    // finalY = doc.autoTableEndPosY() + 3
    doc.text("Order", 14, finalY);
    y = finalY + 3
    doc.autoTable({
        head: tableColumn,
        body: tableRows,
        startY: y,
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
        }
    })
    // Transaction
    finalY = doc.autoTableEndPosY() + 3
    doc.setFont(undefined, "bold");
    doc.text("Transaksi", 14, finalY);
    y = finalY + 3
    tableColumn = [
        [
            {
                content: `Penerima`
            },
            {
                content: `Keterangan`
            },
            {
                content: `Metode Pembayaran`
            },
            {
                content: `Tanggal Pembayaran`
            },
            {
                content: `Jumlah Pembayaran`
            }
        ]
    ]
    tableRows = []
    let total = 0
    data.orderTransaction.map((item) => {
        console.log(item);
        let rows = [
            item.user.name,
            item.description,
            item.payment_method.name,
            item.date,
            parseInt(item.amount).toLocaleString("kr-KO")
        ]
        tableRows.push(rows)
        total = total + item.amount
    })
    let totalFooter = [
        {
            colSpan: 4,
            content: `Total`,
            styles: {
                halign: "right",
                fontStyle: "bold",
            }
        },
        {
            content: parseInt(total).toLocaleString("kr-KO"),
        }
    ]
    tableRows.push(totalFooter)
    let sisaFooter = [
        {
            colSpan: 4,
            content: `Sisa Tagihan`,
            styles: {
                halign: "right",
                fontStyle: "bold",
            }
        },
        {
            content: parseInt(data.subtotal - total).toLocaleString("kr-KO"),
        }
    ]
    tableRows.push(sisaFooter)
    let printed = [
        {
            colSpan: 9,
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
        startY: y,
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
        }
    })
    // Tracking
    // finalY = doc.autoTableEndPosY() + 3
    // doc.setFont(undefined, "bold");
    // doc.text("Tracking", 14, finalY);
    // tableColumn = [
    //     [
    //         {
    //             content: `Proses`
    //         },
    //         {
    //             content: `Keterangan`
    //         },
    //         {
    //             content: `Status`
    //         },
    //         {
    //             content: `Tanggal`
    //         }
    //     ]
    // ]
    // tableRows = []
    // data.orderTracking.map((item) => {
    //     let rows = [
    //         item.tracking.name,
    //         item.description,
    //         item.status === 1 ? "Selesai" : "Dalam Proses",
    //         item.date
    //     ]
    //     tableRows.push(rows)
    // })

    // y = finalY + 3
    // let printed = [
    //     {
    //         colSpan: 9,
    //         content: `Printed By ${getItem("userdata").name} / ${getToday()}`,
    //         styles: {
    //                 fontStyle: "italic",
    //                 textColor: "#000",
    //             },
    //         },
    //     ];
    // tableRows.push(printed);
    // doc.autoTable({
    //     head: tableColumn,
    //     body: tableRows,
    //     startY: y,
    //     theme: "plain",
    //     rowPageBreak: "avoid",
    //     margin: { top: 10 },
    //     bodyStyles: {
    //         fontSize: 8,
    //     },
    //     headStyles: {
    //         fontSize: 8,
    //         textColor: "#000",
    //         fillColor: "#E8E5E5",
    //     }
    // })
    tableRows = []
    const pages = doc.internal.getNumberOfPages();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    for (let i = 1; i < pages + 1; i++) {
        let horizontalPos = pageWidth / 2;
        let verticalPos = pageHeight / 10;
        doc.setPage(i);
        doc.text(`${i} of ${pages}`, horizontalPos, verticalPos, {
            align: "center",
          });
    }
    doc.save(`INVOICE ORDER.pdf`);

}

export default InvoiceOrder;