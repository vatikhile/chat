import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function Chat() {
  // const LOCAL_STORAGE_KEY = "contacts";
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  // );

  // const addContactHandler = (contact) => {
  //   console.log(contact);
  //   setContacts([...contacts, { id: uuid(), ...contact }]);
  // };

  // const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

    // setContacts(newContactList);
  // };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="container-sm">
      {/* <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      
  <div class="row">
    <div class="col-3">
      <div class="alert alert-success" role="alert">
      <div class="card">
        <div class="card-header">
          Chat Contact
        </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>

            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            
          </ul>
        </div>
      </div>
    </div>
    
    <div class="col-9">
    <div class="alert alert-info" role="alert">
      
      </div>
    </div>
  </div>

    </div>
  );
}

export default Chat;
