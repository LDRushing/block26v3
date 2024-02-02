import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";
import ContactList from "./ContactList";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact]=useState(null)
useEffect (() => { // Calling a useEffect and passing a callback.
    console.log(selectedContactId);
    async function getContact () {
        try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        const result = await response.json();    
        setContact(result); 
    } catch (error) {   
        console.error('Error fetching data:', error); 
        }
    }
        getContact();
        console.log(contact); 
}, []); 
  function GoBackToList (){setSelectedContactId(null)} 
    return (
        <section style={{ backgroundColor: "blue"}}> 
        {contact ? (
            <div>
           <h1>{contact.name}</h1>
          <button><a href={`mailto:${contact.email}`}>Talk to me!</a></button>
           </div>
        ) : ( (null)
        )}
         <button onClick={GoBackToList}>Back to List</button>
        </section>
    )};