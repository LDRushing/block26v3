export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
        console.log(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
} //Parent is the contact list, and the child is the rows inside the list itself. 