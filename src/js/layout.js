import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./views/AddContact.jsx";
import Contact from "./views/Contact.jsx";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter basename={basename}>
			<Routes>
				<Route path="/" element={<Contact />} />
				<Route path="/newContact" element={<AddContact />} />
				{/* <Route path="/editContact/:contactId" element={<EditContact />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
