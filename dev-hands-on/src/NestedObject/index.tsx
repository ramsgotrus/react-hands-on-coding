import React, { FC, useState } from "react";
import "./styles.css";

//define types

interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}

const user = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
};

export const UserProfile: FC = () => {
  const [profile, setProfile] = useState<User>(user);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Address
  ) => {
    const newAddress = { ...profile.address, [field]: e.target.value };
    const updateProfile = { ...profile, address: newAddress };
    setProfile(updateProfile);
  };

  const handleSubmit = () => {
    alert(JSON.stringify(profile));
  };
  return (
    <div className="formController">
      <label className="formItem" htmlFor="name">
        Name:
      </label>
      <input
        className="inputReadOnly"
        type="text"
        name="name"
        id="name"
        value={profile.name}
        readOnly={true}
      />
      <label className="formItem" htmlFor="email">
        Email:
      </label>
      <input
        className="inputReadOnly"
        type="email"
        name="email"
        id="email"
        value={profile.email}
        readOnly={true}
      />
      <label className="formItem" htmlFor="street">
        Street:{" "}
      </label>
      <input
        type="text"
        name="street"
        id="street"
        value={profile.address.street}
        className="formItem"
        onChange={(e) => handleInputChange(e, "street")}
      />
      <label className="formItem" htmlFor="city">
        City:
      </label>
      <input
        className="formItem"
        type="text"
        value={profile.address.city}
        name="city"
        id="city"
        onChange={(e) => handleInputChange(e, "city")}
      />
      <label className="formItem" htmlFor="zipCode">
        Zipcode:
      </label>
      <input
        className="formItem"
        value={profile.address.zipCode}
        name="zipCode"
        id="zipCode"
        onChange={(e) => handleInputChange(e, "zipCode")}
      />
      <button onClick={handleSubmit} className="buttonSubmit">
        Submit
      </button>
    </div>
  );
};
