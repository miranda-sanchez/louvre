import React from "react";

const Tickets = () => {
  return (
    <main className="Tickets">
      <div className="tickets-content">
        <h1>Buy tickets</h1>
        <section className="tickets-body">
          <h2>Choose your ticket</h2>
          <p>
            A ticket gives you access to the permanent collections and temporary
            exhibitions of the Louvre, as well as to the Eugène-Delacroix
            National Museum the same day and the day after your visit of the
            Louvre museum.
          </p>
          <div className="tickets-options">
            <article>
              <h3>Individual tickets for the Museum</h3>
              <p>
                Ticket and time slot booking granting access to the permanent
                collections and the temporary exhibitions.
              </p>
              <span></span>
            </article>

            <article>
              <h3>Paris Museum Pass holders</h3>
              <p>Compulsory time slot booking</p>
              <span></span>
            </article>

            <article>
              <h3>Audio Guide booking</h3>
              <p>Permanent collections of the Musée du Louvre</p>
              <span></span>
            </article>

            <article>
              <h3>Guided Tours</h3>
              <p>Cultural activities with speaker or museum guide.</p>
              <span></span>
            </article>

            <article>
              <h3>Group tickets for the Museum</h3>
              <p>Groups with their own guide.</p>
              <span></span>
            </article>
          </div>
        </section>
      </div>
      <section className="tickets-prices">
        <h2>Prices</h2>
      </section>
    </main>
  );
};

export default Tickets;
