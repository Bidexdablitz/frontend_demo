import React from "react";
import "./footer.scss";
import footerLogo from "../../assets/images/footer-logo.png";

function Footer() {
    const currentDate = new Date().getFullYear();
    return (
        <footer>
            <section>
                <img className="footer-logo slide-in-rest" src={footerLogo} />
                <div className="contact">
                    <h4 className="heading slide-in-rest">contact</h4>
                    <p className="location slide-in-rest">location </p>
                    <p className="email slide-in-rest">email@gdasfdsa.fdf</p>
                </div>
                <div className="social-media">
                    <h4 className="heading slide-in-rest">social media</h4>
                    <a className="twitter slide-in-rest" href="#">
                        twitter
                    </a>
                    <a className="instagram slide-in-rest" href="#">
                        instagram
                    </a>
                    <a className="facebook slide-in-rest" href="#">
                        facebook
                    </a>
                </div>
                <input className="language slide-in-rest" type={"text"} value={"english"} readOnly />
            </section>
            <p className="copyright slide-in-rest">&#169; {currentDate} Studentrealestates inc. </p>
        </footer>
    );
}

export default Footer;
