import logo from "../assets/logo.png";
import OriginalOnTransparent from "../assets/OriginalOnTransparent.png";
import WhiteOnTransparent from "../assets/WhiteOnTransparent.png";
import gift from "../assets/gift.png";

export const APP_NAME = "FinRise";
export const SUPERAPP_NAME = "2024b.noa.sharabi";
export const ROLES = {
  ADMIN: "ADMIN",
  MINIAPP_USER: "MINIAPP_USER",
  SUPERAPP_USER: "SUPERAPP_USER",
};

export const BASE_URL = "https://finrise.azurewebsites.net";
export const BASE_URL2 = "https://localhost:8084";
export const IMAGES = {
  LOGO: logo,
  ORIGINAL_ON_TRANSPARENT: OriginalOnTransparent,
  WHITE_ON_TRANSPARENT: WhiteOnTransparent,
  GIFT: gift,
};

export const CLASS_TYPE = {
  USER_DATA: "UserData",
  FORM: "Form",
  CUSTOMER: "Customer",
  ACCOUNTANT: "Accountant",
};
export const COMMAND_NAME = {
  ALL_OBJECTS_BY_TYPE_AND_CREATED_BY: "GetAllObjectsByTypeAndUserIdCommand",
  CUSTOMER_FORMS: "customerForms",
};
export const COLORS = {
  PRIMARY: "rgb(14, 186, 151)",
};

export const FORM_TYPE = {
  TAX_INVOICE: "Tax Invoice",
  QUOTE: "Quote",
  RECEIPT: "Receipt",
  DELIVERY_NOTE: "Delivery Note",
  RECEIPT_TAX_INVOICE: "Receipt Tax Invoice",
};
export const CURRENCY = {
  DOLLAR: "$",
  EURO: "€",
  NIS: "₪",
};

export const PAYMENT_TYPE = {
  CREDIT_CARD: "Credit Card",
  CASH: "Cash",
  BANK_TRANSFER: "Bank Transfer",
};

export default APP_NAME;
