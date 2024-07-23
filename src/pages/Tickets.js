import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import headerImg from "../img/Garden.webp";
import img1 from "../img/tickets-individual-visit.jpg";
import img2 from "../img/tickets-group.webp";
import img3 from "../img/tickets-paris-museum-pass.jpg";
import img4 from "../img/tickets-audio-tour.jpg";
import img5 from "../img/tickets-guided-tour.jpg";
import img6 from "../img/tickets-guided-group.jpg";

const ticketOptions = [
  {
    title: "Individual Tickets",
    description:
      "Purchase a single ticket for individual access to all permanent and temporary exhibits at the Louvre.",
    imgSrc: img1,
  },
  {
    title: "Group Tickets",
    description:
      "Groups with their own guide can secure tickets for a tailored museum experience.",
    imgSrc: img2,
  },
  {
    title: "Paris Museum Pass",
    description:
      "Reserve your time slot to enjoy seamless entry with your Paris Museum Pass.",
    imgSrc: img3,
  },
  {
    title: "Audio Guide Tours",
    description:
      "Enhance your visit with an audio guide offering detailed insights into the Louvre.",
    imgSrc: img4,
  },
  {
    title: "Guided Tours",
    description:
      "Join a guided tour to explore the museum with expert commentary and insights.",
    imgSrc: img5,
  },
  {
    title: "Group Tickets",
    description:
      "Groups with their own guide can secure tickets for a tailored museum experience.",
    imgSrc: img6,
  },
];

const Tickets = () => {
  return (
    <main className="Tickets">
      <PageHeader title="Tickets" backgroundImage={headerImg} />

      <section className="tickets-body">
        <h2>Choose your ticket</h2>
        <p>
          A ticket gives you access to the permanent collections and temporary
          exhibitions of the Louvre, as well as to the Eugène-Delacroix National
          Museum the same day and the day after your visit of the Louvre museum.
        </p>
        <div className="tickets-options">
          {ticketOptions.map((option, index) => (
            <article key={index}>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <img src={option.imgSrc} alt={option.title} />
              <div>
                <button className="action-btn">Buy now</button>
                <button>Read more</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Tickets;
