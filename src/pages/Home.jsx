import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../styles/home.css";
import Header from "../components/Header";
import { PDFDownloadLink } from "@react-pdf/renderer";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PDFQuotationFile from "../components/PDFQuotationFile";
import PDFReceiptFile from "../components/PDFReceiptFile";
import PDFReceiptTaxInvoice from "../components/PDFReceiptTaxInvoice";
import PDFDeliveryNoteFile from "../components/PDFDeliveryNoteFile";
//import taxInvoiceArray from "/data/inbar.js";
import * as inbar from "/data/inbar.js";

function Home() {
	return (
		<>
			<Header />
			<img
				src="src/assets/OriginalOnTransparent.png"
				alt="FinRise Logo"
				className="logo"
			/>
			<div className="custom-text">
				<Typography variant="h6" gutterBottom>
					Take control of tracking income ,generating invoices and payment
					orders.
					<br /> FinRize is an easy-to-use tool that helps you manage your
					finances <br />
					efficiently and achieve your business goals.
				</Typography>
			</div>

			{/*		<h1> Receipt Tax Invoice</h1>
			<PDFDownloadLink
				document={
					<PDFReceiptTaxInvoice
						receiptTaxInvoice={inbar.receiptTaxInvoiceArray[0]}
					/>
				}
				fileName="FORM"
			>
				{({ loading }) =>
					loading ? (
						<IconButton
							disabled
							aria-label="download file"
							size="small"
							color="primary" // Set color to primary (blue)
						>
							<FileDownloadIcon fontSize="small" />
						</IconButton>
					) : (
						<IconButton
							aria-label="download file"
							size="small"
							color="primary" // Set color to primary (blue)
						>
							<FileDownloadIcon fontSize="small" />
						</IconButton>
					)
				}
			</PDFDownloadLink>
			 <h1>Receipt</h1>
      <PDFDownloadLink
        document={<PDFReceiptFile receipt={inbar.receiptArray[0]} />}
        fileName="FORM"
      >
        {({ loading }) =>
          loading ? (
            <IconButton
              disabled
              aria-label="download file"
              size="small"
              color="primary" // Set color to primary (blue)
            >
              <FileDownloadIcon fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              aria-label="download file"
              size="small"
              color="primary" // Set color to primary (blue)
            >
              <FileDownloadIcon fontSize="small" />
            </IconButton>
          )
        }
      </PDFDownloadLink>
      <h1>Quotation</h1>
      <PDFDownloadLink
        document={<PDFQuotationFile quotation={inbar.quotationArray[0]} />}
        fileName="FORM"
      >
        {({ loading }) =>
          loading ? (
            <IconButton
              disabled
              aria-label="download file"
              size="small"
              color="primary" // Set color to primary (blue)
            >
              <FileDownloadIcon fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              aria-label="download file"
              size="small"
              color="primary" // Set color to primary (blue)
            >
              <FileDownloadIcon fontSize="small" />
            </IconButton>
          )
        }
      </PDFDownloadLink>
      <h1>DeliveryNote</h1>
      <PDFDownloadLink
        document={
          <PDFDeliveryNoteFile deliveryNote={inbar.deliveryNoteArray[0]} />
        }
        fileName="FORM"
      >
        {({ loading }) =>
          loading ? (
            <IconButton
              disabled
              aria-label="download file"
              size="small"
              color="primary" // Set color to primary (blue)
            >
              <FileDownloadIcon fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              aria-label="download file"
              size="small"
              color="primary" // Set color to primary (blue)
            >
              <FileDownloadIcon fontSize="small" />
            </IconButton>
          )
        }
      </PDFDownloadLink> */}
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginBottom: 50,
					}}
					id="services"
				>
					<Box
						height={200}
						width={300}
						my={4}
						mx={2}
						display="flex"
						flexDirection="column"
						alignItems="center"
						marginTop={50}
						gap={4}
						p={2}
						sx={{
							border: "2px solid grey",
							textAlign: "center", // Align text in the center
						}}
					>
						<Typography
							variant="h5"
							sx={{ color: "#0eba97", fontFamily: "Arial", fontWeight: "bold" }}
						>
							Track Income
						</Typography>
						<Typography variant="body1">
							Monitor your financial performance with real-time tracking of
							income.
						</Typography>
					</Box>
					<Box
						height={200}
						width={300}
						my={4}
						mx={2}
						display="flex"
						flexDirection="column"
						alignItems="center"
						marginTop={50}
						gap={4}
						p={2}
						sx={{
							border: "2px solid grey",
							textAlign: "center", // Align text in the center
						}}
					>
						<Typography
							variant="h5"
							sx={{ color: "#0eba97", fontFamily: "Arial", fontWeight: "bold" }}
						>
							Create Invoices
						</Typography>
						<Typography variant="body1">
							Generate professional invoices quickly and easily, and keep your
							billing organized.
						</Typography>
					</Box>
					<Box
						height={200}
						width={300}
						my={4}
						mx={2}
						display="flex"
						flexDirection="column"
						alignItems="center"
						marginTop={50}
						gap={4}
						p={2}
						sx={{
							border: "2px solid grey",
							textAlign: "center", // Align text in the center
						}}
					>
						<Typography
							variant="h5"
							sx={{ color: "#0eba97", fontFamily: "Arial", fontWeight: "bold" }}
						>
							Financial Reports
						</Typography>
						<Typography variant="body1">
							Prepare detailed financial reports to understand your business
							better and make informed decisions.
						</Typography>
					</Box>
				</div>
				<Box
					id="contact"
					height={200}
					width={500}
					my={4}
					mx={2}
					display="flex"
					flexDirection="column"
					alignItems="center"
					gap={4}
					p={2}
					sx={{
						border: "2px solid grey",
						textAlign: "center", // Align text in the center
					}}
				>
					<Typography
						variant="h5"
						sx={{ color: "#0eba97", fontFamily: "Arial", fontWeight: "bold" }}
					>
						Contact Us
					</Typography>
					<Typography variant="body1" sx={{ lineHeight: 0 }}>
						Email: support@finrize.com
					</Typography>
					<Typography variant="body1" sx={{ lineHeight: 0 }}>
						Phone: +1 (234) 567-890
					</Typography>
					<Typography variant="body1" sx={{ lineHeight: 0 }}>
						Address: Tel-Aviv, Mivtsa kadesh 38 St
					</Typography>
				</Box>
			</div>
		</>
	);
}
export default Home;
