import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Td,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import { useMutation, useQueryClient } from "react-query";
import { removeTeam } from "../../api/TeamsAPI";

const DeleteTeam = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  teamGroup,
  datePicker,
  id,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading: isMutating } = useMutation(removeTeam);

  const toast = useToast();
  const remove = async () => {
    try {
      const result = await mutateAsync(id);
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
    } catch (error) {}
  };
  return (
    <>
      <Tr>
        <Td>{firstName}</Td>
        <Td>{lastName}</Td>
        <Td>{email}</Td>
        <Td>+63{phoneNumber}</Td>
        <Td>{teamGroup}</Td>
        <Td>{moment(datePicker).format("YYYY/MM/DD")}</Td>
        <Td textAlign="center">
          <Link to={`/team/team-list/edit-team/${id}`}>
            <Button colorScheme="teal" size="sm" mr={3}>
              Edit
            </Button>
          </Link>

          <Button onClick={onOpen} colorScheme="red" size="sm">
            Delete
          </Button>
        </Td>
      </Tr>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Do you really want to delete {firstName} records? This process
            cannot be undone.
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              isLoading={isMutating}
              onClick={remove}
              colorScheme="orange"
            >
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteTeam;
