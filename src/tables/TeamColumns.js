import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import moment from "moment";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { removeTeam } from "../api/TeamsAPI";

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
      // To open modal
      const { isOpen, onOpen, onClose } = useDisclosure();
      // To refetch table data
      const queryClient = useQueryClient();
      // To process deleting
      const { mutateAsync, isLoading } = useMutation(removeTeam);
      // For messaging
      const toast = useToast();
      // Function handle remove data
      const remove = async () => {
        try {
          // props.row.original.id is the id of the row of data
          const result = await mutateAsync(props.row.original.id);
          if (result) {
            queryClient.invalidateQueries("teams");
            onClose();
            toast({
              title: "Delete Team",
              description: "Done Deleting team.",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "bottom-left",
            });
          }
        } catch (error) {
          onClose();
          toast({
            title: "Error Deleting Team",
            description: "Error.",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "bottom-left",
          });
        }
      };

      return (
        <>
          <Flex>
            <Link to={`/team/team-list/edit-team/${props.row.original.id}`}>
              <Button colorScheme="teal" mr="3" size="xs">
                Edit
              </Button>
            </Link>
            <Button colorScheme="red" onClick={onOpen} size="xs">
              Delete
            </Button>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign="center">Are you sure?</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Do you really want to delete {props.row.original.firstName}{" "}
                records? This process cannot be undone.
              </ModalBody>

              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  onClick={remove}
                  isLoading={isLoading}
                  colorScheme="orange"
                >
                  Proceed
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );
    },
  },
];
