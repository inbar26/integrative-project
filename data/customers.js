import * as constants from "../src/utils/constants";

const customers = [
  {
    firstName: "Yosi",
    lastName: "Ben Shushan",
    address: "789 Oak St",
    phone: "555-9876",
    email: "yosi@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
  {
    firstName: "Inbar",
    lastName: "Zafar",
    address: "123 Main St",
    phone: "555-1234",
    email: "inbar@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
  {
    firstName: "Roy",
    lastName: "Rubin",
    address: "456 Elm St",
    phone: "555-5678",
    email: "roy@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
  {
    firstName: "Ben",
    lastName: "Mendelson",
    address: "101 Pine St",
    phone: "555-4321",
    email: "ben@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
  {
    firstName: "Noa",
    lastName: "Sharabi",
    address: "202 Cedar St",
    phone: "555-8765",
    email: "noa@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
];

export const customers1 = [
  {
    firstName: "Yosi",
    lastName: "Ben Shushan",
    address: "789 Oak St",
    phone: "555-9876",
    email: "yosi@example.com",
    forms: [
      {
        id: "1000",
        customerName: "Yosi Ben Shushan",
        createDate: "26/07/1996",
        type: constants.FORM_TYPE.TAX_INVOICE,
        documentDescription: "This is the document description...",
        paymentDueDate: "04/04/1996",
        notes: "This is my notes bla bla bla",
        isOpen: true,
        productArray: [
          {
            name: "Shirt",
            quantity: "120",
            unitPrice: "20",
            currency: constants.CURRENCY.DOLLAR,
            vat: true,
          },
          {
            name: "Pants",
            quantity: "150",
            unitPrice: "30",
            currency: constants.CURRENCY.EURO,
            vat: true,
          },
        ],
      },
      {
        id: "1001",
        customerName: "Yosi Ben Shushan",
        createDate: "1.1.2022",
        documentDescription: "This is the document description...",
        type: constants.FORM_TYPE.RECEIPT,
        isOpen: false,
        paymentDueDate: "26.7.24",
        hasTax: false,
        notes: "This is my notes bla bla bla",
      },
    ],
  },
  {
    firstName: "Noa",
    lastName: "Sharabi",
    address: "202 Cedar St",
    phone: "555-8765",
    email: "noa@example.com",
    forms: [
      {
        id: "1000",
        customerName: "Noa Sharabi",
        createDate: "2/03/1996",
        type: constants.FORM_TYPE.TAX_INVOICE,
        documentDescription: "This is the document description...",
        paymentDueDate: "04/04/1996",
        notes: "This is my notes bla bla bla",
        isOpen: true,
        productArray: [
          {
            name: "Shirt",
            quantity: "120",
            unitPrice: "20",
            currency: constants.CURRENCY.DOLLAR,
            vat: true,
          },
          {
            name: "Pants",
            quantity: "150",
            unitPrice: "30",
            currency: constants.CURRENCY.EURO,
            vat: true,
          },
        ],
      },
      {
        id: "1001",
        customerName: "Noa Sharabi",
        createDate: "5.1.1886",
        documentDescription: "This is the document description...",
        type: constants.FORM_TYPE.RECEIPT,
        isOpen: false,
        paymentDueDate: "26.7.24",
        hasTax: false,
        notes: "This is my notes bla bla bla",
      },
    ],
  },
];

// export const forms = {
//   taxInvoices: [
//     {
//       data: {
//         isOpen: false,
//         payDate: `26.7.24`,
//         hasTax: false,
//       },
//     },
//     {
//       data: {
//         isOpen: false,
//         payDate: `12.6.24`,
//         hasTax: true,
//       },
//     },
//   ],
//   quotes: [
//     {
//       data: {
//         hasTax: true,
//       },
//     },
//   ],
//   receipts: [
//     {
//       data: {
//         taxInvoiceId: "112233",
//         paymentMethod: "credit card",
//       },
//     },
//   ],
//   deliveryNotes: [
//     {
//       data: {
//         hasTax: true,
//         nameOfDeliveryPerson: "Jeff",
//         signature: "jeff",
//       },
//     },
//   ],
//   receiptTaxInvoices: [
//     {
//       data: {
//         hasTax: true,
//         paymentMethod: "credit card",
//       },
//     },
//   ],
// };

// const customers = [
//   {
//     id:"from object boundry",
//     firstName: "Yosi",
//     lastName: "Ben Shushan",
//     address: "789 Oak St",
//     phone: "555-9876",
//     email: "yosi@example.com",
//     forms: [
//       {
//         data:{
//           id: "1000",
//           dateCreated: "1.1.22",
//           type: "FORM A",
//           formData:{
//             isOpen: false,
//             payDate: `26.7.24`,
//             hasTax: false,
//             product
//           }

//         }
//     }
//   ]

//     documents: {
//       taxInvoices: [
//         {
//           id: "1000",
//           dateCreated: "1.1.22",
//           data: {
//             isOpen: false,
//             payDate: `26.7.24`,
//             hasTax: false,
//           },
//         },
//         {
//           data: {
//             isOpen: false,
//             payDate: `12.6.24`,
//             hasTax: true,
//           },
//         },
//       ],
//       quotes: [
//         {
//           data: {
//             hasTax: true,
//           },
//         },
//       ],
//       receipts: [
//         {
//           data: {
//             taxInvoiceId: "112233",
//             paymentMethod: "credit card",
//           },
//         },
//       ],
//       deliveryNotes: [
//         {
//           data: {
//             hasTax: true,
//             nameOfDeliveryPerson: "Jeff",
//             signature: "jeff",
//           },
//         },
//       ],
//       receiptTaxInvoices: [
//         {
//           data: {
//             hasTax: true,
//             paymentMethod: "credit card",
//           },
//         },
//       ],
//     },
//     documents: {
//       taxInvoices: [
//         {
//           data: {
//             isOpen: false,
//             payDate: `26.7.24`,
//             hasTax: false,
//           },
//         },
//         {
//           data: {
//             isOpen: false,
//             payDate: `12.6.24`,
//             hasTax: true,
//           },
//         },
//       ],
//       quotes: [
//         {
//           data: {
//             hasTax: true,
//           },
//         },
//       ],
//       receipts: [
//         {
//           data: {
//             taxInvoiceId: "112233",
//             paymentMethod: "credit card",
//           },
//         },
//       ],
//       deliveryNotes: [
//         {
//           data: {
//             hasTax: true,
//             nameOfDeliveryPerson: "Jeff",
//             signature: "jeff",
//           },
//         },
//       ],
//       receiptTaxInvoices: [
//         {
//           data: {
//             hasTax: true,
//             paymentMethod: "credit card",
//           },
//         },
//       ],
//     },
//   }

export default customers;
