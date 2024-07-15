import axios from "axios";
import * as userService from "./userService";
import * as objectService from "./objectService";
import * as constants from "../utils/constants";
import { json } from "react-router-dom";
import Cookies from "js-cookie";
/*POST New Object (You must be a SUPERAPP_USER to POST an Object)*/
export const postObject = async (objectBoundary) => {
  try {
    const response = await axios.post(
      `${constants.BASE_URL}/superapp/objects`,
      objectBoundary
    );
    console.log("postObject response: ");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};
/* GET Objects By Alias [Array]*/
export const getObjectByAlias = async (user) => {
  try {
    const response = await axios.get(
      `${constants.BASE_URL}/superapp/objects/search/byAlias/${user.userId.email}?userSuperapp=${user.userId.superapp}&userEmail=${user.userId.email}`
    );
    return response.data;
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error;
  }
};
/* PUT Update User */
export const putObject = async (object) => {
  try {
    const response = await axios.put(
      `${constants.BASE_URL}/superapp/objects/${object.objectId.superapp}/${object.objectId.id}`,
      object
    );

    return response.data;
  } catch (error) {
    console.error("Error making PUT request:", error);
    throw error;
  }
};

/* GET Objects By Type [Array]*/
export const getObjectByType = async (user, type) => {
  try {
    const response = await axios.get(
      `${constants.BASE_URL}/superapp/objects/search/byType/${type}?userSuperapp=${user.userId.superapp}&userEmail=${user.userId.email}`
    );
    return response.data;
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error;
  }
};

const createNewObjectBoundary = (currentUser, type, alias, objectDetails) => {
  const newObjectBoundary = {
    objectId: {
      superapp: null,
      id: null,
    },
    type: type, //string (customer , form)
    alias: alias, //string
    location: {
      lat: 0,
      lng: 0,
    },
    active: true,
    creationTimestamp: null,
    createdBy: {
      userId: {
        superapp: currentUser.userId.superapp,
        email: currentUser.userId.email,
      },
    },
    objectDetails: objectDetails,
  };
  return newObjectBoundary;
};

/*
1. PUT - change role
2. POST - object boundary
3. PUT - change role back

*/
export const storeObjectInDataBase = async (
  currentUser,
  type,
  alias,
  ObjectDetails
) => {
  // 1. PUT - change role
  currentUser.role = constants.ROLES.SUPERAPP_USER;
  await userService.putUser(currentUser);
  console.log("after PUT: ");
  console.log(currentUser);
  // 2. Create Object Boundary
  const newObjectBoundary = createNewObjectBoundary(
    currentUser,
    type,
    alias,
    ObjectDetails
  );
  console.log("newObjectBoundary: ");
  console.log(newObjectBoundary);
  console.log("newObjectBoundary (stringify): ");
  console.log(JSON.stringify(newObjectBoundary));

  //3. Post object
  const response = await postObject(newObjectBoundary);
  console.log("Object response: ");
  console.log(response);

  // 4. PUT - change role
  currentUser.role = constants.ROLES.MINIAPP_USER;
  await userService.putUser(currentUser);
  console.log("after PUT2: ");
  console.log(currentUser);
  console.log("@@ FINISH");
  return response;
};
export default createNewObjectBoundary;
