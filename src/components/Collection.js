import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";

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
      img: img3,
      title: "Winged Victory of Samothrace",
      description: "Descripción del artículo 2",
    },

    {
      id: 4,
      img: img4,
      title: "Mona Lisa",
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
    <section className="Collection">
      <h2>Collection</h2>
      <div className="masonry-gallery">
        <div className="collection-container">
          {items.map((item) => (
            <article className="collection-item">
              <span className="id">{item.id}</span>
              <img src={item.img} alt={item.titulo} />
              <div className="item-info">
                <span className="title">{item.title}</span>
                <p className="description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
