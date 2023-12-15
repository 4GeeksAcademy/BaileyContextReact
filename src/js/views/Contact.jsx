//List of contacts
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard.jsx";
//import modal when its made?
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";

function Contact() {
  const { store, actions } = useContext(Context);
  const [contactList, setContactList] = useState(store.contactList);
  return (
    <div className="container">
      <div>
        <p className="text-right my-3">
          <Link className="btn btn-success" to="/newContact">
            Add new contact
          </Link>
        </p>
        <div
          id="contacts"
          className="panel-collapse collapse show"
          aria-expanded="true"
        >
          <ul className="list-group pull-down" id="contact-list">
            {contactList.map((contact, index) => {
              return <ContactCard key={index} data={contact} />;
            })}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;