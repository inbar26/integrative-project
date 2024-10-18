import React, { useState, useEffect } from "react";
import {
	Page,
	Text,
	Image,
	Document,
	StyleSheet,
	View,
} from "@react-pdf/renderer";
import {
	Box,
	Avatar,
	Grid,
	Paper,
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import OriginalOnTransparent from "../assets/OriginalOnTransparent.png";
import Signature from "../assets/Signature.png";
import Typography from "antd/es/typography/Typography";

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	title: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: "20px",
	},
	titleTypeDoc: {
		fontSize: 15,
		textAlign: "left",
		fontFamily: "Times-Roman",
	},
	titleDate: {
		textAlign: "right",
		fontSize: 15,
		fontFamily: "Times-Roman",
	},
	underline: {
		borderBottom: 1,
		borderColor: "black",
	},
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
	},
	headerRight: {
		textAlign: "right",
	},
	headerLeft: {
		textAlign: "left",
	},
	text: {
		fontSize: 10,
		fontFamily: "Times-Roman",
		marginRight: "auto",
		fontStyle: "bold",
	},
	textNotes: {
		fontSize: 10,
		fontFamily: "Times-Roman",
		marginTop: "100px",
	},
	textSignature: {
		fontSize: 10,
		fontFamily: "Times-Roman",
		marginTop: "100px",
		textAlign: "right",
		flexDirection: "column",
		alignItems: "flex-end",
	},
	textDescription: {
		textAlign: "center",
		fontSize: 14,
		marginTop: "20px",
	},
	textTotal: {
		fontSize: 10,
		fontFamily: "Times-Roman",
		marginRight: "auto",
		fontStyle: "bold",
		textAlign: "right",
	},
	image: {
		width: 150, // Adjust width
		height: 50, // Adjust height
		alignSelf: "center", // Center the image horizontally
		marginVertical: 15,
		marginHorizontal: 100,
	},
	imageSignature: {
		marginTop: 2,
		width: 100, // Adjust width
		height: 50, // Adjust height
	},
	pageNumber: {
		position: "absolute",
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: "center",
		color: "grey",
		fontFamily: "Times-Roman",
	},
	table: {
		//סגנון עבור הטבלה
		display: "table",
		width: "auto",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#bfbfbf",
		borderRightWidth: 0,
		borderBottomWidth: 0,
		marginVertical: 10,
		marginTop: 40,
	},
	tableRow: {
		//סגנון עבור שורה בטבלה
		flexDirection: "row",
	},
	tableColHeader: {
		//סגנון עבור העמודות בטבלה
		width: "33.33%",
		backgroundColor: "rgb(14, 186, 151)",
		color: "white",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#bfbfbf",
		padding: 8,
		textAlign: "left",
	},
	tableCol: {
		//סגנון עבור העמודות בטבלה
		width: "33.33%",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#bfbfbf",
		padding: 8,
		textAlign: "left",
	},
	tableCell: {
		//סגנון עבור התאים של הטבלה
		margin: 5,
		fontSize: 10,
	},
	tableCellHeader: {
		//סגנון עבור התאים של הטבלה
		margin: 5,
		fontSize: 10,
		fontWeight: "bold",
	},
	tableRowEven: {
		//סגנון עבור שורה זוגית בטבלה
		backgroundColor: "#f2f2f2",
	},
	secondaryText: {
		fontSize: 10,
		color: "gray",
		marginLeft: 10,
	},
});
const PDFTaxInvoiceFile = (props) => {
	const pageColors = ["#f5f5f5", "#f5f5f5", "#f5f5f5"];
	const pages = [
		{
			text: "From:\n",
			textB:
				"FinRize - Rise to financial Success\nTel-Aviv, Mivtsa Kadesh St 38\n",
			image: OriginalOnTransparent,
			imageSignature: Signature,
			textC: "To:\n",
		},
	];

	const [total, setTotal] = useState(0);
	useEffect(() => {
		const calculateTotal = () => {
			const totalAmount = props.formObject.objectDetails.productArray.reduce(
				(acc, product) =>
					acc + Number(product.unitPrice) * Number(product.quantity) * 1.17,
				0
			);
			setTotal(totalAmount);
		};
		calculateTotal();
	}, [props.formObject.objectDetails.productArray]);
	return (
		<>
			<Document>
				{pages.map((page, index) => {
					return (
						<Page
							key={index}
							style={{ ...styles.body, backgroundColor: pageColors[index] }}
						>
							<Image style={styles.image} src={page.image} />
							<View style={styles.header}>
								<View style={styles.headerLeft}>
									<Text style={styles.text}>From:</Text>
									<Text style={styles.text}>
										FINRIZE - Rise to financial Success
									</Text>
									<Text style={styles.text}>Tel-Aviv, Mivtsa kadesh 38 St</Text>
									<Text style={styles.text}>Email: finrize@gmail.com</Text>
									<Text style={styles.text}>Phone: +972 50-8900123</Text>
								</View>
								<View style={styles.headerRight}>
									<Text style={styles.text}>
										To: {props.formObject.objectDetails.customer}
									</Text>
									{/* HERE WE NEED TO ENTER THE REAL DETAILS */}
								</View>
							</View>
							<View style={[styles.title, styles.underline]}>
								<View style={styles.titleTypeDoc}>
									<Text> Tax Invoice #</Text>
									{/* HERE WE NEED TO ENTER THE REAL DETAILS */}
								</View>
								<View style={styles.titleDate}>
									<Text>
										Production Date: {props.formObject.objectDetails.createDate}
									</Text>
									{/* HERE WE NEED TO ENTER THE REAL DETAILS */}
								</View>
							</View>
							<View style={styles.title}>
								<View style={styles.text}>
									<Text>
										{" "}
										Payment Due Date:{" "}
										{props.formObject.objectDetails.paymentDueDate}
									</Text>
								</View>
							</View>
							<Text style={styles.textDescription}>
								Document Description:{" "}
								{props.formObject.objectDetails.documentDescription}
							</Text>
							<View style={styles.table}>
								<View style={styles.tableRow}>
									<View style={styles.tableColHeader}>
										<Text style={styles.tableCellHeader}>
											Product Description
										</Text>
									</View>
									<View style={styles.tableColHeader}>
										<Text style={styles.tableCellHeader}>Quantity</Text>
									</View>
									<View style={styles.tableColHeader}>
										<Text style={styles.tableCellHeader}>Unit Price</Text>
									</View>
									<View style={styles.tableColHeader}>
										<Text style={styles.tableCellHeader}>Total</Text>
									</View>
								</View>
								{/* ================================================================================================ */}
								{/* row for product */}
								{props.formObject.objectDetails.productArray.map(
									(product, index) => (
										<View style={styles.tableRow} key={index}>
											<View style={styles.tableCol}>
												<Text style={styles.tableCellHeader}>
													{product.name}
												</Text>
											</View>
											<View style={styles.tableCol}>
												<Text style={styles.tableCellHeader}>
													{product.quantity}
												</Text>
											</View>
											<View style={styles.tableCol}>
												<Text style={styles.tableCellHeader}>
													{product.unitPrice}
												</Text>
											</View>
											<View style={styles.tableCol}>
												<Text style={styles.tableCellHeader}>
													{`${
														Number(product.unitPrice) * Number(product.quantity)
													} ${product.currency}`}
												</Text>
												<Text style={styles.secondaryText}>
													{`After Vat: ${(
														Number(product.unitPrice) *
														Number(product.quantity) *
														1.17
													).toFixed(2)}`}
												</Text>
											</View>
										</View>
									)
								)}

								{/* ================================================================================================ */}

								{/* HERE WE NEED TO ENTER THE REAL ITEMS */}
							</View>
							<View style={styles.text}>
								<Text style={styles.textTotal}>
									{`Total: ${total} ${props.formObject.objectDetails.productArray[0].currency}`}{" "}
								</Text>
							</View>
							<View style={styles.title}>
								<View style={styles.textNotes}>
									<Text>Notes:</Text>

									<Text> {props.formObject.objectDetails.notes}</Text>
									{/* HERE WE NEED TO ENTER THE REAL ITEMS */}
								</View>
								<View style={styles.textSignature}>
									<Text> Signature</Text>
									<Image
										style={styles.imageSignature}
										src={page.imageSignature}
									/>
								</View>
							</View>
							<Text
								style={styles.pageNumber}
								render={({ pageNumber, totalPages }) =>
									`${pageNumber} / ${totalPages}`
								}
							/>
						</Page>
					);
				})}
			</Document>
		</>
	);
};
export default PDFTaxInvoiceFile;
