//form used to create or update contacts

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate, Link } from "react-router-dom";

function AddContact() {
  const navigate = useNavigate();
  //new contact formData object fn email add phone
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
  });
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              onClick={(e) => {}}
              //update form data on click
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              className="form-control"
              placeholder="Enter phone"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary form-control"
            onClick={() => navigate("/newContact")}>save
          </button>
          <Link to="/">
            <a>or get back to contacts</a>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
