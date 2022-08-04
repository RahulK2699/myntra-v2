import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectComponent({ Items = [], func }) {
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
    func();
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
      <InputLabel id="demo-select-small">Sort By</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={option}
        label="Sort by"
        onChange={handleChange}
      >
        {Items.map((e) => (
          <MenuItem value={e.value}>{e.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
