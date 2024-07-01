import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";

const Collection = () => {
  const items = [
    {
      img: img1,
      title: "The Raft of the Medusa",
      description: "Descripción del artículo 1",
    },
    {
      img: img2,
      title: "The Wedding Feast at Cana",
      description: "Descripción del artículo 2",
    },
    {
      img: img3,
      title: "Winged Victory of Samothrace",
      description: "Descripción del artículo 2",
    },

    {
      img: img4,
      title: "Mona Lisa",
      description: "Descripción del artículo 2",
    },
    {
      img: img5,
      title: "The Coronation of Napoleon",
      description: "Descripción del artículo 2",
    },
    {
      img: img6,
      title: "The Seated Scribes",
      description: "Descripción del artículo 2",
    },
    ,
    {
      img: img7,
      title: "Dying Slave",
      description: "Descripción del artículo 2",
    },
    {
      img: img8,
      title: "La Belle Ferronnière",
      description: "Descripción del artículo 2",
    },
    {
      img: img9,
      title: "Diana of Versaille",
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
              <img src={item.img} alt={item.titulo} />
              <div className="item-info">
                <h3 className="title">{item.title}</h3>
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
