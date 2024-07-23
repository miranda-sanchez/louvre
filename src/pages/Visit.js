import React from "react";
import PageHeader from "../components/PageHeader";
import headerImg from "../img/outside2.jpg";
import outsideImg from "../img/Garden.webp";

const Visit = () => {
  return (
    <main>
      <PageHeader title="Visit" backgroundImage={headerImg} />

      <section className="when-to-visit">
        <h2>When to visit</h2>
        <div className="when-to-visit-content">
          <img src={outsideImg} alt="" />
          <table className="visit-table">
            <tbody>
              <tr>
                <th>Monday, Thursday, Saturday, and Sunday</th>
                <td className="emphasis">9am to 6pm</td>
              </tr>
              <tr>
                <th>Wednesday and Friday</th>
                <td className="emphasis">9am to 9pm</td>
              </tr>
              <tr>
                <th>Tuesday</th>
                <td className="emphasis">Closed</td>
              </tr>
              <tr>
                <td colSpan="2">Last entry: 1 hour before closing</td>
              </tr>
              <tr>
                <td colSpan="2">
                  Clearing of rooms: 30 minutes before closing
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  Public holidays: the Louvre is closed on 1 January, 1 May and
                  25 December. It remains open on all other public holidays
                  unless they fall on a Tuesday, the museum's day of closure.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="visit-tickets">
        <h2>Tickets</h2>
        <div className="visit-tickets-content">
          <div>
            <p>
              A ticket gives you access to the permanent collections and
              temporary exhibitions of the Louvre, as well as to the
              Eugène-Delacroix National Museum the same day and the day after
              your visit of the Louvre museum.
            </p>

            <div className="important-info">
              <h3>Admission and exit</h3>
              <p>
                Think ahead of everything you would like to do at the museum as
                any exit is final.
              </p>
            </div>
          </div>

          <table className="visit-table">
            <tbody>
              <tr>
                <th>General admission</th>
                <td className="emphasis">€22</td>
              </tr>
              <tr>
                <th>
                  Visitors under the age of 18 and residents of the European
                  Economic Area under the age of 26
                </th>
                <td className="emphasis">Free</td>
              </tr>
              <tr>
                <td colSpan="2" className="btn-row">
                  <button className="action-btn">Buy Tickets</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Visit;
