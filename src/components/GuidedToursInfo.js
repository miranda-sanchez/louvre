import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const GuidedToursInfo = ({ tour, onGoBack }) => {
  return (
    <section className="section-guidedtoursinfo">
      <h2>{tour.title}</h2>
      <img src={tour.imgSrc} alt={tour.alt} />
      <p>{tour.longerDescription}</p>

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

      <button onClick={onGoBack}>
        <MdArrowBack />
      </button>
    </section>
  );
};

export default GuidedToursInfo;
