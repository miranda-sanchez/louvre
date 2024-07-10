import React from "react";
import img1 from "../img/tickets-individual-visit.jpg";
import img2 from "../img/tickets-group.webp";
import img3 from "../img/tickets-paris-museum-pass.jpg";
import img4 from "../img/tickets-audio-tour.jpg";
import img5 from "../img/tickets-guided-tour.jpg";
import img6 from "../img/tickets-guided-group.jpg";

const Tickets = () => {
  return (
    <main className="Tickets">
      <div className="tickets-header">
        <h1>Buy tickets</h1>
      </div>
      <section className="tickets-body">
        <h2>Choose your ticket</h2>
        <p>
          A ticket gives you access to the permanent collections and temporary
          exhibitions of the Louvre, as well as to the Eugène-Delacroix National
          Museum the same day and the day after your visit of the Louvre museum.
        </p>
        <div className="tickets-options">
          <article>
            <h3>Individual Tickets</h3>
            <p>
              Purchase a single ticket for individual access to all permanent
              and temporary exhibits at the Louvre.
            </p>
            <img src={img1} alt="" />
            <div>
              <button>Buy</button>
              <button>Read more</button>
            </div>
          </article>

          <article>
            <h3>Group Tickets</h3>
            <p>
              Reserve your time slot to enjoy seamless entry with your Paris
              Museum Pass.
            </p>
            <img src={img2} alt="" />
            <div>
              <button>Buy</button>
              <button>Read more</button>
            </div>
          </article>

          <article>
            <h3>Paris Museum Pass</h3>
            <p>
              Reserve your time slot to enjoy seamless entry with your Paris
              Museum Pass.
            </p>
            <img src={img3} alt="" />
            <div>
              <button>Buy</button>
              <button>Read more</button>
            </div>
          </article>

          <article>
            <h3>Audio Guide Tours</h3>
            <p>
              Enhance your visit with an audio guide offering detailed insights
              into the Louvre.
            </p>
            <img src={img4} alt="" />
            <div>
              <button>Buy</button>
              <button>Read more</button>
            </div>
          </article>

          <article>
            <h3>Guided Tours</h3>
            <p>
              Join a guided tour to explore the museum with expert commentary
              and insights.
            </p>
            <img src={img5} alt="" />
            <div>
              <button>Buy</button>
              <button>Read more</button>
            </div>
          </article>

          <article>
            <h3>Group Tickets</h3>
            <p>
              Groups with their own guide can secure tickets for a tailored
              museum experience.
            </p>
            <img src={img6} alt="" />
            <div>
              <button>Buy</button>
              <button>Read more</button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Tickets;
