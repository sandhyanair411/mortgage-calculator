import React from "react";
import SliderComponent from "./common/SliderComponent";
const SliderSelect = ({ data, setData }) => {
  const { homeValue, downPayment, loanAmount, interestRate } = data;
  return (
    <>
      <SliderComponent
        defaultValue={3000}
        min={1000}
        max={10000}
        step={100}
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
          });
        }}
        label={"Home Value"}
        value={homeValue}
        unit={"$"}
        amount={homeValue}
      />
      <SliderComponent
        defaultValue={downPayment}
        min={0}
        max={homeValue}
        marks
        step={100}
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: value,
            loanAmount: data.homeValue - value,
          });
        }}
        label={"Down Payment"}
        value={downPayment}
        unit={"$"}
        amount={downPayment}
      />
      <SliderComponent
        defaultValue={loanAmount}
        value={loanAmount}
        min={0}
        max={homeValue}
        step={100}
        onChange={(e,value) => {
          setData({
            ...data,
            loanAmount: value,
            downPayment: data.homeValue - value,
          });
        }}
        label={"Loan Amount"}
        unit={"$"}
        amount={loanAmount}
      />
      <SliderComponent
        defaultValue={interestRate}
        value={interestRate}
        marks
        min={2}
        max={18}
        step={0.5}
        onChange={(e,value) => {
          setData({
            ...data,
            interestRate: value,
          });
        }}
        label={"Interest Rate"}
        unit={"%"}
        amount={interestRate}
      />
    </>
  );
};
export default SliderSelect;
