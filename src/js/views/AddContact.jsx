//form used to create contacts

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate, Link } from "react-router-dom";

function AddContact() {
  const navigate = useNavigate();
  //new contact formData object fname email add phone
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addy, setAddy] = useState("");

  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
        <form onSubmit={(e) => {
          e.preventDefault();//prevent page reload
          
          actions.handleAdd({
            full_name: name,
            email: email,
            phone: phone,
            address: addy,
            agenda_slug: store.agenda_slug
          }).then(()=>navigate("/"))
        }}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={e=>setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              className="form-control"
              placeholder="Enter phone"
              value={phone}
              onChange={e=>setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              value={addy}
              onChange={e=>setAddy(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary form-control"
          >
            save
          </button>
          <Link to="/">
            or get back to contacts
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
