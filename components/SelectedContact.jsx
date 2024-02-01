import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";
import ContactList from "./ContactList";

const contact = ({ selectedContactId, setSelectedContactId }) => {
  return <div onClick={() => setSelectedContactId(contactId)} className={contactId}></div>;
};
useEffect (() => { // Calling a useEffect and passing a callback.
    const fetchContact = async () => {
        try {
            fetch url = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}"
            const response = await fetch(url); 
        if (response.ok) {
            const contactData = await response.json(); 
            setContact(contactData); 
            console.log(contactData); 
        } else {
            console.error('Error. Status: ${response.status}'); 
        }    
        } catch (error) {   
            console.error('Error fetching data:', error); 
        }}
    }); 
    const GoBackToList = () => {
        setSelectedContactId(null);
    };
    return {
        <button onClick={GoBackToList}>Back to List</button>
    };

export default SelectedContact;
