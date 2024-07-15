import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AddIcon from "@mui/icons-material/Add";
import BasicTable from "../components/BasicTable";
import { useLocation } from "react-router-dom";

const CustomerList = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userEmail = queryParams.get("email");

	return (
		<LayoutComponent>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "10px",
				}}
			>
				<h1
					style={{
						fontSize: "30px",
						color: "#0eba97",
						textAlign: "left",
						marginTop: "30px",
						fontWeight: "bold",
						marginBottom: 0,
					}}
				>
					Customer list
					<hr />
				</h1>

				<Link to={`/AddNewCustomer?email=${userEmail}`}>
					<AddIcon
						fontSize="large"
						style={{ color: "#007bff", cursor: "pointer" }}
					/>
				</Link>
			</div>
			<BasicTable userEmail={userEmail} />
		</LayoutComponent>
	);
};

export default CustomerList;
