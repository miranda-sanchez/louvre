import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const GuidedToursInfo = ({ tour, onGoBack }) => {
  if (!tour) {
    return (
      <main>
        <p style={{ margin: "8rem 20px" }}>Guided tour not found.</p>
      </main>
    );
  }

  return (
    <section className="section-guidedtoursinfo">
      <div className="header-guidedtoursinfo">
        <p>More information about</p>
        <h2>{tour.title}</h2>
        <img src={tour.imgSrc} alt={tour.alt} />
      </div>
      <div className="text-guidedtoursinfo">
        {Array.isArray(tour.longerDescription) ? (
          tour.longerDescription.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>{tour.longerDescription}</p>
        )}
        <div className="important-info">
          <h3>The tour is available in</h3>
          <p className="languages">
            {tour.languages.length > 1
              ? tour.languages.slice(0, -1).join(", ") +
                " & " +
                tour.languages.slice(-1)
              : tour.languages[0]}
          </p>
        </div>
      </div>

      <table>
        <tbody>
          <tr>
            <th>Days</th>
            <td>{tour.days}</td>
          </tr>
          <tr>
            <th>Hour</th>
            <td>{tour.hours}</td>
          </tr>
          <tr>
            <th>Average Duration</th>
            <td>{tour.duration}</td>
          </tr>
          <tr>
            <th>Languages</th>
            <td>
              <ul>
                {tour.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="btn-row">
              <Link to="/tickets">
                <button className="action-btn">Buy</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <button className="btn-goback" onClick={onGoBack}>
        <MdArrowBack />
      </button>
    </section>
  );
};

export default GuidedToursInfo;
