import React from "react";
import { useState, useEffect } from "react";
import LayoutComponent from "../components/LayoutComponent";
import CustomizedTables from "../components/FormTable";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import * as objectService from "../services/objectService";
import * as commandService from "../services/commandService";
import * as constants from "../utils/constants";
const CustomerPreview = () => {
  //NEED TO GET CUSTOMER ID FROM BasicTable.jsx
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const customerAlias = queryParams.get("alias");
  const userEmail = queryParams.get("email");
  const [formObjectArray, setFormObjectArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = JSON.parse(Cookies.get(userEmail));

  const commandAttributes = {
    commandType: constants.COMMAND_NAME.CUSTOMER_FORMS,
    customerAlias: customerAlias,
  };

  // useEffect(() => {
  //   const fetchCustomers = async () => {
  //     try {
  //       const userObject = await objectService.getObjectByAlias(currentUser);
  //       console.log("userObject:");
  //       console.log(userObject);

  //       const commandDetails = {
  //         type: constants.CLASS_TYPE.FORM,
  //         userId: `${currentUser.userId.superapp}#${currentUser.userId.email}`,
  //         customer: customerAlias,
  //         page: 0,
  //         size: 5,
  //       };

  //       const forms = await commandService.invokeCommand(
  //         constants.APP_NAME,
  //         constants.COMMAND_NAME.CUSTOMER_FORMS,
  //         currentUser,
  //         userObject[0].objectId.id,
  //         commandDetails
  //       );

  //       console.log("formsObjectArray:");
  //       console.log(forms);
  //       setFormObjectArray(forms);
  //     } catch (error) {
  //       console.error("Error fetching customers:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCustomers();
  // }, []); // Effect will run whenever currentUser changes

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
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
            color: "black",
            textAlign: "left",
            marginTop: "30px",
            fontWeight: "bold",
            marginBottom: 0,
          }}
        >
          Customer Preview
        </h1>
      </div>
      <h2>
        Forms: <hr />
      </h2>
      <br />
      <CustomizedTables
        commandAttributes={commandAttributes}
        userEmail={userEmail}
      />
    </LayoutComponent>
  );
};

export default CustomerPreview;
