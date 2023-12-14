import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./views/AddContact.jsx";
import Contact from "./views/Contact.jsx";
import Home from "./views/home.jsx";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter basename={basename}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/AddContact" element={<AddContact />} />
			</Routes>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
