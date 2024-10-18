import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import PDFTaxInvoiceFile from "./PDFTaxInvoiceFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import TableHead from "@mui/material/TableHead";

function Row(props) {
	const { customer } = props;
	const [open, setOpen] = useState(false);

	const handleDelete = () => {
		const confirmDelete = window.confirm(
			"You've requested to delete a transaction from the customer's history. This action is irreversible.\n\nAre you sure you want to proceed?"
		);
		if (confirmDelete) {
			// Perform deletion logic here
			console.log("Transaction deleted");
		}
	};

	return (
		<>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell>{customer.firstName}</TableCell>
				<TableCell>{customer.lastName}</TableCell>
				<TableCell align="right">{customer.address}</TableCell>
				<TableCell align="right">{customer.phone}</TableCell>
				<TableCell align="right">{customer.email}</TableCell>
			</TableRow>
			{/*----------------------------------------------------------------------*/}
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								History
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Type</TableCell>
										<TableCell>Date</TableCell>
										<TableCell>File</TableCell>
										<TableCell></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{customer.documents.taxInvoices.map((data) => (
										<TableRow key={index}>
											<TableCell>{`${data.payDate}`}</TableCell>
											<TableCell component="th" scope="row">
												{`${data.isOpen}`}
											</TableCell>
											<TableCell>
												<PDFDownloadLink
													document={<PDFTaxInvoiceFile />}
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
												{data.isOpen}
											</TableCell>
											<TableCell>
												<IconButton
													aria-label="delete"
													size="small"
													color="primary"
													onClick={handleDelete}
												>
													<DeleteOutlinedIcon />
												</IconButton>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}

// // Prop types for Row component
// Row.propTypes = {
//   row: PropTypes.shape({
//     firstName: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         date: PropTypes.string.isRequired,
//         customerId: PropTypes.string.isRequired,
//         file: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
// };

// // Sample data
// const rows = [
//   createData("Inbar", "Zafar", "123 Main St", "555-1234", "inbar@example.com"),
//   createData("Roy", "Rubin", "456 Elm St", "555-5678", "roy@example.com"),
//   createData(
//     "Yosi",
//     "Ben Shushan",
//     "789 Oak St",
//     "555-9876",
//     "yosi@example.com"
//   ),
//   createData("Ben", "Mendelson", "101 Pine St", "555-4321", "ben@example.com"),
//   createData("Noa", "Sharabi", "202 Cedar St", "555-8765", "noa@example.com"),
// ];

export default Row;
