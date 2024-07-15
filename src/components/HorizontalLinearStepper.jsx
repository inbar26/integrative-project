import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// Import your components
import SignUpForm from "./SignUpForm";
import BusinessCreateArea from "./BusinessCreateArea";
import SignUpReview from "./SignUpReview";
import { Alert } from "antd";

const steps = ["User Details", "Business Details", "Review"];

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [showAlert, setShowAlert] = React.useState(false);

  const isStepOptional = (step) => {
    //return step === 1;
    return false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    setShowAlert(false);
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep === steps.length - 1) {
      if (!isValidate()) {
        setShowAlert(true);
        return;
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const isValidate = () => {
    const { essentialDetails, extraDetails } = props.newUser;
    if (
      !essentialDetails.email ||
      !essentialDetails.avatar ||
      !essentialDetails.username ||
      !extraDetails.password ||
      !extraDetails.firstName ||
      !extraDetails.lastName
    ) {
      return false;
    }
    return true;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleSubmit = () => {
    props.onSignUpAttempt();
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <SignUpForm
            data={props.newUser.essentialDetails}
            updateData={props.updateEssentialDetails}
            dataExtra={props.newUser.extraDetails}
            updateDataExtra={props.updateExtraDetails}
            setFirstName={props.setFirstName}
            setLastName={props.setLastName}
            setPassword={props.setPassword}
          />
        );
      case 1:
        return (
          <BusinessCreateArea
            data={props.newUser.extraDetails.businessDetails}
            updateData={props.updateBusinessDetails}
            dataExtra={props.newUser.extraDetails}
            updateDataExtra={props.updateExtraDetails}
          />
        );
      case 2:
        return <SignUpReview data={props.newUser} />;
      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleSubmit}>Submit Form</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: "20px" }}>{getStepContent(activeStep)}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
      {showAlert && (
        <Alert
          message="Error"
          description="Please fill all the essential information (*)"
          type="error"
          showIcon
          closable
        />
      )}
    </Box>
  );
}
