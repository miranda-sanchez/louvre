import React from "react";

const PageHeader = ({ title, backgroundImage }) => {
  return (
    <section className="Page">
      <div
        className="page-header"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        }}
      >
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default PageHeader;
