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
import img10 from "../img/img10.jpg";
import img11 from "../img/img11.jpg";
import img12 from "../img/img12.jpg";
import img13 from "../img/img13.jpg";
import img14 from "../img/img14.jpg";
import img15 from "../img/img15.jpg";
import img16 from "../img/img16.jpg";

const Collection = () => {
  const items = [
    {
      img: img1,
      title: "The Raft of the Medusa",
      artist: "Théodore Géricault, 1819",
      medium: "Oil on canvas, 490cm × 716cm",
    },
    {
      img: img2,
      title: "The Wedding Feast at Cana",
      artist: "Paolo Veronese, 1563",
      medium: "Oil on canvas, 6.77m × 9.94m",
    },
    {
      img: img3,
      title: "Winged Victory of Samothrace",
      artist: "Anonymous, 200–190 BC",
      medium: "Parian marble, 244cm",
    },
    {
      img: img4,
      title: "Mona Lisa",
      artist: "Leonardo da Vinci, 1506",
      medium: "	Oil on poplar panel, 77cm × 53cm",
    },
    {
      img: img5,
      title: "The Coronation of Napoleon",
      artist: "Jacques-Louis David, 1807 ",
      medium: "Oil on canvas, 6.21m × 9.79m",
    },
    {
      img: img6,
      title: "The Seated Scribes",
      artist: "Anonymous; 4th Dynasty, 2620–2500 BCE",
      medium: "Limestone, 53.7cm × 44cm × 35 cm",
    },
    {
      img: img7,
      title: "Dying Slave",
      artist: "Michelangelo, 1516",
      medium: "Marble, 215cm",
    },
    {
      img: img8,
      title: "La Belle Ferronnière",
      artist: "Leonardo da Vinci or his Milanese circle, 1496",
      medium: "Oil on wood, 62cm × 44cm",
    },
    {
      img: img9,
      title: "Diana of Versailles",
      artist: "Anonymous, c. 325 BC",
      medium: "Marble, 2.01m",
    },
    {
      img: img10,
      title: "Liberty Leading the People",
      artist: "Eugène Delacroix, 1830",
      medium: "Oil on canvas, 260cm × 325cm",
    },
    {
      img: img11,
      title: "Oath of the Horatii",
      artist: "Jacques-Louis David, 1784",
      medium: "Oil on canvas, 329.8cm × 424.8cm",
    },
    {
      img: img12,
      title: "The Astronomer",
      artist: "Johannes Vermeer, 1668",
      medium: "Oil on canvas, 51cm × 45cm",
    },
    {
      img: img13,
      title: "The Intervention of the Sabine Women",
      artist: "Jacques-Louis David, 1799",
      medium: "Oil on canvas, 385cm × 522cm",
    },
    {
      img: img14,
      title: "Borghese Gladiator",
      artist: "Agasias of Ephesus, c.100 BC",
      medium: "Marble, 199cm",
    },
    {
      img: img15,
      title: "Portrait of Louis XIV in Coronation Robes",
      artist: "Hyacinthe Rigaud, 1701",
      medium: "Oil on canvas, 277cm × 194cm",
    },
    {
      img: img16,
      title: "The Young Beggar",
      artist: "Bartolomé Esteban Murillo, c. 1650",
      medium: "Oil on canvas, 134cm × 300cm",
    },
  ];

  const [visibleItems, setVisibleItems] = useState(5);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  const breakpointColumnsObj = {
    default: 4,
    1700: 3,
    1200: 2,
    620: 1,
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
              <p className="description">{item.artist}</p>
              <p className="description">{item.medium}</p>
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
