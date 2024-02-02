export default function ContactRow({ setSelectedContactId, contact, }) { //Contact row is being rendered by ContactList.
  console.log(color); 
  return (
      <tr
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
  //