import React, { useState } from "react";
import {
	Container,
	TextField,
	Grid,
	Button,
	Typography,
	Box,
	Avatar,
} from "@mui/material";
import ImageUploader from "./ImageUploader";

import { Alert } from "antd";
import "../styles/inputFix.css";
import { Link } from "react-router-dom";

function AccountDetails() {
	const [showSave, setShowSave] = useState(false);
	const [showSave2, setShowSave2] = useState(false);

	const handleSubmit1 = () => {
		setShowSave(true); // Show the alert on form submission
	};
	const handleSubmit2 = () => {
		setShowSave2(true); // Show the alert on form submission
	};

	return (
		<>
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
					My Details
				</Typography>
				<ImageUploader />

				<Grid container spacing={2} marginTop={3}>
					<Grid item xs={6} sm={2}>
						<TextField
							required
							label="First Name"
							fullWidth
							className="custom-input"
						/>
					</Grid>

					<Grid item xs={12} sm={2}>
						<TextField
							required
							label="Last Name"
							fullWidth
							className="custom-input"
						/>
					</Grid>
					<Grid item xs={6} sm={2}>
						<TextField
							required
							label="Email"
							fullWidth
							className="custom-input"
						/>
					</Grid>

					<Grid item xs={12} sm={2}>
						<TextField
							required
							label="Nick Name"
							fullWidth
							className="custom-input"
						/>
					</Grid>
				</Grid>

				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						marginLeft: 3,
						marginTop: 2,
					}}
				>
					<Box>
						{showSave && (
							<Alert message="The change is saved" type="success" showIcon />
						)}
						<Button variant="contained" color="primary" onClick={handleSubmit1}>
							Save Changes
						</Button>
					</Box>
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
					Business Details
				</Typography>
				<Grid container spacing={2} marginTop={3}>
					<Grid item xs={6} sm={2}>
						<TextField
							required
							label="Name"
							fullWidth
							className="custom-input"
						/>
					</Grid>

					<Grid item xs={12} sm={2}>
						<TextField
							required
							label="Business ID"
							fullWidth
							className="custom-input"
						/>
					</Grid>
					<Grid item xs={6} sm={2}>
						<TextField
							required
							label="Registration Number"
							fullWidth
							className="custom-input"
						/>
					</Grid>

					<Grid item xs={12} sm={2}>
						<TextField
							required
							label="City"
							fullWidth
							className="custom-input"
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<TextField
							required
							label="Address"
							fullWidth
							className="custom-input"
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<TextField
							required
							label="Phone Number"
							fullWidth
							className="custom-input"
						/>
					</Grid>
				</Grid>

				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						marginLeft: 3,
						marginTop: 2,
					}}
				>
					<Box>
						{showSave2 && (
							<Alert message="The change is saved" type="success" showIcon />
						)}
						<Button variant="contained" color="primary" onClick={handleSubmit2}>
							Save Changes
						</Button>
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					marginLeft: 3,
					marginTop: 2,
				}}
			>
				<Box>
					<Link to="/lobi">
						<Button variant="contained" color="primary">
							Back to Overview
						</Button>
					</Link>
				</Box>
			</Box>
		</>
	);
}

export default AccountDetails;
