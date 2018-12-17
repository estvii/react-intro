import React from "react";

const ContactLayout = (props) => {
    return(
        <div>
            <p>
                <b>Phone:</b> <i>{props.phone}</i>
            </p>
            <p>
                <b>Email:</b> <i>{props.email}</i>
            </p>
            <p>
                <b>Twitter:</b> <i>{props.twitter}</i>
            </p>
        </div>
    );
}

export default ContactLayout;