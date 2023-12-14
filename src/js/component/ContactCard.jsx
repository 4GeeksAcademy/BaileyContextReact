//displays one contact

import { Link } from "react-router-dom";
import React, { useContext } from "react";
import {Context } from "../store/appContext";

function ContactCard({data}){
    const { store, actions } = useContext(Context);
    return(
        <div className="card">
            <div className="row g-0">
                <div className="col-md-3 px-3 py-2 d-flex align-items-center justify-content-around">
                <img src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Mike Anamendolla" 
                    className="rounded-circle mx-auto d-block img-fluid" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{data.fullName}</h5>
                        <p className="card-text"><i className="fa-solid fa-location-dot me-2"></i>{data.address}</p>
                        <p className="card-text"><i className="fa-solid fa-phone-flip me-2"></i>{data.phone}</p>
                        <p className="card-text"><i className="fa-solid fa-envelope me-2"></i>{data.email}</p>
                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-around">
                    <Link to="/AddContact"><button className="btn"><i className="fa-solid fa-pencil"></i></button></Link>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;