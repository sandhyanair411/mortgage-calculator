import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const TenureSelect = ({ data, setData }) => {
  const { loanTerm } = data;
  const handleChange = (event) => {
    setData({ ...data, loanTerm: event.target.value });
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={loanTerm}
          label="Tenure"
          onChange={handleChange}
        >
          <MenuItem value={5}>5 Yrs</MenuItem>
          <MenuItem value={10}>10 Yrs</MenuItem>
          <MenuItem value={15}>15 Yrs</MenuItem>
          <MenuItem value={20}>20 Yrs</MenuItem>
          <MenuItem value={25}>25 Yrs</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
export default TenureSelect;
