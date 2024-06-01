import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    axios.get('/api/contacts')
      .then(res => setContacts(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/contacts', newContact)
      .then(res => {
        setContacts([...contacts, res.data]);
        setNewContact({ name: '', email: '', phone: '' });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newContact.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={newContact.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="phone" value={newContact.phone} onChange={handleChange} placeholder="Phone" />
        <button type="submit">Add Contact</button>
      </form>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id}>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
