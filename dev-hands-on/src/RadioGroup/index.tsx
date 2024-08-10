import React, { FC, useState } from "react";

interface RadioGroupProps {
  options: string[];
  genderOptions: string[];
}

export const RadioGroup: FC<RadioGroupProps> = ({ options, genderOptions }) => {
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAge(value);
  };
  const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGender(value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <div>
        {options.map((option) => (
          <div style={{ display: "inline-block" }}>
            <input
              type="radio"
              value={option}
              name="age"
              onChange={handleChangeAge}
              readOnly={true}
              checked={age === option}
            />
            <span>{option}</span>
          </div>
        ))}
      </div>
      <div>
        {genderOptions.map((genderOption) => (
          <div style={{ display: "inline-block" }}>
            <input
              type="radio"
              value={genderOption}
              readOnly={true}
              checked={genderOption === gender}
              onChange={handleChangeGender}
            />
            <span>{genderOption}</span>
          </div>
        ))}
        <pre>
          {age}
          {genderOptions}
        </pre>
      </div>
    </div>
  );
};
