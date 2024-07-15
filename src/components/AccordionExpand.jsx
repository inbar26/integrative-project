import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";

export default function AccordionExpand(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ fontWeight: "bold" }}>User Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem style={{ justifyContent: "center" }}>
              <Avatar
                alt="profile_image"
                src={props.data.extraDetails.profileImageUrl}
                sx={{ width: 150, height: 150 }}
              >
                {!props.data.extraDetails.profileImageUrl &&
                  props.data.extraDetails.firstName &&
                  props.data.extraDetails.lastName &&
                  `${props.data.extraDetails.firstName[0]}${props.data.extraDetails.lastName[0]}`}
              </Avatar>
            </ListItem>
            <hr />
            <ListItem>
              <ListItemText
                primary={`User Name: ${props.data.essentialDetails.username}`}
                secondary={`(First Name: ${props.data.extraDetails.firstName}, Last Name: ${props.data.extraDetails.lastName})`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Email: ${props.data.essentialDetails.email}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Role: ${props.data.essentialDetails.role}`}
                secondary={`(default)`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`NickName: ${props.data.essentialDetails.avatar}`}
                secondary={"(Avatar)"}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontWeight: "bold" }}>
            Business Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText
                primary={`Name: ${props.data.extraDetails.businessDetails.registrationNumber}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Business ID: ${props.data.extraDetails.businessDetails.businessId}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Registration Number: ${props.data.extraDetails.businessDetails.name}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`City: ${props.data.extraDetails.businessDetails.city}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Address: ${props.data.extraDetails.businessDetails.address}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Phone Number: ${props.data.extraDetails.businessDetails.phoneNumber}`}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
