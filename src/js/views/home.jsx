import React, { useEffect, useContext, useState } from "react";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

import "../../styles/home.css";

const Home = () => { 
	const { store, actions } = useContext(Context);
	const [IdContact, setIdContact] = useState("");
	
	useEffect(() => {actions.getContacts()},[])
	return (
		<div className="text-center mt-5">
			<Link to="/ContactCard">Test</Link>
			<Link to="/AddContact">Test</Link>
			{/* put list here? */}
			{/* {store.ContactList.map((contact, index) => { */}
				
				{/* delete goes here? */}
		</div>
	)
};

export default Home;