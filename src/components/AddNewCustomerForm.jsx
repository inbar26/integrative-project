import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Zoom } from "@mui/material";
import { useLocation } from "react-router-dom";
import * as objectService from "../services/objectService";
import * as constants from "../utils/constants";
import Cookies from "js-cookie";

function AddNewCustomerForm() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userEmail = queryParams.get("email");
	const currentUser = JSON.parse(Cookies.get(`${userEmail}`));

	console.log("currentUser after cookie: ");
	console.log(currentUser);
	// State to store client details
	const [clientDetails, setClientDetails] = useState({
		clientName: "",
		businessType: "",
		phone: "",
		email: "",
		country: "Israel",
		city: "",
		street: "",
		zipcode: "",
		paymentMethod: "credit-card",
		bankName: "",
		accountNumber: "",
		branchNumber: "",
	});

	// Handle form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;
		setClientDetails((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// Handle form submission
	const handleSubmit = async (event) => {
		event.preventDefault();

		//Post new customer Object
		const rvData = await objectService.storeObjectInDataBase(
			currentUser,
			constants.CLASS_TYPE.CUSTOMER,
			clientDetails.clientName,
			clientDetails
		);

		console.log("rv Data:");
		console.log(rvData);

		window.location.href = `/customerlist?email=${userEmail}`;
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: "0px",
				}}
			>
				<div
					style={{
						flex: 1,
						display: "flex",
						justifyContent: "center",
						marginRight: "40px",
					}}
				>
					<Zoom in={true}>
						<form
							className="form-container"
							onSubmit={handleSubmit}
							style={{
								margin: "20px",
								maxWidth: "600px",
								width: "100%",
								backgroundColor: "#fff",
								padding: "20px",
								borderRadius: "8px",
								boxShadow: "0 0 10px rgba(0,0,0,0.1)",
							}}
						>
							<h1
								style={{
									fontSize: "25px",
									color: "black",
									textAlign: "center",
									fontWeight: "bold",
									marginBottom: "30px",
								}}
							>
								Add New Customer
							</h1>

							<label htmlFor="clientName">Customer Name:</label>
							<input
								type="text"
								id="clientName"
								name="clientName"
								value={clientDetails.clientName}
								placeholder="Enter Client Name"
								onChange={handleChange}
								required
								style={{ width: "100%", padding: "10px", margin: "10px 0" }}
							/>

							<label htmlFor="businessType">Business Type:</label>
							<input
								type="text"
								id="businessType"
								name="businessType"
								value={clientDetails.businessType}
								placeholder="Enter Business Type"
								onChange={handleChange}
								style={{ width: "100%", padding: "10px", margin: "10px 0" }}
							/>

							<label htmlFor="phone">Phone:</label>
							<input
								type="text"
								id="phone"
								name="phone"
								value={clientDetails.phone}
								placeholder="Enter Phone"
								onChange={handleChange}
								style={{ width: "100%", padding: "10px", margin: "10px 0" }}
							/>

							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								value={clientDetails.email}
								placeholder="Enter Email"
								onChange={handleChange}
								style={{ width: "100%", padding: "10px", margin: "10px 0" }}
							/>

							<label htmlFor="country">Country:</label>
							<input
								type="text"
								id="country"
								name="country"
								value={clientDetails.country}
								placeholder="Enter Country"
								onChange={handleChange}
								style={{ width: "100%", padding: "10px", margin: "10px 0" }}
							/>

							<label htmlFor="city">City:</label>
							<input
								type="text"
								id="city"
								name="city"
								value={clientDetails.city}
								placeholder="Enter City"
								onChange={handleChange}
								style={{ width: "100%", padding: "10px", margin: "10px 0" }}
							/>

							<label htmlFor="street">Street and Number:</label>
							<input
								type="text"
								id="street"
								name="street"
								value={clientDetails.street}
								placeholder="Enter Street and Number"
								onChange={handleChange}
								style={{ width: "100%", padding: "10px", margin: "10px 0" }}
							/>

							<label htmlFor="zipcode">Zip Code:</label>
							<input
								type="text"
								id="zipcode"
								name="zipcode"
								value={clientDetails.zipcode}
								placeholder="Enter Zip Code"
								onChange={handleChange}
								style={{ width: "100%", padding: "10px", margin: "10px 0" }}
							/>

							<label htmlFor="paymentMethod">Payment Method:</label>
							<select
								id="paymentMethod"
								name="paymentMethod"
								value={clientDetails.paymentMethod}
								onChange={handleChange}
								style={{
									width: "100%",
									height: "50px",
									fontSize: "16px",
									padding: "10px",
								}}
							>
								<option value="credit-card">Credit Card</option>
								<option value="bank-transfer">Bank Transfer</option>
								<option value="cash">Cash</option>
							</select>
							{/*
              <label htmlFor="bankName">Bank Name:</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={clientDetails.bankName}
                placeholder="Enter Bank Name"
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", margin: "10px 0" }}
              />

              <label htmlFor="accountNumber">Account Number:</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={clientDetails.accountNumber}
                placeholder="Enter Account Number"
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", margin: "10px 0" }}
              />

              <label htmlFor="branchNumber">Branch Number:</label>
              <input
                type="text"
                id="branchNumber"
                name="branchNumber"
                value={clientDetails.branchNumber}
                placeholder="Enter Branch Number"
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", margin: "10px 0" }}
              />
*/}
							<Button
								style={{
									backgroundColor: "rgb(14, 186, 151)",
									padding: "10px 20px",
								}}
								type="submit"
							>
								ADD
							</Button>
						</form>
					</Zoom>
				</div>
			</div>
		</>
	);
}

export default AddNewCustomerForm;
