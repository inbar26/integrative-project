import React from "react";
import {
	Page,
	Text,
	Image,
	Document,
	StyleSheet,
	View,
} from "@react-pdf/renderer";
import OriginalOnTransparent from "../assets/OriginalOnTransparent.png";
import Signature from "../assets/Signature.png";

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
	},

	textNotes: {
		fontSize: 10,
		fontFamily: "Times-Roman",
		marginTop: "100px",
		textAlign: "left",
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
});

const PDFReceiptFile = (props) => {
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
										To: {props.receipt.customerName}
									</Text>
									{/* HERE WE NEED TO ENTER THE REAL DETAILS */}
								</View>
							</View>
							<View style={[styles.title, styles.underline]}>
								<View style={styles.titleTypeDoc}>
									<Text> Receipt #</Text>
									{/* HERE WE NEED TO ENTER THE REAL DETAILS */}
								</View>
								<View style={styles.titleDate}>
									<Text>Production Date: {props.receipt.createDate}</Text>
									{/* HERE WE NEED TO ENTER THE REAL DETAILS */}
								</View>
							</View>
							<Text style={styles.textDescription}>
								Document Description: {props.receipt.documentDescription}
							</Text>

							<View style={styles.table}>
								<View style={styles.tableRow}>
									<View style={styles.tableColHeader}>
										<Text style={styles.tableCellHeader}>Payment Type</Text>
									</View>
									<View style={styles.tableColHeader}>
										<Text style={styles.tableCellHeader}>Date</Text>
									</View>
									<View style={styles.tableColHeader}>
										<Text style={styles.tableCellHeader}>Price</Text>
									</View>
								</View>
								{/* row for product */}
								<View style={styles.tableRow}>
									<View style={styles.tableCol}>
										<Text style={styles.tableCellHeader}>
											{props.receipt.PaymentType}
										</Text>
									</View>
									<View style={styles.tableCol}>
										<Text style={styles.tableCellHeader}>
											{props.receipt.date}
										</Text>
									</View>
									<View style={styles.tableCol}>
										<Text style={styles.tableCellHeader}>
											{props.receipt.price}
										</Text>
									</View>
								</View>
								{/* HERE WE NEED TO ENTER THE REAL ITEMS */}
							</View>
							<View style={styles.title}>
								<View style={styles.textNotes}>
									<Text>Notes:</Text>
									<Text> {props.receipt.notes}</Text>
								</View>

								<View style={styles.textSignature}>
									<Text>Signature</Text>
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

export default PDFReceiptFile;
