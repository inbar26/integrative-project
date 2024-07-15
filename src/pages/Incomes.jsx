import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import FormTable from "../components/FormTable";
import { useLocation } from "react-router-dom";
import * as constants from "../utils/constants";
const Incomes = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userEmail = queryParams.get("email");

  const commandAttributes = {
    commandType: constants.COMMAND_NAME.ALL_OBJECTS_BY_TYPE_AND_CREATED_BY,
    customerAlias: null,
  };

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
          All Forms:
        </h1>
      </div>
      <FormTable commandAttributes={commandAttributes} userEmail={userEmail} />
    </LayoutComponent>
  );
};

export default Incomes;
