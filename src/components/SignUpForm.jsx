import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import ImageUploader from "../components/ImageUploader";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "@fontsource/inter";

function SignUpForm(props) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.updateData({ [name]: value });
  };
  const handleChangeExtra = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      props.setFirstName(value);
    } else if (name === "lastName") {
      props.setLastName(value);
    } else if (name === "password") {
      console.log("@@@@@ : " + value);
      props.setPassword(value);
    } else {
      props.updateData({ [name]: value });
    }
  };
  function onImageUpload(url) {
    props.dataExtra.profileImageUrl = url;
  }

  return (
    <main className="signup-container">
      <CssBaseline />
      <div className="signup-form">
        <Zoom in={true}>
          <Sheet
            component="form"
            //onSubmit={handleSubmit}
            sx={{
              width: 600,
              py: 3,
              px: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "md",
              marginTop: "50px",
            }}
            variant="outlined"
          >
            <Typography level="h4" component="h1">
              <b>Hey! Money is waiting for you!</b>
            </Typography>
            <Typography level="body-sm">Sign up to get started.</Typography>
            <FormControl
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormLabel
                style={{
                  fontWeight: "bold",
                  display: "block",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                Avatar
              </FormLabel>
              <ImageUploader onImageUpload={onImageUpload} />
            </FormControl>
            <FormControl>
              <FormLabel style={{ fontWeight: "bold" }}>First Name*</FormLabel>
              <Input
                name="firstName"
                type="text"
                placeholder="Enter your First Name"
                value={props.dataExtra.firstName}
                onChange={handleChangeExtra}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel style={{ fontWeight: "bold" }}>Last Name*</FormLabel>
              <Input
                name="lastName"
                type="text"
                placeholder="Enter your Last Name"
                value={props.dataExtra.lastName}
                onChange={handleChangeExtra}
              />
            </FormControl>
            <FormControl>
              <FormLabel style={{ fontWeight: "bold" }}>Email*</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter your Email"
                value={props.data.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel style={{ fontWeight: "bold" }}>
                Nickname* (avatar)
              </FormLabel>
              <Input
                name="avatar"
                type="text"
                placeholder="Enter your Nickname"
                value={props.data.avatar}
                onChange={handleChange}
              />
            </FormControl>
            {/* ================================ Password =========================================== */}
            <FormControl>
              <FormLabel style={{ fontWeight: "bold" }}>Password*</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Enter your Password"
                value={props.dataExtra.password}
                onChange={handleChangeExtra}
                required
              />
            </FormControl>
            <Typography
              endDecorator={<Link href="/login">Log in</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Already have an account?
            </Typography>
          </Sheet>
        </Zoom>
      </div>
    </main>
  );
}

export default SignUpForm;
