import React, { useState } from "react";
import { Checkbox, FormHelperText, FormLabel, Select } from "@chakra-ui/react";

const Step3 = () => {
  return (
    <>
      <FormLabel htmlFor="teamGroup">Team Group:</FormLabel>
      <Select>
        <option hidden>Select Team</option>
        <option value="team red">Team Red</option>
        <option value="team blue">Team Blue</option>
        <option value="team green">Team Green</option>
      </Select>
      <FormHelperText>Error's show here!</FormHelperText>

      <FormLabel htmlFor="compliance" mt={3}>
        Compliance:
      </FormLabel>
      <Checkbox id="compliance">
        I hereby agree to store and use my personal information
      </Checkbox>
      <FormHelperText>Error's show here!</FormHelperText>
    </>
  );
};

export default Step3;
