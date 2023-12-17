// build application state (any data structure that needs to be shared with everything else) in the store in flux.js ,
// and anything that changes that global application state goes in the actions in flux.js.

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      agenda_slug: "klbailey",
      API: "https://playground.4geeks.com/apis/fake/contact",
      contactList: [],
    },
    actions: {
      // Use getContacts to call a function within a fuction; get doesn't require body
      getContacts: () => {
        let store = getStore();
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda/klbailey")
          .then((response) => response.json())
          .then((data) => setStore({ contactList: data }));
      },
      //Add Contacts, post request
      handleAdd: (contact) => {
        return fetch("https://playground.4geeks.com/apis/fake/contact/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contact)
        })
      },
      //Edit Contacts, put request
      handleEdit: (id, contact) => {
        return fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contact)
        })
      },
      //Delete Contacts
      deleteContact: (id) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "DELETE",
        });
      }
    },
  };
};

export default getState;
