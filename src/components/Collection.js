import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";

const Collection = () => {
  const items = [
    {
      id: 1,
      img: img1,
      title: "The Raft of the Medusa",
      description: "Descripción del artículo 1",
    },
    {
      id: 2,
      img: img2,
      title: "The Wedding Feast at Cana",
      description: "Descripción del artículo 2",
    },
    {
      id: 3,
      img: img2,
      title: "The Wedding Feast at Cana",
      description: "Descripción del artículo 2",
    },
    {
      id: 4,
      img: img2,
      title: "The Wedding Feast at Cana",
      description: "Descripción del artículo 2",
    },
    {
      id: 5,
      img: img2,
      title: "The Wedding Feast at Cana",
      description: "Descripción del artículo 2",
    },
  ];

  return (
    <section className="Colection">
      <h2>Collection</h2>
      <div className="collection-container">
        {items.map((item) => (
          <article className="collection-item">
            <span className="id">{item.id}</span>
            <img src={item.img} alt={item.titulo} />
            <span className="title">{item.title}</span>
            <p className="description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Collection;
