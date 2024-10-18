const dummy = "dummy";

export const myGetCurrDate = () => {
  const currDate = new Date();
  const day = String(currDate.getDate()).padStart(2, "0");
  const month = String(currDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = currDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate); // Outputs: "DD/MM/YYYY"
  return formattedDate;
};

export const myLog = (objectToLog) => {
  console.log(`~~> ${objectToLog}: `);
  console.log(objectToLog);
};

export const passwordValidation = (password) => {};

export default dummy;
