import * as React from "react";
import "./message-us.scss";

function MessageUs() {
    return (
        <section className="message-us">
            <h2 className="heading slide-in-rest">shoot us a message if you need any help</h2>
            <p className="sub-heading slide-in-rest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <form action="" method="post">
                <section className="input-section">
                    <div className="input-container">
                        <label className="slide-in-rest">
                            your name
                            <div className="input-wrapper">
                                <input type="text" className="name" name="" id="name" />
                            </div>
                        </label>
                        <label className="slide-in-rest">
                            email
                            <div className="input-wrapper">
                                <input type="text" className="email" name="" id="email" />
                            </div>
                        </label>
                        <label className="slide-in-rest">
                            phone number
                            <div className="input-wrapper">
                                <input type="text" className="phone" name="" id="phone" />
                            </div>
                        </label>
                    </div>
                    <label htmlFor="message" className="slide-in-rest">
                        <span>message</span>
                        <div className="input-wrapper">
                            <textarea className="message" name="message" id="message"></textarea>
                        </div>
                    </label>
                </section>

                <button type="submit" className="slide-in-rest">
                    send message
                </button>
            </form>
        </section>
    );
}

export default MessageUs;
