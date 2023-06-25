
import { Slider,Stack,Typography } from "@mui/material";
import React from "react";

const SliderComponent = ({ defaultValue, min, max, step, onChange, value,label,unit,amount }) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
      <Typography variant="subtitle2">{label}</Typography>
      <Typography variant="h5">{unit} {amount}</Typography>
      </Stack>  
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        valueLabelDisplay={"auto"}
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography color={'text.secondary'} variant="caption">{unit} {min}</Typography>
        <Typography color={'text.secondary'} variant="caption">{unit} {max}</Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
