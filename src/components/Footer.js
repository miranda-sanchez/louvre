import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Accordion } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <article className="faq">
        <div className="faq-text">
          <h2>FAQ</h2>
          <p>Frequently asked questions</p>
        </div>
        <Accordion defaultActiveKey="0" className="accordion-container">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Can I visit the museum for free? Do I have to book tickets?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Admission is free to the Musée du Louvre and the Musée
                Eugène-Delacroix for the following visitors (valid proof
                required):
              </p>
              <ul>
                <li>
                  All visitors under the age of 18 and 18-25 year-old residents
                  of the European Economic Area (EU, Norway, Iceland, and
                  Liechtenstein)
                </li>
                <li>Holders of a valid ‘Pass Education’ card</li>
                <li>
                  Teachers of art, art history, and the applied arts (proof of
                  subject taught required)
                </li>
                <li>
                  Artists affiliated to the Maison des Artistes (in France) or
                  the IAA (International Association of Art)
                </li>
                <li>Holders of a valid ICOM or ICOMOS card</li>
                <li>
                  Job seekers and people on income support, on presentation of
                  proof of entitlement (dated within the last year or indicating
                  a period of validity)
                </li>
                <li>
                  Visitors with disabilities and the person accompanying them
                </li>
                <li>
                  Admission is free for all visitors on the first Friday of the
                  month after 6 p.m. (except in July and August) and on 14 July
                  (unless it falls on a Tuesday, when the museum is closed).
                </li>
              </ul>
              <p>
                Even if you are entitled to free admission, we advise you to
                book a time slot in advance to make sure that you can get inside
                the museum. To do so, go to the online ticketing service, choose
                a time slot and select the ‘free admission’ option.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How can I buy a ticket at concession price?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                We do not sell concession tickets. The ticket price remains the
                same for both the permanent collections and temporary
                exhibitions. However, visitors under the age of 18 (or 26 for EU
                residents), disabled visitors and job seekers, among others, are
                entitled to free admission (see full list of visitors entitled
                to free admission).
              </p>
              <p>
                The following list of visitors are entitled to a reduced rate
                for workshops, guided tours and auditorium events:
              </p>
              <ul>
                <li>
                  Visitors under the age of 18 and 18-25 year-old residents of
                  the European Economic Area (EU, Norway, Iceland, and
                  Liechtenstein)
                </li>
                <li>
                  Holders of the following membership cards: Amis du Louvre,
                  Louvre Professionnels, Cercles des Mécènes, Cercle
                  International, Cercle Cressent, Amis du musée
                  Eugène-Delacroix, Fnac
                </li>
                <li>
                  Staff members of the French Ministry of Culture and
                  Communication
                </li>
                <li>Official tour and museum guides</li>
                <li>
                  Job seekers and people on income support and job seekers and
                  people on income support
                </li>
                <li>Visitors paying with ‘Chèques-Vacances’</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I get a refund?</Accordion.Header>
            <Accordion.Body>
              <p>
                The sale of tickets for admission to the museum or a related
                service is considered a sale of leisure services and confers no
                right to a refund. Tickets cannot be refunded or resold.
                However, in the event of cancellation or modification of the
                relevant service by the Louvre, or an error in processing the
                order by the museum, you will be entitled to a refund.
              </p>
              <p>
                If that is the case, you will need to send your request by
                email, within one month of the date for which the reservation
                was made, by form or by post to Musée du Louvre – Assistance
                billetterie – 75058 PARIS CEDEX 01.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Which entrance do I use if I have bought tickets online?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The Pyramid is the main entrance to the museum. There is a queue
                for people who have booked a time slot online. There is also the
                Carrousel entrance and the Porte des Lions entrance.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Are prams allowed in the museum?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Prams are indeed allowed in the museum. If the model you have is
                too large to be allowed in the museum lifts, you can borrow a
                pram from us under the Pyramid. Only baby carriers worn on the
                front of the body, not on the back, are allowed. Front baby
                carriers are also available on loan under the Pyramid.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </article>

      <article className="social-media">
        <h2>Follow us</h2>
        <ul className="socialmedia-list">
          <li>
            <a
              href="https://www.linkedin.com/in/miranda--sanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/miranda-sanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </article>

      <article className="footer-bottom">
        <p>2024 &copy; Miranda Sánchez</p>
      </article>
    </footer>
  );
};

export default Footer;
