import { Select,MenuItem,FormControl,InputLabel } from "@mui/material";

const TenureSelect = ({data,setData})=>{
    const {loanTerm} = data;
    const handleChange = (event) => {
        setData({...data,loanTerm:event.target.value});
      };
    return <>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={loanTerm}
          label="Tenure"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
</>
}
export default TenureSelect;