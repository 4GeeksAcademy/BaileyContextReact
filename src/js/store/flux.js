// import ContactCard from "../component/ContactCard"

// build you application state (any data structure that needs to be shared with everything else) in the store in flux.js , 
// and anything that changes that global application state goes in the actions in flux.js.

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda_slug: "agendaPt59",
			contact: {
				//contact info on form
				fullName: "",
				email: "",
				phone: "",
				address: "",
			},
			contactList: []
		},
		actions: {
			// Use getActions to call a function within a fuction; get doesn't require body
			// fetch().then().then(data => setStore({ "foo": data.bar }))
			//How to get one user?????????????????
			getContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda", {
					method: "GET",
					headers: {"Content-Type":"application/json"}
				})
				const data = await response.json();
				setStore({
					contactList: data.results
				})
			}

			// 	.then((response) => response.json())
			// 	.then((data) => setStore ({contactList: data}))
			// 	.catch(error => console.error(error));
			// });
			// Now what??????update a change when I click save? or back to contacts?
			// updateChange: (event) => {
			// 	//get the store
			// 	const store = getStore();
			// 	setStore({contact: {...store.contact, [event.target.name]: event.target.value} })
			// 	console.log(store.contact)
			// }
		}
	}
}

export default getState;