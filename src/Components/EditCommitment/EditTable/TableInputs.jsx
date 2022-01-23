import { FormControl, InputLabel, Input } from "@mui/material";
import { useState } from "react";

export default function TableInputs({ input }) {


  return (
    <>
      <FormControl sx={{ width: 4 / 9, minWidth: "10em" }}>
        <InputLabel htmlFor={`${input}-label`}>{input}</InputLabel>
        <Input id={`${input}-label`} type="text" aria-label={input} />
      </FormControl>
    </>
  );
}
