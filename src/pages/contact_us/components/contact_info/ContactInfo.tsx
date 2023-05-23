import * as React from "react";
import "./contact-info.scss";

function ContactInfo() {
    return (
        <div className="contact-wrapper wavy-bg">
            <section className="contact-info">
                <h2 className="heading slide-in-rest">you can call us on our direct line</h2>
                <div className="direct-lines slide-in-rest">
                    <p className="line">08183232423</p>
                    <p className="line">08183232423</p>
                </div>
            </section>
            <section className="social-media-links">
                <h2 className="heading slide-in-rest">Our Social Media Handle Are Also Very Active</h2>
                <ul className="links">
                    <li className="facebook slide-in-rest"></li>
                    <li className="instagram slide-in-rest"></li>
                    <li className="twitter slide-in-rest"></li>
                    <li className="whatsapp slide-in-rest"></li>
                </ul>
            </section>
        </div>
    );
}

export default ContactInfo;
