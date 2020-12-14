import React from "react";
import { TextField } from "@material-ui/core";
export function TextInput({
  required,
  id,
  name,
  value,
  onChange,
  variant,
  label,
  secure,
  error,
  errorText,
  disabled,
  fullWidth,
  onFocus,
}) {
  return (
    <TextField
      variant={variant || "outlined"}
      margin="normal"
      required={required || false}
      fullWidth={fullWidth}
      onFocus={onFocus ? (event) => onFocus(event.target.name) : () => {}}
      id={id}
      label={label}
      name={name}
      error={error}
      disabled={disabled}
      helperText={errorText}
      value={value}
      type={secure ? "password" : "text"}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
