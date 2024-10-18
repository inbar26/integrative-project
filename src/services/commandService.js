import axios from "axios";
import * as userService from "./userService";
import * as objectService from "./objectService";
import * as constants from "../utils/constants";

/*POST New Command */
export const postCommand = async (commandBoundary, miniappName) => {
  try {
    const response = await axios.post(
      `${constants.BASE_URL}/superapp/miniapp/${miniappName}`,
      commandBoundary
    );
    console.log("postCommand response: ");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

export const createCommand = (
  commandName,
  currentUser,
  userObjectId,
  commandDetails
) => {
  console.log("currentUser: ");
  console.log(currentUser);
  const newCommand = {
    commandId: {
      superapp: "string",
      miniapp: "string",
      id: "string",
    },
    command: commandName,
    targetObject: {
      objectId: {
        superapp: currentUser.userId.superapp,
        id: userObjectId,
      },
    },
    invocationTimestamp: null,
    invokedBy: {
      userId: {
        superapp: currentUser.userId.superapp,
        email: currentUser.userId.email,
      },
    },
    commandAttributes: commandDetails,
  };

  return newCommand;
};

export const invokeCommand = async (
  miniappName,
  commandName,
  currentUser,
  userObjectId,
  commandDetails
) => {
  const newCommand = createCommand(
    commandName,
    currentUser,
    userObjectId,
    commandDetails
  );
  console.log("newCommand: ");
  console.log(newCommand);
  const objectArray = await postCommand(newCommand, miniappName);

  return objectArray;
};
