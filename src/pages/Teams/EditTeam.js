import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Spinner,
  Stack,
  useDisclosure,
  FormControl,
  FormHelperText,
  Center,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTeam, updateTeam } from "../../api/TeamsAPI";
import DatePicker from "react-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../../Schema";

const EditTeam = () => {
  const { id } = useParams();
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/team/team-list");
  };
  const { data, isLoading, isError } = useQuery(["team", { id }], getTeam, {
    cacheTime: 0,
  });
  const { mutateAsync, isLoading: isMutating } = useMutation(updateTeam);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(Schema),
  });

  const toast = useToast();
  const queryClient = useQueryClient();
  const onSubmit = async (data) => {
    try {
      const result = await mutateAsync({ ...data, id });
      if (result) {
        queryClient.invalidateQueries("teams");
        toast({
          title: "Update Team",
          description: "Done updating team.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom-left",
        });
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Drawer
      onOverlayClick={handleClose}
      onEsc={handleClose}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent overflow="auto">
        {isLoading ? (
          <Center h="100%">
            <Spinner />
          </Center>
        ) : isError ? (
          <Center h="100%">
            <Box>Error</Box>
          </Center>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <DrawerCloseButton onClick={handleClose} />

            <DrawerHeader borderBottomWidth="1px" textAlign="center">
              Edit Team
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="firstName">First name</FormLabel>
                    <Input
                      {...register("firstName")}
                      defaultValue={data.firstName}
                      id="firstName"
                      placeholder="Please enter first name"
                      mb={3}
                      borderColor={errors.firstName && "red"}
                    />
                    <FormHelperText
                      display={errors.firstName ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.firstName && errors.firstName.message}
                    </FormHelperText>

                    <FormLabel htmlFor="lastName">Last name</FormLabel>
                    <Input
                      {...register("lastName")}
                      defaultValue={data.lastName}
                      id="lastName"
                      placeholder="Please enter lasts name"
                      mb={3}
                      borderColor={errors.lastName && "red"}
                    />
                    <FormHelperText
                      display={errors.lastName ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.lastName && errors.lastName.message}
                    </FormHelperText>

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      {...register("email")}
                      id="email"
                      defaultValue={data.email}
                      placeholder="Enter your email..."
                      mb={3}
                      borderColor={errors.email && "red"}
                    />
                    <FormHelperText
                      display={errors.email ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.email && errors.email.message}
                    </FormHelperText>

                    <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="+63" />
                      <Input
                        {...register("phoneNumber")}
                        id="phoneNumber"
                        placeholder="9xxxxxxxxx"
                        defaultValue={data.phoneNumber}
                        maxLength={10}
                        mb={3}
                        borderColor={errors.phoneNumber && "red"}
                      />
                    </InputGroup>
                    <FormHelperText
                      display={errors.phoneNumber ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.phoneNumber && errors.phoneNumber.message}
                    </FormHelperText>

                    <FormLabel htmlFor="teamGroup">Team Group:</FormLabel>
                    <Select
                      {...register("teamGroup")}
                      id={"teamGroup"}
                      defaultValue={data.teamGroup}
                      placeholder="Select Team"
                      mb={3}
                      borderColor={errors.teamGroup && "red"}
                    >
                      <option value="Team Red" id="teamRed">
                        Team Red
                      </option>
                      <option value="Team Blue" id="teamBlue">
                        Team Blue
                      </option>
                      <option value="Team Green" id="teamGreen">
                        Team Green
                      </option>
                    </Select>
                    <FormHelperText
                      display={errors.teamGroup ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.teamGroup && errors.teamGroup.message}
                    </FormHelperText>

                    <FormLabel mt={3}>Date:</FormLabel>
                    <Controller
                      control={control}
                      name="datePicker"
                      render={({ field }) => (
                        <DatePicker
                          todayButton="Today"
                          dateFormat="MM/dd/yyyy"
                          isClearable
                          placeholderText="New date"
                          className="datePicker"
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                        />
                      )}
                    />

                    <FormHelperText
                      display={errors.datePicker ? "block" : "none"}
                      color="red"
                      fontSize="sm"
                      mb={2}
                    >
                      {errors.datePicker && errors.datePicker.message}
                    </FormHelperText>
                    <Checkbox
                      display="none"
                      {...register("compliance")}
                      id="compliance"
                      defaultChecked={true}
                    >
                      I hereby agree to store and use my personal information
                    </Checkbox>
                  </FormControl>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Link to="/team/team-list">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </Link>

              <Button isLoading={isMutating} colorScheme="blue" type="submit">
                Submit
              </Button>
            </DrawerFooter>
          </form>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default EditTeam;
