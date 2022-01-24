import React from "react";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";

export default function ProgressBar() {
    const theme = useTheme();
    const [progressCount, setCurrentStepCount] = React.useState(0);
    
    const handleBack = () => {
      setCurrentStepCount((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleNext = () => {
      setCurrentStepCount((prevActiveStep) => prevActiveStep + 1);
    };
    
    return (
      <div
        style={{
          marginLeft: "40%",
        }}
      >
        <h6>Progress Bar</h6>
        <MobileStepper
          steps={6}
          activeStep={progressCount}
          position="static"
          variant="progress"
          style={{
            maxWidth: 400,
            flexGrow: 1,
          }}
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={progressCount === 0}
            >
              {theme.direction !== "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
              -
            </Button>
          }
          nextButton={
            <Button
              variant="contained"
              size="small"
              onClick={handleNext}
              disabled={progressCount === 5}
            >
            +
              {theme.direction !== "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    );
        }


