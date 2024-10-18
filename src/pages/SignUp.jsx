import React, { useState, useEffect } from "react";
import BackHeader from "../components/BackHeader";
import "../styles/signup.css";
import HorizontalLinearStepper from "../components/HorizontalLinearStepper";
import * as userService from "../services/userService";
import * as objectService from "../services/objectService";
import * as constants from "../utils/constants";
import Cookies from "js-cookie";
function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({
    essentialDetails: {
      email: "",
      role: constants.ROLES.MINIAPP_USER,
      username: `${firstName} ${lastName}`,
      avatar: "",
    },
    extraDetails: {
      profileImageUrl: "",
      password: `${password}`,
      firstName: "",
      lastName: "",
      accountant: "",

      businessDetails: {
        registrationNumber: "",
        businessId: "",
        name: "",
        city: "",
        address: "",
        phoneNumber: "",
      },
    },
  });

  useEffect(() => {
    setNewUser((prevUser) => ({
      ...prevUser,
      essentialDetails: {
        ...prevUser.essentialDetails,
        username: `${firstName} ${lastName}`,
      },
      extraDetails: {
        ...prevUser.extraDetails,
        firstName,
        lastName,
        password,
      },
    }));
  }, [firstName, lastName, password]);

  const updateEssentialDetails = (details) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      essentialDetails: {
        ...prevUser.essentialDetails,
        ...details,
      },
    }));
  };

  const updateExtraDetails = (details) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      extraDetails: {
        ...prevUser.extraDetails,
        ...details,
      },
    }));
  };

  const updateBusinessDetails = (businessDetails) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      extraDetails: {
        ...prevUser.extraDetails,
        businessDetails: {
          ...prevUser.extraDetails.businessDetails,
          ...businessDetails,
        },
      },
    }));
  };
  const onSignUpAttempt = async () => {
    console.log(`Attempting SignUp!!!!!`);
    console.log(newUser);
    try {
      // Post User
      const responseDataEssential = await userService.createUser(
        newUser.essentialDetails
      );
      console.log(`Response EssentialDetails: `);
      console.log(responseDataEssential);
      // Post Object
      const responseDataExtra = await objectService.storeObjectInDataBase(
        responseDataEssential,
        constants.CLASS_TYPE.USER_DATA,
        responseDataEssential.userId.email,
        newUser.extraDetails
      );
      console.log("Response ExtraDetails:");
      console.log(responseDataExtra);

      Cookies.set(
        `${responseDataEssential.userId.email}`,
        JSON.stringify(responseDataEssential),
        {
          expires: 7,
        }
      );
      window.location.href = `/lobi?email=${responseDataEssential.userId.email}`;
    } catch (error) {
      console.error("Error during sign-up attempt:", error);
    }
  };

  console.log(newUser);

  return (
    <>
      <BackHeader />
      <div className="signup-container">
        <div className="signup-logo">
          <img src={constants.IMAGES.WHITE_ON_TRANSPARENT} alt="logo FinRise" />
        </div>
        <div className="stepper-container">
          <HorizontalLinearStepper
            onSignUpAttempt={onSignUpAttempt}
            newUser={newUser}
            updateEssentialDetails={updateEssentialDetails}
            updateExtraDetails={updateExtraDetails}
            updateBusinessDetails={updateBusinessDetails}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPassword={setPassword}
          />
        </div>
      </div>
    </>
  );
}

export default SignUp;
