import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as objectService from "../services/objectService";
import * as commandService from "../services/commandService";
import * as constants from "../utils/constants";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { Pagination } from "antd";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
/*
  This component is a Table for the CUSTOMER LIST display
*/

export default function BasicTable(props) {
  const [customerObjectArray, setCustomerObjectArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(50);
  const currentUser = JSON.parse(Cookies.get(`${props.userEmail}`));

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const userObject = await objectService.getObjectByAlias(currentUser);
        console.log("userObject:");
        console.log(userObject);

        const commandDetails = {
          type: constants.CLASS_TYPE.CUSTOMER,
          userId: `${currentUser.userId.superapp}#${currentUser.userId.email}`,
          page: page,
          size: 2,
        };
        console.log("Page Number:");
        console.log(page);
        const customers = await commandService.invokeCommand(
          constants.APP_NAME,
          constants.COMMAND_NAME.ALL_OBJECTS_BY_TYPE_AND_CREATED_BY,
          currentUser,
          userObject[0].objectId.id,
          commandDetails
        );

        console.log("customerArray:");
        console.log(customers);
        setCustomerObjectArray([]);
        setCustomerObjectArray(customers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [page]); // Effect will run whenever Page changes

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return (
      <Box>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(customerObjectArray) &&
            customerObjectArray.length > 0 ? (
              customerObjectArray.map((customer) => (
                <TableRow
                  key={customer.alias}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {`${customer.alias}`}
                  </TableCell>
                  <TableCell align="right">
                    {customer.objectDetails.address}
                  </TableCell>
                  <TableCell align="right">
                    {customer.objectDetails.phone}
                  </TableCell>
                  <TableCell align="right">
                    {customer.objectDetails.email}
                  </TableCell>
                  <TableCell align="right">
                    <Link
                      to={`/CustomerPreview?alias=${customer.alias}&email=${currentUser.userId.email}`}
                    >
                      <IconButton
                        color="primary"
                        aria-label="move to customer window"
                        size="small"
                      >
                        <NavigateNextIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No customers found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        align="center"
        current={page}
        onChange={handlePageChange}
        defaultCurrent={1}
        total={total}
      />
    </>
  );
}
