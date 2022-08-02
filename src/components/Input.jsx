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
  onChange,
  error,
}) {
  const input = useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <div className=" relative">
      {" "}
      <TextField
        sx={{
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          "& .MuiInputLabel-formControl": {
            color: "#6a6a78",
            marginLeft: "0px",
          },
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
        autoComplete={autoComplete}
        required={required}
        onChange={onChange}
        InputLabelProps={{
          style: {
            fontFamily: "sans-serif",
            fontSize: 14,
          },
        }}
      />
      <p
        className={`${
          name === "alternate_phn_no" ? "" : "text-btnred"
        } absolute text-[10px]`}
      >
        {error}
      </p>
    </div>
  );
}
