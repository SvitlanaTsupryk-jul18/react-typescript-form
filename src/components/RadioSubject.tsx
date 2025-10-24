import type { ChangeEvent } from "react";
import check from "../assets/check.svg";

 interface RadioData {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const RadioSubject = ({ name, value, checked, onChange, label }: RadioData) => {
  return (
    <div className="radio-container">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="radio-input"
      />
      <label htmlFor={value} className="radio-label">
        <span className="radio-icon">
          {checked && <img className="open-icon" src={check} />}
        </span>
        <span className="radio-text">{label}</span>
      </label>
    </div>
  );
};

export default RadioSubject;
