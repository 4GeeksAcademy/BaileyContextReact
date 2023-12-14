//List of contacts 
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard.jsx"
//import modal when its made?
import store from "../store/appContext";
import { useContext } from "react";

function Contact() { 
    const { store, actions } = useContext(Context);
    // constructor() {
    //     super();
    //     this.state= {
    //         contact: []
    //     };
    // }
    // What is this? it was in 4geek video What store am I subscribing to and function when contacts have been updated
    // componentDidMount() {
    //     let contact = store.getState("contact");
    //     if(contact) this.setState({ contact });
    //     this.subscribe(store, "contact",  (contact) => {
    //         this.setState({contact: contact})
    //     });
    // }

    return(

        // key to loop when create html
        // const cards = this.state.contact.map((c, i) => {
        //     return <ContactCard key={i} data={c} />;
        // })
        
        <div className="container">
            <div>
                <p className="text-right my-3">
                    <Link className="btn btn-success" to="/add">Add new contact</Link>
                </p>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        {/* and then delete cloe modal? onDelete show modal true? */}
                        {cards}
                    </ul>
                </div>
            </div>
            {/* modal here? Modal showooo=oo{this.state.showModal} onClose={()=>this.setState({showModal: false})} />*/}
        </div>
        
    )
}

export default Contact;