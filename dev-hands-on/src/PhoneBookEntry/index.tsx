import React, { useState } from "react";
import "./styles.css";

interface NewContact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
}
export const PhoneBookEntry = () => {
  const [newContact, setNewContact] = useState<NewContact>({
    firstName: "John",
    lastName: "David",
    phoneNumber: 123456,
  });

  const [phoneBookEntries, setPhoneBookEntries] = useState<NewContact[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneBookEntries((phoneBookEntries) => [
      ...phoneBookEntries,
      newContact,
    ]);
  };

  const hanldeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={hanldeOnChange}
          value={newContact.firstName}
        />
        <label>Last Name</label>
        <input
          type="text"
          value={newContact.lastName}
          name="lastName"
          onChange={hanldeOnChange}
        />
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          onChange={hanldeOnChange}
          value={newContact.phoneNumber}
        />
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
      <ul>
        {phoneBookEntries.map((entry) => (
          <div>
            <li>{entry.firstName}</li>
            <li>{entry.lastName}</li>
            <li>{entry.phoneNumber}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
