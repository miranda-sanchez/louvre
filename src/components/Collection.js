import React, { useState } from "react";
import Masonry from "react-masonry-css";
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

  const [visibleItems, setVisibleItems] = useState(5);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  const breakpointColumnsObj = {
    default: 5,
    1200: 4,
    992: 3,
    768: 2,
    576: 1,
  };

  return (
    <section className="Collection">
      <h2>Collection</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-gallery"
        columnClassName="masonry-grid_column"
      >
        {items.slice(0, visibleItems).map((item, index) => (
          <article className="collection-item" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="item-info">
              <h3 className="title">{item.title}</h3>
              <p className="description">{item.description}</p>
            </div>
          </article>
        ))}
      </Masonry>
      {visibleItems < items.length && (
        <button onClick={loadMore}>Load more</button>
      )}
    </section>
  );
};

export default Collection;
