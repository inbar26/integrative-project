import {
  Box,
  Avatar,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DateCalendar from "./DateCalendar";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  ArrowBack,
  AttachMoney,
  Euro,
  AttachMoneySharp,
  MonetizationOnSharp,
} from "@mui/icons-material";
import Cookies from "js-cookie";
import * as objectService from "../services/objectService";
import * as constants from "../utils/constants";

const preventDefault = (event) => event.preventDefault();

function Overview(props) {
  const [img, setImg] = useState({
    imageUrl: "",
    nameInitials: "",
  });
  const [currUserObject, setUserObject] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const cookieOb = JSON.parse(Cookies.get(props.userEmail));
        setCurrentUser(cookieOb);
        console.log("currentUser after cookie: ");
        console.log(cookieOb);
        const userObject = await objectService.getObjectByAlias(cookieOb);
        console.log("userObject:");
        console.log(userObject);

        setImg({
          imageUrl: userObject[0].objectDetails.profileImageUrl,
          nameInitials: userObject[0].objectDetails.firstName,
        });
        console.log("userObject[0]:");
        console.log(userObject[0]);
        setUserObject(userObject[0]);
        console.log("currUserObject:");
        console.log(currUserObject);
        // console.log(currUserObject.objectDetails);
        // console.log(currUserObject.objectDetails.businessDetails);
        // console.log(currUserObject.objectDetails.businessDetails.name);

        return userObject;
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCurrentUser();
  }, [props.userEmail]);

  if (!currUserObject) {
    return <div>Loading...</div>; // or any loading spinner/component
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "15px",
        }}
      >
        <Avatar
          src={img.imageUrl}
          alt={img.nameInitials}
          sx={{ width: 100, height: 100, marginRight: "10px" }}
        />
        <Box sx={{ width: "80%", maxWidth: 600 }}>
          <Typography variant="h5" marginTop={2} marginLeft={2}>
            {currentUser && `Hello, ${currentUser.username}!`}
          </Typography>
          <Typography variant="h6" marginTop={2} marginLeft={2}>
            We are always here for you, wishing calmer days soon.
          </Typography>
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <Box
            sx={{
              border: "1px solid #ddd",
              padding: 2,
              borderRadius: 2,
              marginTop: 4,
              width: "30%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              //typography: "body1",
            }}
            onClick={preventDefault}
          >
            <Link to={`/Incomes?email=${props.userEmail}`}>All Documents</Link>
            <Link to={`/customerlist?email=${props.userEmail}`}>
              My Customers
            </Link>
          </Box>
          <Box
            sx={{
              border: "4px solid #ddd",
              padding: 1,
              borderRadius: 2,
              marginTop: 5,
              width: "90%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#0eba97",
                fontFamily: "Arial",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 2,
              }}
              gutterBottom
            >
              Business Details
            </Typography>
            {/* =========================================================================== */}

            <List>
              <ListItem>
                <ListItemText
                  primary={`Name: ${currUserObject.objectDetails.businessDetails.name}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Business ID: ${currUserObject.objectDetails.businessDetails.businessId}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Registration Number: ${currUserObject.objectDetails.businessDetails.registrationNumber}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`City: ${currUserObject.objectDetails.businessDetails.city}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Address: ${currUserObject.objectDetails.businessDetails.address}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Phone Number: ${currUserObject.objectDetails.businessDetails.phoneNumber}`}
                />
              </ListItem>
            </List>

            {/* =========================================================================== */}
            {/*<Box display="flex" flexDirection="row" alignItems="center">
							<Grid item xs={6}>
								<Paper sx={{ padding: 2 }}>
									<Box
										display="flex"
										flexDirection="column"
										alignItems="stretch"
									>
										<Button
											variant="contained"
											color={buttonColor["upcomingDebts"]}
											endIcon={<ArrowBack />}
											onClick={() => handleButtonClick("upcomingDebts")}
										>
											Upcoming Debts
										</Button>
										<Button
											variant="contained"
											color={buttonColor["openReceivables"]}
											sx={{ mt: 2 }}
											endIcon={<AttachMoney />}
											onClick={() => handleButtonClick("openReceivables")}
										>
											Open Receivables
										</Button>
									</Box>
								</Paper>
							</Grid>

							<Grid item xs={8} sx={{ marginLeft: 25 }}>
								{openTable === "upcomingDebts" && (
									<Table sx={{ mt: 2 }}>
										<TableHead>
											<TableRow>
												<TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>
													Due Date
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>
													Customer Name
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>
													Amount
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell>30/06/2023</TableCell>
												<TableCell>Customer 1</TableCell>
												<TableCell>$2,211.30</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>30/06/2023</TableCell>
												<TableCell>Customer 2</TableCell>
												<TableCell>$336.96</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								)}
							</Grid>
							<Grid item xs={8}>
								{openTable === "openReceivables" && (
									<Table sx={{ mt: 2 }}>
										<TableHead>
											<TableRow>
												<TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>
													Invoice Date
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>
													Customer Name
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>
													Amount
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell>01/07/2023</TableCell>
												<TableCell>Customer 3</TableCell>
												<TableCell>$1,000.00</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>01/07/2023</TableCell>
												<TableCell>Customer 4</TableCell>
												<TableCell>$500.00</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								)}
							</Grid>
						</Box>
							*/}
          </Box>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                border: "4px solid #ddd",
                padding: 1,
                borderRadius: 2,
                marginTop: 5,
                width: "40%",
                marginRight: "50px",
              }}
            >
              <img
                src="src/assets/ExchangeRates.png"
                alt="Your Image"
                style={{
                  maxWidth: "100%",
                  maxHeight: "50%",
                  display: "block",
                  margin: "auto",
                  marginTop: "20px",
                  borderRadius: "10px",
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginTop: "60px",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                <AttachMoneySharp fontSize="small" /> Dollar Rate: 3.40
                <br />
                <Euro fontSize="small" /> Euro Rate: 4.00
                <br />
                <MonetizationOnSharp fontSize="small" /> Shekel Rate: 1.00
                <br />
              </Typography>
            </Box>
            <Box
              sx={{
                border: "4px solid #ddd",
                padding: 1,
                borderRadius: 2,
                marginTop: 5,
                justifyContent: "center",
                width: "40%",
              }}
            >
              <img
                src="src/assets/gift.png"
                alt="Your Image"
                style={{
                  maxWidth: "90%",
                  maxHeight: "50%",
                  display: "block",
                  margin: "auto",
                  marginTop: "20px",
                  borderRadius: "10px",
                }}
              />

              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                Invite your friends to join FINRIZE <br /> and get 3 MONTHS of
                <br />
                FREE SUBSCRIPTION !!!
              </Typography>
            </Box>
          </div>
        </div>

        <div style={{ marginRight: "50px" }}>
          <DateCalendar />
        </div>
      </div>
    </>
  );
}

export default Overview;
