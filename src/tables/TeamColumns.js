import { Button, Flex } from "@chakra-ui/react";
import moment from "moment";

export const COLUMNS = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber",
  },
  {
    Header: "Team Group",
    accessor: "teamGroup",
  },
  {
    Header: "Date Picker",
    accessor: "datePicker",
    Cell: ({ value }) => {
      return moment(value).format("YYYY/MM/DD");
    },
  },
  {
    Header: "Action",
    Cell: (props) => {
      return (
        <Flex>
          <Button colorScheme="teal" mr="3">
            Edit
          </Button>
          <Button colorScheme="red">Delete</Button>
        </Flex>
      );
    },
  },
];
