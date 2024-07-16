import { useState, useEffect } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PDFQuotationFile from "../components/PDFQuotationFile";
import PDFReceiptFile from "../components/PDFReceiptFile";
import PDFTaxInvoiceFile from "../components/PDFTaxInvoiceFile";
import PDFDeliveryNoteFile from "../components/PDFDeliveryNoteFile";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/joy/Chip";
import * as constants from "../utils/constants";
import * as objectService from "../services/objectService";
import * as userService from "../services/userService";
import * as commandService from "../services/commandService";
import * as helper from "../utils/helperFunctions";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import Cookies from "js-cookie";
import { Pagination } from "antd";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

/*
  This component is a Table for the Form List display
*/

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const renderFormType = (type) => {
  // a function for the form type
  switch (type) {
    case constants.FORM_TYPE.TAX_INVOICE:
      return (
        <StyledTableCell align="center">
          <Chip
            color="warning"
            disabled={false}
            onClick={function () {}}
            size="lg"
            variant="solid"
          >
            {constants.FORM_TYPE.TAX_INVOICE}
          </Chip>
        </StyledTableCell>
      );
    case constants.FORM_TYPE.QUOTE:
      return (
        <StyledTableCell align="center">
          <Chip
            icon={<FeedOutlinedIcon />}
            color="primary"
            disabled={false}
            onClick={function () {}}
            size="lg"
            variant="solid"
          >
            {constants.FORM_TYPE.QUOTE}
          </Chip>
        </StyledTableCell>
      );
    case constants.FORM_TYPE.RECEIPT:
      return (
        <StyledTableCell align="center">
          <Chip
            color="neutral"
            disabled={false}
            onClick={function () {}}
            size="lg"
            variant="solid"
          >
            {constants.FORM_TYPE.RECEIPT}
          </Chip>
        </StyledTableCell>
      );

    case constants.FORM_TYPE.DELIVERY_NOTE:
      return (
        <StyledTableCell align="center">
          <Chip
            color="danger"
            disabled={false}
            onClick={function () {}}
            size="lg"
            variant="solid"
          >
            {constants.FORM_TYPE.DELIVERY_NOTE}
          </Chip>
        </StyledTableCell>
      );
    case constants.FORM_TYPE.RECEIPT_TAX_INVOICE:
      return (
        <StyledTableCell align="center">
          <Chip
            color="success"
            disabled={false}
            onClick={function () {}}
            size="lg"
            variant="solid"
          >
            {constants.FORM_TYPE.RECEIPT_TAX_INVOICE}
          </Chip>
        </StyledTableCell>
      );
    default:
      return (
        <StyledTableCell align="right">No action available</StyledTableCell>
      );
  }
};

const renderFormAction = (form) => {
  switch (form.alias) {
    case constants.FORM_TYPE.TAX_INVOICE:
      return (
        <StyledTableCell align="center">
          <PDFDownloadLink
            document={<PDFTaxInvoiceFile formObject={form} />}
            fileName={`Tax Invoice - ${form.customer}`}
          >
            {({ loading }) =>
              loading ? (
                <IconButton
                  disabled
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              )
            }
          </PDFDownloadLink>
        </StyledTableCell>
      );
    case constants.FORM_TYPE.QUOTE:
      return (
        <StyledTableCell align="center">
          <PDFDownloadLink
            document={<PDFQuotationFile quotation={form.objectDetails} />}
            fileName={`Quotation - ${form.customer}`}
          >
            {({ loading }) =>
              loading ? (
                <IconButton
                  disabled
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              )
            }
          </PDFDownloadLink>
        </StyledTableCell>
      );
    case constants.FORM_TYPE.RECEIPT:
      return (
        <StyledTableCell align="center">
          <PDFDownloadLink
            document={<PDFReceiptFile receipt={form.objectDetails} />}
            fileName={`Receipt - ${form.createDate}`}
          >
            {({ loading }) =>
              loading ? (
                <IconButton
                  disabled
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              )
            }
          </PDFDownloadLink>
        </StyledTableCell>
      );

    case constants.FORM_TYPE.DELIVERY_NOTE:
      return (
        <StyledTableCell align="center">
          <PDFDownloadLink
            document={<PDFDeliveryNoteFile deliveryNote={form.objectDetails} />}
            fileName={`Delivery Note - ${form.creationTimestamp}`}
          >
            {({ loading }) =>
              loading ? (
                <IconButton
                  disabled
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              )
            }
          </PDFDownloadLink>
        </StyledTableCell>
      );
    default:
      return (
        <StyledTableCell align="center">No action available</StyledTableCell>
      );
  }
};

export default function CustomizedTables(props) {
  const [formObjectArray, setFormObjectArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(50);
  const currentUser = JSON.parse(Cookies.get(props.userEmail));

  useEffect(() => {
    setLoading(true);
    const fetchForms = async () => {
      try {
        const userObject = await objectService.getObjectByAlias(currentUser);
        helper.myLog(userObject);

        const commandDetails = {
          type: constants.CLASS_TYPE.FORM,
          userId: `${currentUser.userId.superapp}#${currentUser.userId.email}`,
          customer: props.commandAttributes.customerAlias,
          page: page - 1,
          size: 5,
        };
        console.log("Page Number:");
        console.log(page);
        const forms = await commandService.invokeCommand(
          constants.APP_NAME,
          props.commandAttributes.commandType,
          currentUser,
          userObject[0].objectId.id,
          commandDetails
        );

        console.log("formArray:");
        console.log(forms);
        setFormObjectArray([]);
        setFormObjectArray(forms);
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, [page]);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return (
      <Box>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>
                Form Type
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>
                Date Modified
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>
                Customer
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>
                Open/Close
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ fontWeight: "bold" }}
              ></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Reaplace cus.customers1[0] To Data.forms */}
            {Array.isArray(formObjectArray) && formObjectArray.length > 0 ? (
              formObjectArray.map((formObject) => (
                <StyledTableRow key={formObject.objectId.id}>
                  {renderFormType(formObject.alias)}
                  <StyledTableCell align="center">
                    {formObject.objectDetails.createDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formObject.objectDetails.customer}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formObject.objectDetails.isOpen ? (
                      <LockOpenOutlinedIcon />
                    ) : (
                      <LockOutlinedIcon />
                    )}
                  </StyledTableCell>
                  {renderFormAction(formObject)}
                </StyledTableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No Forms found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Pagination
          align="center"
          current={page}
          onChange={handlePageChange}
          defaultCurrent={1}
          total={total}
        />
      </TableContainer>
    </>
  );
}
