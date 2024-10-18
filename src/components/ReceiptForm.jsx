import React, { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Typography,
  Box,
  FormControl,
  FormLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";
import { Alert } from "antd";
import "../styles/inputFix.css";
import ButtonPreview from "./ButtonPreview";
import Radio from "@mui/joy/Radio";
import * as constants from "../utils/constants";
import RadioGroup from "@mui/joy/RadioGroup";

import Cookies from "js-cookie";

function ReceiptForm(props) {
  const currentUser = JSON.parse(Cookies.get(`${props.userEmail}`));

  console.log("currentUser after cookie: ");
  console.log(currentUser);
  const [showAlert, setShowAlert] = useState(false);
  //------------------------------------------------------------ Receipt Details:
  const [newReceipt, setNewReceipt] = useState({
    customerName: "",
    createDate: null,
    documentDescription: "",
    paymentType: constants.PAYMENT_TYPE.CREDIT_CARD,
    currency: constants.CURRENCY.DOLLAR,
    date: null,
    price: "",
    notes: "",
  });

  const updateFormDetails = (details) => {
    setNewReceipt((prevForm) => ({
      ...prevForm,
      ...details,
    }));
  };
  const handleChangeReceiptDetails = (event) => {
    const { name, value } = event.target;
    updateFormDetails({ [name]: value });
  };

  const handleSubmit = () => {
    setShowAlert(true); // Show the alert on form submission
  };

  console.log(newReceipt);
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
          Document Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Customer Name"
              fullWidth
              className="custom-input"
              name="customerName"
              value={newReceipt.customerName}
              onChange={handleChangeReceiptDetails}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <DatePicker
              label="Document Date"
              name="createDate" //add
              value={newReceipt.createDate} //add
              onChange={handleChangeReceiptDetails} //add
              className="custom-input"
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  InputProps={{ endAdornment: <SearchIcon /> }}
                />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Document Description"
              fullWidth
              className="custom-input"
              name="documentDescription"
              value={newReceipt.documentDescription}
              onChange={handleChangeReceiptDetails}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          border: "2px solid #ddd",
          padding: 2,
          borderRadius: 2,
          marginTop: "10px",
          width: "100%", // Ensure the box takes the full width
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Details of Receipts
          </Typography>
          <Typography variant="h7" sx={{ fontWeight: "bold" }} gutterBottom>
            How you were paid?
          </Typography>
        </Box>

        {/* ==================== Payment - Start ==================== */}
        <Grid container spacing={2}>
          <Grid item xs={6} sm={2}>
            <FormControl>
              <FormLabel>Payment Type</FormLabel>
              <RadioGroup
                defaultValue={constants.PAYMENT_TYPE.CREDIT_CARD}
                name="paymentType"
                value={newReceipt.paymentType}
                onChange={handleChangeReceiptDetails}
              >
                <Radio
                  color="primary"
                  orientation="vertical"
                  size="sm"
                  variant="outlined"
                  value={constants.PAYMENT_TYPE.CREDIT_CARD}
                  label={` ${constants.PAYMENT_TYPE.CREDIT_CARD}`}
                />
                <Radio
                  color="primary"
                  orientation="vertical"
                  size="sm"
                  variant="outlined"
                  value={constants.PAYMENT_TYPE.CASH}
                  label={` ${constants.PAYMENT_TYPE.CASH}`}
                />
                <Radio
                  color="primary"
                  orientation="vertical"
                  size="sm"
                  variant="outlined"
                  value={constants.PAYMENT_TYPE.BANK_TRANSFER}
                  label={` ${constants.PAYMENT_TYPE.BANK_TRANSFER}`}
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={3}>
            <DatePicker
              className="custom-input"
              label="Date"
              name="date"
              value={newReceipt.date}
              onChange={handleChangeReceiptDetails}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  InputProps={{ endAdornment: <SearchIcon /> }}
                />
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              required
              className="custom-input"
              label="Total Price"
              type="number"
              defaultValue={0}
              fullWidth
              name="price"
              value={newReceipt.price}
              onChange={handleChangeReceiptDetails}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl>
              <FormLabel>Currency</FormLabel>
              <RadioGroup
                defaultValue={constants.CURRENCY.DOLLAR}
                name="currency"
                value={newReceipt.currency}
                onChange={handleChangeReceiptDetails}
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
        </Grid>
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
              className="custom-input"
              label="Notes in the bottom of the document"
              multiline
              rows={4}
              fullWidth
              name="notes"
              value={newReceipt.notes}
              onChange={handleChangeReceiptDetails}
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
          <Button variant="outlined" color="primary">
            Preview
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ReceiptForm;
