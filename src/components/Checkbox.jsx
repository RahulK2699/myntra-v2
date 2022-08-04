import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxComponent({
  label,
  defaultChecked = false,
  onChange,
}) {
  return (
    <FormGroup style={{ width: 150 }}>
      <FormControlLabel
        style={{ margin: 0 }}
        onChange={onChange}
        control={
          <Checkbox
            style={{
              paddingTop: 1,
              paddingBottom: 1,
              paddingLeft: 0,
              stroke: "#fff",
              strokeWidth: "0.05rem",
            }}
            sx={{
              "&.Mui-checked": {
                color: "#ff3e6c",
              },
              " & + .MuiFormControlLabel-label": {
                fontWeight: 100,
                minWidth: 100,
                maxWidth: 150,
                fontSize: 12,
                stroke: "#fff",
                strokeWidth: "0.05rem",
              },
            }}
            size="small"
            defaultChecked={defaultChecked}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}
