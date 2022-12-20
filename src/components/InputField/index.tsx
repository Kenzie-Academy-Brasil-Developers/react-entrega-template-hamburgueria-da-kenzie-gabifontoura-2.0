import React, { InputHTMLAttributes } from "react";

import { StyledFieldset, StyledInput, StyledLabel } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";


interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    type: string;
    register?: UseFormRegisterReturn;
    placeholder: string;
    disabled?:boolean;
    onChange?: ( React.ChangeEventHandler<HTMLInputElement> | undefined);
    className?: string;
}

const InputField = ({ id, label, type, register, placeholder, disabled, onChange, className }: iInputProps ) => {
  return (
    <StyledFieldset className={className}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput 
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        onChange={onChange}
        
      />
    </StyledFieldset>
  );
};

export default InputField;
