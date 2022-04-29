import {
  Box,
  Container,
  FormControl,
  Heading,
  Progress,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

import Step1 from "../pages/Teams/Step1";
import Step2 from "../pages/Teams/Step2";
import Step3 from "../pages/Teams/Step3";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../Schema";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { createTeam } from "../api/TeamsAPI";

const Team = () => {
  const [page, setPage] = useState(1);

  const { mutateAsync, isLoading } = useMutation(createTeam);

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: null,
    teamGroup: "",
    datePicker: "",
    compliance: false,
  };
  const [formState, setFormState] = useState(initialState);

  const FormTitle = [
    "Personal Information",
    "Contact Information",
    "Choose Team",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(Schema),
  });

  const navigate = useNavigate();
  const toast = useToast();
  const onSubmit = async () => {
    try {
      const result = await mutateAsync(formState);
      if (result) {
        toast({
          title: "Team created.",
          description: "Done creating team.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom-left",
        });
        navigate("/team/team-list");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Progress colorScheme="green" value={page} max={3} />
      <Container>
        <Heading size="xl" textAlign="center" my={5}>
          Create Team
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            style={{ backgroundColor: "#fff" }}
            colorScheme="blue"
            borderRadius="xl"
            boxShadow="md"
            p={5}
          >
            <Heading fontWeight={"medium"} size="md" textAlign="center" mb={3}>
              {FormTitle[page - 1]}
            </Heading>
            {page === 1 ? (
              <Step1
                register={register}
                errors={errors}
                formState={formState}
                setFormState={setFormState}
                page={page}
                setPage={setPage}
              />
            ) : page === 2 ? (
              <Step2
                register={register}
                errors={errors}
                formState={formState}
                setFormState={setFormState}
                page={page}
                setPage={setPage}
              />
            ) : (
              page === 3 && (
                <Step3
                  register={register}
                  errors={errors}
                  formState={formState}
                  setFormState={setFormState}
                  page={page}
                  setPage={setPage}
                  onSubmit={onSubmit}
                  isLoading={isLoading}
                />
              )
            )}
          </FormControl>
        </form>
      </Container>
    </Box>
  );
};

export default Team;
