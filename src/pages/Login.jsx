import React, { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import LoginFinal from "../components/LoginForm";
import BackHeader from "../components/BackHeader";
import * as userService from "../services/userService";
import * as objectService from "../services/objectService";
import * as constants from "../utils/constants";
import Cookies from "js-cookie";
import { Alert } from "antd";

function Login() {
  const [data, setData] = useState(null); // Define state for storing data
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (data) {
      console.log(`My Data: ${JSON.stringify(data)}`);
    }
  }, [data]);

  const loginAttempt = async (details) => {
    try {
      console.log("login Attempt");
      // get user
      setShowAlert(false);
      const fetchedData = await userService.fetchData(details.email);
      console.log("fetchedData: ");
      console.log(fetchedData);
      Cookies.set(
        `${fetchedData.data.userId.email}`,
        JSON.stringify(fetchedData.data),
        {
          expires: 7,
        }
      );
      const currentUser = Cookies.get(`${fetchedData.data.userId.email}`);
      console.log("currentUser after cookie (final form): ");
      console.log(currentUser);
      const userObject = await objectService.getObjectByAlias(currentUser);
      console.log("userObject:");
      console.log(userObject);
      console.log(userObject[0]);
      console.log(userObject[0].objectDetails);
      console.log(userObject[0].objectDetails.password);

      if (userObject[0].objectDetails.password !== details.password) {
        console.log("Incorrect Password");
        setAlertMessage("Incorrect Password");
        setShowAlert(true);
      } else {
        window.location.href = `/lobi?email=${fetchedData.data.userId.email}`;
      }
    } catch (error) {
      setAlertMessage("Something went wrong");
      setShowAlert(true);
      console.error("Error during login attempt:", error);
    }
  };

  return (
    <>
      <BackHeader />
      <div className={styles.container}>
        <div className={styles.loginLogo}>
          <img src={constants.IMAGES.WHITE_ON_TRANSPARENT} alt="logo FinRise" />
        </div>

        <div className={styles.loginForm}>
          <LoginFinal onLoginAttempt={loginAttempt} />

          {showAlert && (
            <Alert
              message="Error"
              description={alertMessage}
              type="error"
              showIcon
              closable
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
