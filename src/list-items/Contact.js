import React from "react";
import ContactLayout from './../components/ContactLayout';

const Contact = () => {
    return(
        <section id="contact">
            <h2>Contact Details</h2>
            <ContactLayout phone="987654321" email="yesame@test.com" twitter="#dope"/>
        </section>
    );
}

export default Contact;