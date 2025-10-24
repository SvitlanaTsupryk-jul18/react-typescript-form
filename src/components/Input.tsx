import { useState, type ChangeEvent } from "react";

export interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder = "",
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className={error ? "error input-wrapper" : "input-wrapper"}>
      <label htmlFor={label} className={isFocused || value ? "focused" : ""}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="input"
        placeholder={placeholder}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default Input;
