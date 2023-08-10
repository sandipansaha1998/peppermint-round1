import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const SelectInput = ({
  category,
  values,
  placeholder,
  setSearchParams,
  searchParams,
}) => {
  let handleChange = (e) => {
    let feild = e.target.name.toLowerCase();
    setSearchParams({ ...searchParams, [feild]: e.target.value });
  };
  return (
    <FormControl
      variant="standard"
      className="col-12 col-md-10"
      style={{ backgroundColor: "white", borderRadius: "8px" }}
    >
      <InputLabel className="mt-1 ms-0 ms-md-4 ">{category}</InputLabel>
      <Select
        className="col-10 mx-0 mx-md-auto mb-2"
        value={searchParams[`${category.toLowerCase()}`]}
        name={category}
        onChange={handleChange}
        label="category"
      >
        <MenuItem value={""} className="text-danger">
          Remove Filter
        </MenuItem>
        {values.map((val, key) => {
          return (
            <MenuItem key={`item-${key}`} value={val}>
              {val}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
