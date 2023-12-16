//form used to create or update contacts
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";
//edit/id
function EditContact() {
  const navigate = useNavigate();
  const params = useParams();
  const { store, actions } = useContext(Context);
  //find gets item var index in url
  // const contact = store.contactList.find((item, index)=>index==params.index)
  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Edit Contact</h1>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              onClick={(e) =>
                this.setState({
                  full_name: e.target.value,
                })
              }
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
            onClick={() =>
              actions.EditContact({
                full_name: this.state.full_name,
              })
            }
          >
            save
          </button>
          <Link className="mt-3 w-100 text-center" to="/">
            or get back to contacts
          </Link>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
