import * as React from "react";
import "./message-us.scss";

function MessageUs() {
    return (
        <section className="message-us">
            <h2 className="heading">shoot us a message if you need any help</h2>
            <p className="sub-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="" method="post">
                <div className="input-container">
                    <label>
                        your name
                        <div className="input-wrapper">
                            <input type="text" className="name" name="" id="name" />
                        </div>
                    </label>
                    <label>
                        email
                        <div className="input-wrapper">
                            <input type="text" className="email" name="" id="email" />
                        </div>
                    </label>
                    <label>
                        phone number
                        <div className="input-wrapper">
                            <input type="text" className="phone" name="" id="phone" />
                        </div>
                    </label>
                </div>
                <label htmlFor="message">
                    <span>message</span>
                    <div className="input-wrapper">
                        <textarea className="message" name="message" id="message"></textarea>
                    </div>
                </label>
                <button type="submit">send message</button>
            </form>
        </section>
    );
}

export default MessageUs;
