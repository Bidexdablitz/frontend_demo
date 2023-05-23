import * as React from "react";
import "./faq.scss";

function Faq() {
    return (
        <section className="faq">
            <h2 className="heading slide-in-rest">frequently asked questions </h2>
            <article className="question-wrapper slide-in-rest" onClick={openFaq}>
                <p className="question">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className="answer">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt reiciendis mollitia
                    cupiditate neque saepe ex fuga necessitatibus! Quod nemo cumque corrupti voluptatibus
                    culpa quia. Ex fugit minima excepturi possimus, recusandae sed quidem voluptate
                    perspiciatis voluptas vitae fuga dolores eos eius eum ipsum, ducimus beatae, natus aut in!
                    Perferendis, quisquam sunt.
                </p>
            </article>
            <article className="question-wrapper slide-in-rest" onClick={openFaq}>
                <p className="question">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className="answer">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt reiciendis mollitia
                    cupiditate neque saepe ex fuga necessitatibus! Quod nemo cumque corrupti voluptatibus
                    culpa quia. Ex fugit minima excepturi possimus, recusandae sed quidem voluptate
                    perspiciatis voluptas vitae fuga dolores eos eius eum ipsum, ducimus beatae, natus aut in!
                    Perferendis, quisquam sunt.
                </p>
            </article>
            <article className="question-wrapper slide-in-rest" onClick={openFaq}>
                <p className="question">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className="answer">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt reiciendis mollitia
                    cupiditate neque saepe ex fuga necessitatibus! Quod nemo cumque corrupti voluptatibus
                    culpa quia. Ex fugit minima excepturi possimus, recusandae sed quidem voluptate
                    perspiciatis voluptas vitae fuga dolores eos eius eum ipsum, ducimus beatae, natus aut in!
                    Perferendis, quisquam sunt.
                </p>
            </article>
        </section>
    );
}

function openFaq(e: React.MouseEvent<HTMLElement>) {
    const element = e.target as HTMLDivElement;
    if (element.parentElement?.classList.contains("open")) {
        element.parentElement?.classList.toggle("open");
    } else {
        document.querySelectorAll(".question-wrapper").forEach((el) => el.classList.remove("open"));
        element.parentElement?.classList.toggle("open");
    }
}
export default Faq;
