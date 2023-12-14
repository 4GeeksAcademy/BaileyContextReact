// import ContactCard from "../component/ContactCard"

// build you application state (any data structure that needs to be shared with everything else) in the store in flux.js ,
// and anything that changes that global application state goes in the actions in flux.js.

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      agenda_slug: "agendaPt59",
      // contact: {
      // 	//contact info on form
      // 	fullName: "",
      // 	email: "",
      // 	phone: "",
      // 	address: "",
      // },
      // Define the array
      contactList: [
        {
          // Dummy data for the first contact
          fullName: "John Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          address: "123 Main St, Cityville",
        },
        {
          // Dummy data for the second contact
          fullName: "Jane Smith",
          email: "jane.smith@example.com",
          phone: "987-654-3210",
          address: "456 Oak St, Townsville",
        },
        {
          // Dummy data for the third contact
          fullName: "Bob Johnson",
          email: "bob.johnson@example.com",
          phone: "555-123-4567",
          address: "789 Pine St, Villagetown",
        },
        {
          // Dummy data for the fourth contact
          fullName: "Alice Williams",
          email: "alice.williams@example.com",
          phone: "111-222-3333",
          address: "101 Elm St, Hamletsville",
        },
        // You can add more contacts as needed
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction; get doesn't require body
      // fetch().then().then(data => setStore({ "foo": data.bar }))
      //How to get one user?????????????????
      getContacts: async () => {
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        setStore({
          contactList: data.results,
        });
      },
      // Now what??????update a change when I click save? or back to contacts?
      //Is this the Add new contact action?
      updateChange: (event) => {
        //get the store
        const store = getStore();
        setStore({
          contactList: {
            ...store.contactList,
            [event.target.name]: event.target.value,
          },
        });
        console.log(store.contactList);
      },
    },
  };
};

export default getState;
