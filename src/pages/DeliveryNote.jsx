import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { useLocation } from "react-router-dom";
import DeliveryNoteForm from "../components/DeliveryNoteForm";

function DeliveryNote() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userEmail = queryParams.get("email");
	return (
		<>
			<LayoutComponent>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ flex: 1 }}>
						<h1
							style={{
								fontSize: "30px",
								color: "black",
								textAlign: "left",
								marginTop: "30px",
								fontWeight: "bold",
							}}
						>
							Delivery Note
							<hr />
						</h1>
					</div>
				</div>
				<DeliveryNoteForm userEmail={userEmail} />
			</LayoutComponent>
		</>
	);
}

export default DeliveryNote;
