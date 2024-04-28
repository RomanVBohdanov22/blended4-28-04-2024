import { useEffect, useState } from "react";
import { getContacts } from "../api/axiosClient";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContacts().then((data) => {
      setContacts(data);
      console.log(data);
    });
  }, []);
  return contacts.map((contact) => {
    return <p key={contact._id}>{JSON.stringify(contact)}</p>;
  }); // {JSON.stringify(contacts)}
};
