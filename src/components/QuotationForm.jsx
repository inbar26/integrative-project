import React, { useState, useEffect } from "react";
import {
	TextField,
	Grid,
	Button,
	Typography,
	Box,
	IconButton,
	FormControl,
	FormLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Alert } from "antd";
import "../styles/inputFix.css";
import ButtonPreview from "./ButtonPreview";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Delete from "@mui/icons-material/Delete";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import * as objectService from "../services/objectService";
import * as commandService from "../services/commandService";
import * as constants from "../utils/constants";
import Cookies from "js-cookie";
import { DatePicker } from "antd";
import * as helper from "../utils/helperFunctions";

const QuotationForm = (props) => {
	const currentUser = JSON.parse(Cookies.get(`${props.userEmail}`));

	console.log("currentUser after cookie: ");
	console.log(currentUser);
	const [errorList, setErrorList] = useState("");
	const [errorSubmit, setErrorSubmit] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const [inputCustomer, setInputCustomer] = useState("");

	//------------------------------------------------------------ Tax Details:
	const [newQuotation, setNewQuotation] = useState({
		customer: "",
		createDate: "",
		isOpen: false,
		documentDescription: "",
		productArray: [],
		notes: "",
	});

	const updateFormDetails = (details) => {
		setNewQuotation((prevForm) => ({
			...prevForm,
			...details,
		}));
	};
	const handleChangeQuotationDetails = (event) => {
		const { name, value } = event.target;
		updateFormDetails({ [name]: value });
	};
	const handleCustomerChange = (event, newValue) => {
		updateFormDetails({ customer: newValue });
	};
	//------------------------------------------------------------ Product Details:
	const [newProduct, setNewProduct] = useState({
		name: "",
		quantity: "",
		unitPrice: "",
		currency: constants.CURRENCY.DOLLAR,
		vat: false,
	});

	const updateProductDetails = (details) => {
		setNewProduct((prevDetails) => ({
			...prevDetails,
			...details,
		}));
	};
	const handleChangeProductDetails = (event) => {
		const { name, value } = event.target;
		updateProductDetails({ [name]: value });
	};
	const onAddProduct = () => {
		if (!newProduct.name || !newProduct.quantity || !newProduct.unitPrice) {
			setErrorList("Please fill out all product fields");
			return;
		}
		setErrorList("");
		newQuotation.productArray.push(newProduct);
		console.log(newQuotation.productArray);
		//reset input box's:
		setNewProduct({
			name: "",
			quantity: "0",
			unitPrice: "0",
			currency: constants.CURRENCY.DOLLAR,
			vat: false,
		});
	};
	const onDeleteProduct = (index) => {
		setNewQuotation((prevState) => ({
			...prevState,
			productArray: prevState.productArray.filter((_, i) => i !== index),
		}));
	};
	const handleDateChange = (date, dateString) => {
		updateFormDetails({ paymentDueDate: dateString });
	};
	//--------------------------------------------------------------------
	const [customerObjectArray, setCustomerObjectArray] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log("Product Array:", newQuotation.productArray);
	}, [newQuotation.productArray]);

	const handleSubmit = async () => {
		if (validateForm()) {
			setShowAlert(true); // Show the alert on form submission
			setErrorSubmit("");
			const currDate = helper.myGetCurrDate();
			newQuotation.createDate = currDate;
			await objectService.storeObjectInDataBase(
				currentUser,
				constants.CLASS_TYPE.FORM,
				constants.FORM_TYPE.QUOTE,
				newQuotation
			);
			//Reset NewTaxInvoice fields:
			setNewQuotation({
				customer: "",
				createDate: "",
				isOpen: false,
				documentDescription: "",
				productArray: [],
				notes: "",
			});
		} else {
			setErrorSubmit("Please fill out all required fields.");
			console.log("cannot submit");
		}
	};

	useEffect(() => {
		const fetchCustomers = async () => {
			try {
				const userObject = await objectService.getObjectByAlias(currentUser);
				console.log("userObject:");
				console.log(userObject);

				const commandDetails = {
					type: constants.CLASS_TYPE.CUSTOMER,
					userId: `${currentUser.userId.superapp}#${currentUser.userId.email}`,
					page: 0,
					size: 200,
				};
				const customers = await commandService.invokeCommand(
					constants.APP_NAME,
					constants.COMMAND_NAME.ALL_OBJECTS_BY_TYPE_AND_CREATED_BY,
					currentUser,
					userObject[0].objectId.id,
					commandDetails
				);

				console.log("customerObjectArray:");
				console.log(customers);
				setCustomerObjectArray(customers);
			} catch (error) {
				console.error("Error fetching customers:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchCustomers();
	}, []);

	const getCustomerNames = () => {
		const customerNames = [];

		customerObjectArray.map((customerObject) =>
			customerNames.push(customerObject.alias)
		);
		return customerNames;
	};
	const validateForm = () => {
		const { customer, productArray } = newQuotation;
		if (!customer || productArray.length === 0) {
			return false;
		}
		return true;
	};

	console.log(newQuotation);
	console.log(newProduct);

	const customerNames = getCustomerNames();
	return (
		<>
			<Box
				sx={{
					border: "2px solid #ddd",
					padding: 2,
					borderRadius: 2,
					marginTop: "10px",
					width: "100%", // Ensure the box takes the full width
				}}
			>
				<Typography variant="h5" gutterBottom>
					Document Details
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Autocomplete
							required
							name="customer"
							value={newQuotation.customer}
							inputValue={inputCustomer}
							onInputChange={(event, newInputValue) =>
								setInputCustomer(newInputValue)
							}
							onChange={handleCustomerChange}
							disablePortal
							id="combo-box-demo"
							options={customerNames}
							isOptionEqualToValue={(option, value) => option === value}
							getOptionLabel={(option) => option}
							renderInput={(params) => (
								<TextField {...params} label="Customer" />
							)}
						/>
					</Grid>
					{/* <Grid item xs={10} sm={10}>
            <Typography variant="body2" gutterBottom>
              Payment due Date:
            </Typography>
            <DatePicker onChange={handleDateChange} />
          </Grid> */}
					<Grid item xs={12}>
						<TextField
							label="Document Description"
							fullWidth
							className="custom-input"
							name="documentDescription"
							value={newQuotation.documentDescription}
							onChange={handleChangeQuotationDetails}
						/>
					</Grid>

					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							marginLeft: 3,
						}}
					>
						<Typography variant="h5" gutterBottom marginTop={5}>
							Add Items:
							<Typography color="gray" variant="body2">
								(At Least One)
							</Typography>
						</Typography>
					</Box>
					<Grid item xs={12}>
						<TextField
							required
							label="Service or Product Description"
							fullWidth
							className="custom-input"
							name="name"
							value={newProduct.name}
							onChange={handleChangeProductDetails}
						/>
					</Grid>
					<Grid item xs={6} sm={2}>
						<TextField
							required
							label="Quantity"
							type="number"
							defaultValue={1}
							fullWidth
							className="custom-input"
							name="quantity"
							value={newProduct.quantity}
							onChange={handleChangeProductDetails}
						/>
					</Grid>
					<Grid item xs={6} sm={2}>
						<TextField
							required
							label="Unit Price"
							type="number"
							defaultValue={0}
							fullWidth
							className="custom-input"
							name="unitPrice"
							value={newProduct.unitPrice}
							onChange={handleChangeProductDetails}
						/>
					</Grid>
					<Grid item xs={6} sm={2}>
						<FormControl>
							<FormLabel>Currency</FormLabel>
							<RadioGroup
								defaultValue={constants.CURRENCY.DOLLAR}
								name="currency"
								value={newProduct.currency}
								onChange={handleChangeProductDetails}
							>
								<Radio
									color="primary"
									orientation="vertical"
									size="sm"
									variant="outlined"
									value={constants.CURRENCY.DOLLAR}
									label={`Dollar ${constants.CURRENCY.DOLLAR}`}
								/>
								<Radio
									color="primary"
									orientation="vertical"
									size="sm"
									variant="outlined"
									value={constants.CURRENCY.EURO}
									label={`Euro ${constants.CURRENCY.EURO}`}
								/>
								<Radio
									color="primary"
									orientation="vertical"
									size="sm"
									variant="outlined"
									value={constants.CURRENCY.NIS}
									label={`Nis ${constants.CURRENCY.NIS}`}
								/>
							</RadioGroup>
						</FormControl>
					</Grid>

					<Grid item xs={6} sm={3}>
						<FormControl>
							<FormLabel>Vat</FormLabel>
							<RadioGroup
								defaultValue={false}
								name="vat"
								value={newProduct.vat}
								onChange={handleChangeProductDetails}
							>
								<Radio
									color="primary"
									orientation="vertical"
									size="sm"
									variant="outlined"
									value={false}
									label="Not Included"
								/>
								<Radio
									color="primary"
									orientation="vertical"
									size="sm"
									variant="outlined"
									value={true}
									label="Included"
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="outlined"
							startIcon={<AddIcon />}
							onClick={onAddProduct}
						>
							Add to Item List
						</Button>
					</Grid>
				</Grid>
				{errorList && (
					<Typography color="error" variant="body2">
						{errorList}
					</Typography>
				)}
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
					}}
				>
					<Typography variant="h5" gutterBottom marginTop={5}>
						Item List:
					</Typography>
				</Box>
				<Box
					sx={{
						display: "block",
						justifyContent: "flex-start",
						border: "2px solid #ddd",
						padding: 2,
						borderRadius: 2,
						marginTop: "10px",
						width: "100%", // Ensure the box takes the full width
					}}
				>
					{newQuotation.productArray.length === 0 ? (
						<Typography variant="body2">No Products Added</Typography>
					) : (
						newQuotation.productArray.map((product, index) => (
							<List key={index}>
								<ListItem
									endAction={
										<IconButton
											aria-label="Delete"
											size="sm"
											color="danger"
											onClick={() => onDeleteProduct(index)}
										>
											<Delete />
										</IconButton>
									}
								>
									<ListItemDecorator>
										{" "}
										<ReceiptLongOutlinedIcon />
										{` ${product.name}: ${Number(
											product.quantity
										)} (Quantity), ${Number(product.unitPrice)} (Unit Price) `}
									</ListItemDecorator>
								</ListItem>
							</List>
						))
					)}
				</Box>
			</Box>

			<Box
				sx={{
					border: "2px solid #ddd",
					padding: 2,
					borderRadius: 2,
					marginTop: 2,
					width: "100%", // Ensure the box takes the full width
				}}
			>
				<Typography variant="h5" gutterBottom>
					Notes in the Document
				</Typography>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<TextField
							label="Notes in the bottom of the document"
							multiline
							rows={4}
							fullWidth
							className="custom-input"
							name="notes"
							value={newQuotation.notes}
							onChange={handleChangeQuotationDetails}
						/>
					</Grid>
				</Grid>
			</Box>

			{showAlert && (
				<Alert
					message="Success"
					description="The Document was created successfully."
					type="success"
					showIcon
				/>
			)}

			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					marginLeft: 3,
					marginTop: 2,
				}}
			>
				<Box sx={{ mr: 2 }}>
					<ButtonPreview details={newQuotation} />
				</Box>
				<Box>
					<Button variant="contained" color="primary" onClick={handleSubmit}>
						Submit
					</Button>
				</Box>
				{errorSubmit && (
					<Typography color="error" variant="body2">
						{errorSubmit}
					</Typography>
				)}
			</Box>
		</>
	);
};

export default QuotationForm;
