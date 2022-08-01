import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButton({ size = "small" }) {
  const radiofunc = () => {
    return (
      <Radio
        size={size}
        sx={{
          color: "#03a685",
          "&.Mui-checked": {
            color: "#03a685",
          },
        }}
      />
    );
  };
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="male" control={radiofunc(size)} label="Male" />
        <FormControlLabel
          value="female"
          control={radiofunc(size)}
          label="Female"
        />
      </RadioGroup>
    </FormControl>
  );
}
