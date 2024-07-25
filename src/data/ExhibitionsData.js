import olympism from "../img/olympism.webp";
import torloniaCollection from "../img/torlonia-collection.jpg";
import Velazquez from "../img/VelazquezMariaTeresa.jpg";
import Degas from "../img/DegasMaryCassatt.jpg";
import Michaelangelo from "../img/img8.jpg";
import Cariatides from "../img/Cariatides.jpg";

const exhibitions = [
  {
    imgSrc: olympism,
    imgAlt: "A Greek vessel of the Marquis Campana",
    title: "Olympism",
    description: "Modern Invention, Ancient Legacy",
    date: "24 April to 16 September 2024",
    paragraphs: [
      "Among the cultural events designed to accompany the 2024 Olympic and Paralympic Games in Paris is an exhibition at the Louvre on the creation of the first modern Olympic Games. Visitors will discover how the Games came into being in the late 19th century: the political context of the time, the iconographic sources on which they were based, and how the organisers set out to recreate the sporting competitions of ancient Greece.",
      "The exhibition sheds light on the origins of the world’s largest and most-watched sporting competition. This international event was the brainchild of Pierre de Coubertin and a number of French and Greek luminaries, who were later joined by Swiss draughtsman Émile Gilliéron (1850-1924). Gilliéron trained at the École des Beaux-Arts in Paris, and was a frequent visitor to the Louvre, where he copied a number of its masterpieces. Having settled in Greece, he was named the official artist of the 1896 Olympic Games and of the 1906 Mesolympics, both held in Athens, for which he designed the winners’ trophies, inspired by discoveries made at the major archaeological excavation sites of the period. Using the latest reproduction techniques of his time, the artist illustrated communication materials – in particular postage stamps and posters – for the newly formed Greek state.",
      "Thanks to a special loan from the Stavros Niarchos Foundation (SNF), the Louvre will exhibit the first Olympic Cup, known as ‘Bréal’s Cup’, designed by French academic Michel Bréal and created by a French silversmith for the winner of the first marathon – a race invented for the modern Olympic Games.",
      "As part of the programme of cultural events accompanying the 2024 Olympic and Paralympic Games, the exhibition will show how the scientific disciplines of philology, history, art history and archaeology came together to create this global sporting event.",
    ],
    curators: [
      "Alexandre Farnoux, Sorbonne University",
      "Violaine Jeammet, Musée du Louvre",
      "Christina Mitsopoulou, University of Thessaly and French School at Athens",
    ],
  },
  {
    imgSrc: torloniaCollection,
    imgAlt: "A sculpture from the Torlonia collection",
    title: "Masterpieces from the Torlonia Collection",
    description:
      "The largest ever private collection of ancient Roman sculptures",
    date: "26 June to 11 November 2024",
  },
  {
    imgSrc: Velazquez,
    imgAlt: "The infanta Maria Theresa of Spain by Velazquez",
    title: "Diego Velázquez",
    description: "Velazquez's private collection",
    date: "2 October to 23 December 2024",
  },
  {
    imgSrc: Degas,
    imgAlt: "Mary Cassatt at the Louvre by Degas",
    title: "Edgar Degas",
    description:
      "Degas's private collection of sculptures, drawings, and paintings",
    date: "6 August to 26 November 2024",
  },
  {
    imgSrc: Michaelangelo,
    imgAlt: "Sleeping Hermaphroditus by Michaelangelo",
    title: "Michaelangelo",
    description:
      "Degas's private collection of sculptures, drawings, and paintings",
    date: "31 July to 15 December 2024",
  },
  {
    imgSrc: Cariatides,
    imgAlt: "Salle des Cariatides, Louvre",
    title: "Salle des Cariatides",
    description: "At the heart of the Reinassance Palace",
    date: "Permanent",
  },
];

export default exhibitions;
