import React, { useState } from "react";
import { Checkbox, FormHelperText, FormLabel, Select } from "@chakra-ui/react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../App.css";

const Step3 = ({ formState, setFormState }) => {
  const { teamGroup, datePicker, compliance } = formState;
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <FormLabel htmlFor="teamGroup">Team Group:</FormLabel>
      <Select
        id={"teamGroup"}
        defaultValue={teamGroup}
        onChange={(e) =>
          setFormState({ ...formState, teamGroup: e.target.value })
        }
      >
        <option hidden>Select Team</option>
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
      <FormHelperText>Error's show here!</FormHelperText>
      <FormLabel mt={3}>Date:</FormLabel>
      <DatePicker
        id="datePicker"
        className="datePicker"
        selected={datePicker == "" ? startDate : datePicker}
        onChange={(date: Date) => {
          setStartDate(date);
          setFormState({ ...formState, datePicker: date });
        }}
      />
      <FormHelperText>Error's show here!</FormHelperText>

      <FormLabel mt={3}>Compliance:</FormLabel>
      <Checkbox
        id="compliance"
        defaultChecked={compliance}
        onChange={() => setFormState({ ...formState, compliance: !compliance })}
      >
        I hereby agree to store and use my personal information
      </Checkbox>
      <FormHelperText>Error's show here!</FormHelperText>
    </>
  );
};

export default Step3;
