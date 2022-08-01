import React, { useEffect, useRef } from "react";

import TextField from "@mui/material/TextField";

export default function Input({
  label,
  type = "text",
  size = "large",
  name,
  value,
  fullWidth = true,
  maxLength = "255",
  className,
  autoComplete,
  required,
  isFocused,
  handleChange,
  helperText,
}) {
  const input = useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <TextField
      sx={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        "& .MuiInputBase-root": {
          height: 37,
          fontSize: 14,
        },
        "&:hover fieldset": {
          borderColor: "none",
        },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": {
            borderColor: "none",
            opacity: 60,
            borderRadius: "0px",
          },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            borderColor: "#404050",
            borderRadius: "0px",
            opacity: 60,
          },
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "#404050",
            borderRadius: "0px",
            opacity: 60,
          },
        },
      }}
      inputProps={{
        autoComplete: "off",
      }}
      autoFocus
      label={label}
      variant="outlined"
      id={name}
      fullWidth={fullWidth}
      name={name}
      value={value}
      ref={input}
      type={type}
      size={size}
      helperText={helperText}
      autoComplete={autoComplete}
      required={required}
      onChange={(e) => handleChange(e)}
      InputLabelProps={{
        style: {
          fontFamily: "sans-serif",
          fontSize: 14,
        },
      }}
    />
  );
}
