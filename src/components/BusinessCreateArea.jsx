import React, { useState } from "react";
import "../styles/customerCreateArea.css";
import Zoom from "@mui/material/Zoom";
import Snackbar from "@mui/material/Snackbar";

/**
|--------------------------------------------------
| This is a Form component (Lego part).
| in this component the user will be able to fill
| in his business details.
|--------------------------------------------------
*/

function BusinessCreateArea(props) {
  const [inputCustomer, setInputCustomer] = useState("");
  const [customerObjectArray, setCustomerObjectArray] = useState([]);
  const getCustomerNames = () => {
    const customerNames = [];

    customerObjectArray.map((customerObject) =>
      customerNames.push(customerObject.alias)
    );
    return customerNames;
  };
  const customerNames = getCustomerNames();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        // const userObject = await objectService.getObjectByAlias(currentUser);
        // console.log("userObject:");
        // console.log(userObject);

        // const commandDetails = {
        //   type: constants.CLASS_TYPE.CUSTOMER,
        //   userId: `${currentUser.userId.superapp}#${currentUser.userId.email}`,
        //   page: 0,
        //   size: 200,
        // };
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
  //-----------------------------------------------------------
  const handleCustomerChange = (event, newValue) => {
    updateFormDetails({ accountant: newValue });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    props.updateData({ [name]: value });
  };

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Zoom in={true}>
        <form className="form-container">
          <h1 style={{ fontSize: "25px", color: "black" }}>
            Let's talk Business
          </h1>
          <h2 style={{ fontSize: "15px" }}>
            Your essential information will be displayed on your documents.{" "}
            <br />
            (Feel free to modify it at your convenience).
          </h2>
          <br /> <hr />
          <label htmlFor="businessRegistrationNumber">
            Business registration number:
          </label>
          <input
            type="text"
            id="businessRegistrationNumber"
            placeholder="Enter your Business registration"
            name="registrationNumber"
            value={props.data.registrationNumber}
            onChange={handleChange}
            required
          />
          <label htmlFor="ID">ID:</label>
          <input
            type="text"
            id="businessId"
            name="businessId"
            value={props.data.businessId}
            placeholder="Enter your ID"
            onChange={handleChange}
            required
          />
          <label htmlFor="businessName">Business Name:</label>
          <input
            type="text"
            id="businessName"
            name="name"
            placeholder="Enter your Business name"
            value={props.data.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="accountant">Accountant Email:</label>
          <Autocomplete
            required
            name="accountant"
            value={props.data.accountant}
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
            renderInput={(params) => <TextField {...params} label="Customer" />}
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={props.data.city}
            placeholder="Enter your City"
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={props.data.address}
            onChange={handleChange}
            required
          />
          <label htmlFor="mobilePhoneNumber">Mobile Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={props.data.phoneNumber}
            placeholder="Enter your Phone Number"
            onChange={handleChange}
            required
          />
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="Form Submited!"
            key={vertical + horizontal}
          />
        </form>
      </Zoom>
    </>
  );
}

export default BusinessCreateArea;
