import React from "react";

//must contain logic and code to handle application data needs

let MyAction = (contact) => {
    let contacts = store.getEvent("contacts");
    if(!contacts) contacts =[contact];
    else contacts.push(contact);
    
    dispatcher.dispatch({
        type: "contact",
        data: myData
    });
}

export default MyAction