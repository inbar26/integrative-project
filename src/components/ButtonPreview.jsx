import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import * as constants from "../utils/constants";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ButtonPreview(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Preview
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {" "}
          <Typography
            sx={{ color: "#0eba97", fontFamily: "Arial", fontWeight: "bold" }}
            gutterBottom
          >
            Document Details:
          </Typography>
          <Typography gutterBottom>
            {`customer Name: ${props.details.customer}`} <br />
            {/* {`Production Date: ${props.details.createDate}`} */}
            <br />
            {props.details.paymentDueDate &&
              `Payment Due Date: ${props.details.paymentDueDate}`}
            <br />
            {`Document description: ${props.details.documentDescription}`}
          </Typography>
          <Typography
            sx={{
              color: "#0eba97",
              fontFamily: "Arial",
              fontWeight: "bold",
              marginTop: 5,
            }}
            gutterBottom
          >
            Products Details:
          </Typography>
          {props.details.productArray.map((product) => (
            <Typography gutterBottom>
              {`Product Name: ${product.name}`} <br />
              {`Quantity: ${product.quantity}`}
              <br />
              {`Unit Price: ${product.unitPrice}`}
              <br />
              {`Currency: ${product.currency}`}
              <br />
              {`Vat: ${product.vat ? "included" : "not Included"}`}
              <hr />
            </Typography>
          ))}
          <Typography
            sx={{
              color: "#0eba97",
              fontFamily: "Arial",
              fontWeight: "bold",
              marginTop: 5,
            }}
            gutterBottom
          >
            Notes:
          </Typography>
          <Typography gutterBottom>{props.details.notes}</Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
