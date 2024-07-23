import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import headerImg from "../img/outside2.jpg";
import louvreImg from "../img/louvreImg.webp";
import tuileriesImg from "../img/tuileries.webp";
import delacroixImg from "../img/delacroixImg.webp";
import insideImg from "../img/louvre-pyramid-outside.webp";

const visitData = [
  {
    title: "Musée du Louvre",
    imgSrc: louvreImg,
    altImg: "The Louvre from the ceiling with a gargoyle in the foreground",
    rows: [
      { day: "Monday, Thursday, Saturday, and Sunday", hours: "9am to 6pm" },
      { day: "Wednesday and Friday", hours: "9am to 9pm" },
      { day: "Tuesday", hours: "Closed" },
      { note: "Last entry: 1 hour before closing" },
      { note: "Clearing of rooms: 30 minutes before closing" },
      {
        note: "Public holidays: the Louvre is closed on 1 January, 1 May and 25 December. It remains open on all other public holidays unless they fall on a Tuesday, the museum's day of closure.",
      },
    ],
  },
  {
    title: "Tuileries Garden",
    imgSrc: tuileriesImg,
    altImg: "The garden of Louvre",
    rows: [
      { day: "June, July and August", hours: "7am to 11pm" },
      { day: "April, May and September", hours: "7am to 9pm" },
      {
        day: "January, February, March, October, November and December",
        hours: "7.30am to 7.30",
      },
      {
        note: "Visitors will be asked to vacate the premises 30 minutes before closing",
      },
      {
        note: "From 17 June to 25 September, the Tuileries Garden will be partially or totally inaccessible to the general public due to the Olympic and Paralympic Games. ",
      },
    ],
  },
  {
    title: "Musée Eugène-Delacroix",
    imgSrc: delacroixImg,
    altImg: "The Musée Eugène-Delacroix from its garden",
    rows: [
      { day: "Monday, Thursday, Saturday and Sunday", hours: "9am to 6pm" },
      { day: "Wednesday and Friday", hours: "9am to 9pm" },
      { day: "Tuesday", hours: "Closed" },
      {
        note: "Evening opening until 8.30 p.m. on the first Thursday of the month (except 1 August, closing at 5.30 p.m.)",
      },
      {
        note: "Louvre-Delacroix combined ticket: A ticket gives you access to the permanent collections and temporary exhibitions of the Louvre, as well as to the Eugène-Delacroix National Museum the same day and the day after your visit of the Louvre museum.",
      },
    ],
  },
];

const Visit = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <main>
      <PageHeader title="Visit" backgroundImage={headerImg} />

      <div className="Visit">
        <section className="when-to-visit">
          <h2>When to visit</h2>

          <nav className="when-to-visit-nav">
            <ul>
              {visitData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={selectedIndex === index ? "active" : ""}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </nav>

          <div className="when-to-visit-content">
            <img
              src={visitData[selectedIndex].imgSrc}
              alt={visitData[selectedIndex].imgAlt}
            />
            <table className="visit-table">
              <tbody>
                {visitData[selectedIndex].rows.map((row, index) => (
                  <tr key={index}>
                    {row.day ? (
                      <th>{row.day}</th>
                    ) : (
                      <td colSpan="2">{row.note}</td>
                    )}
                    {row.hours && <td className="emphasis">{row.hours}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="visit-tickets">
          <div className="h2-container">
            <h2>Tickets</h2>
          </div>
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
                  Think ahead of everything you would like to do at the museum
                  as any exit is final.
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
                  <th>Guided tours, storytime and workshops</th>
                  <td className="emphasis">€9 TO €12</td>
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
        <section className="visit-eligibility">
          <h2>Visitors elegible for free admission</h2>
          <img src={insideImg} alt="The Louvre pyramid from the inside" />
          <ul>
            <li>
              Minors under the age of 18.
              <span class="note">(Proof of ID required.)</span>
            </li>
            <li>
              18-25 year-old residents of the European Economic Area (EU,
              Norway, Iceland, and Liechtenstein).
              <span class="note">(Proof of ID and residency required.)</span>
            </li>
            <li>
              All visitors.
              <span class="note">
                (On the first Friday of the month after 6 p.m. except in July
                and August.)
              </span>
            </li>
            <li>Disabled visitors and the person accompanying them.</li>
            <li>
              Art teachers (plastic arts, archeology, applied arts, architecture
              and art history only).
              <span class="note"> (Present proof of subject taught.)</span>
            </li>
            <li>
              Artists affiliated to the AIAP (Association Internationale des
              Arts Plastiques).
              <span class="note">
                (Present valid membership card or certificate.)
              </span>
            </li>
            <li>
              ICOM and ICOMOS members.
              <span class="note"> (Present valid membership card.)</span>
            </li>
            <li>
              Journalists.
              <span class="note">
                (Present national or international press card.)
              </span>
            </li>
            <li>
              Job seekers.
              <span class="note">
                (Present proof of entitlement dated within the last year or
                indicating a period of validity.)
              </span>
            </li>
            <li>
              People on income support.
              <span class="note">
                (Present proof of entitlement dated within the last year or
                indicating a period of validity.)
              </span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Visit;
