import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../App.css";

const Step3 = ({
  formState,
  setFormState,
  register,
  errors,
  page,
  setPage,
  onSubmit,
}) => {
  const { teamGroup, datePicker, compliance } = formState;
  const dateToday = new Date();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <FormLabel htmlFor="teamGroup">Team Group:</FormLabel>
      <Select
        {...register("teamGroup")}
        id={"teamGroup"}
        defaultValue={teamGroup}
        onChange={(e) =>
          setFormState({ ...formState, teamGroup: e.target.value })
        }
        placeholder="Select Team"
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
      <FormHelperText display={errors.teamGroup ? "block" : "none"} color="red">
        {errors.teamGroup && errors.teamGroup.message}
      </FormHelperText>

      <FormLabel mt={3}>Date:</FormLabel>
      <DatePicker
        {...register("datePicker")}
        id="datePicker"
        className="datePicker"
        selected={datePicker == "" ? startDate : datePicker}
        minDate={dateToday}
        onChange={(date: Date) => {
          setStartDate(date);
          setFormState({ ...formState, datePicker: date });
        }}
      />
      <FormHelperText
        display={datePicker === "" ? "block" : "none"}
        color="red"
      >
        {errors.datePicker && errors.datePicker.message}
      </FormHelperText>

      <FormLabel mt={3}>Compliance:</FormLabel>
      <Checkbox
        {...register("compliance")}
        id="compliance"
        defaultChecked={compliance}
        onChange={() => setFormState({ ...formState, compliance: !compliance })}
      >
        I hereby agree to store and use my personal information
      </Checkbox>
      <FormHelperText
        display={errors.compliance ? "block" : "none"}
        color="red"
      >
        {errors.compliance && errors.compliance.message}
      </FormHelperText>

      <Box align={"right"} mt={3}>
        <Button
          display={page > 1 ? "inline-flex" : "none"}
          colorScheme="orange"
          mr={3}
          onClick={() => setPage((currentPage) => currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          isDisabled={
            teamGroup === "" || datePicker === "" || compliance === false
              ? true
              : false
          }
          colorScheme="green"
          type={page === 3 ? "submit" : "button"}
          onClick={page === 3 ? () => onSubmit() : ""}
        >
          {page === 3 ? "Submit" : "Next"}
        </Button>
      </Box>
    </>
  );
};

export default Step3;
