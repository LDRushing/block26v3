import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";
import ContactList from "./ContactList";''

export default function{{ selectedContactId }} {
const contact = ({ selectedContactId, setSelectedContactId }) => {
  return <div onClick={() => setSelectedContactId(contactId)} className={contactId}></div>;
};
useEffect (() => { // Calling a useEffect and passing a callback.
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
}, []); 
  
    return (
        <section style={{ backgroundColor: "blue"}}> 
        {contact ? (
            <div>
           <h1>{contact.name}</h1>
           <a href={`mail to:${contact.email}`}>Talk to me!</a>
           <button>Click here!</button>
           </div>
        ) : (
        )}
         <button onClick={GoBackToList}>Back to List</button>
        </section>
    );
export default App;
