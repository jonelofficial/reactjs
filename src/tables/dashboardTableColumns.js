import moment from "moment";

export const COLUMNS = [
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    Footer: "Phone Number",
    accessor: "phoneNumber",
  },
  {
    Header: "Team Group",
    Footer: "Team Group",
    accessor: "teamGroup",
  },
  {
    Header: "Date Picker",
    Footer: "Date Picker",
    accessor: "datePicker",
    Cell: ({ value }) => {
      return moment(value).format("YYYY/MM/DD");
    },
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "lastName",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Phone Number",
        Footer: "Phone Number",
        accessor: "phoneNumber",
      },
      {
        Header: "Team Group",
        Footer: "Team Group",
        accessor: "teamGroup",
      },
      {
        Header: "Date Picker",
        Footer: "Date Picker",
        accessor: "datePicker",
      },
    ],
  },
];
