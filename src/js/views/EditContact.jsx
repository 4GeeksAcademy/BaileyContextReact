import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate, Link } from "react-router-dom";

function EditContact() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addy, setAddy] = useState("");

  //edit via contactId/find gets item var index in url

  const [myContact, setContact] = useState({
    full_name: "",
    address: "",
    phone: "",
    email: "",
    agenda_slug: "klbailey",
  });

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // store.contactList is an array, id is a unique identifier
    const contact = store.contactList.find((item) => item.id == id); // placeholder object
    setName(contact.full_name);
    setAddy(contact.address);
    setPhone(contact.phone);
    setEmail(contact.email);
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Edit Contact</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault(); //prevent page reload

            actions
              .handleEdit(id, {
                full_name: name,
                email: email,
                phone: phone,
                address: addy,
                agenda_slug: store.agenda_slug,
              })
              .then(() => navigate("/"));
          }}
        >
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // onClick={(e) => {}}
              //update form data on click
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              className="form-control"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              value={addy}
              onChange={(e) => setAddy(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary form-control"
            // onClick={() => navigate("/newContact")}
          >
            save
          </button>
          <Link to="/">or get back to contacts</Link>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
