// import ContactCard from "../component/ContactCard"

import { object } from "prop-types";

// build you application state (any data structure that needs to be shared with everything else) in the store in flux.js ,
// and anything that changes that global application state goes in the actions in flux.js.

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      agenda_slug: "klbailey",
      API: "https://playground.4geeks.com/apis/fake/contact",

      contactList: [],
    },
    actions: {
      // Use getActions to call a function within a fuction; get doesn't require body
      // fetch().then().then(data => setStore({ "foo": data.bar }))
      getContacts: () => {
        let store = getStore();
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda/klbailey")
          .then((response) => response.json())
          .then((data) => setStore({ contactList: data }));
      },
      //WTH
      handleAdd: (contact) => {
        //post request
        return fetch("https://playground.4geeks.com/apis/fake/contact/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contact)
        })


        //move https://playground.4geeks.com/apis/fake/contact/
      },
      


      // updateChange: (event) => {
      //   //get the store
      //   const store = getStore();
      //   setStore({
      //     contactList: {
      //       ...store.contactList,
      //       [event.target.name]: event.target.value,
      //     },
      //   });
      //   console.log(store.contactList);
      // },
    },
  };
};

export default getState;
