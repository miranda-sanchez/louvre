import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const GuidedToursInfo = ({ tour, onGoBack }) => {
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
        <p>The tour is available in the following languages:</p>
        <ul>
          {tour.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
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
