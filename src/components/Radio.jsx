import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButton({ size = "small", onChange, error }) {
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
    <div className="relative">
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            name="gender"
            onChange={onChange}
            value="male"
            control={radiofunc(size)}
            label="Male"
          />
          <FormControlLabel
            name="gender"
            onChange={onChange}
            value="female"
            control={radiofunc(size)}
            label="Female"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
