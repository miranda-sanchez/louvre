import guidedTour1 from "../img/img5.jpg";
import guidedTour2 from "../img/Garden.webp";

const guidedTours = [
  {
    id: 1,
    imgSrc: guidedTour1,
    alt: "The Coronation of Napoleon",
    month: "July 2024",
    title: "Welcome to the Louvre",
    description:
      "This guided tour will make you discover the must-see artworks at the Louvre",
    longerDescription: [
      "Discover the Mona Lisa, the Winged Victory of Samothrace, the Venus de Milo, and other masterpieces of the Louvre with trained guides who take you through the museum's most impressive spaces, such as the medieval moat, giving you a fascinating insight into the history of the palace.",
      "As you wander through the grand halls and intimate galleries, you'll learn about the stories behind the artworks and the historical significance of the building itself. Whether you're a seasoned art enthusiast or a casual visitor, these tours are designed to enrich your understanding and appreciation of the Louvre's treasures.",
      "Our guides will also highlight lesser-known gems and share anecdotes that bring each artwork to life, creating a memorable journey through centuries of art and history.",
    ],
    days: "Monday to Saturday",
    hours: "9.45am to 2pm",
    languages: ["English", "Spanish", "French"],
    duration: "1:30",
  },
  {
    id: 2,
    imgSrc: guidedTour2,
    alt: "The gardens of the Louvre",
    month: "July 2024",
    title: "The Gardens",
    description: "Explore the delightful gardens of the Louvre.",
    longerDescription:
      "Stroll through the enchanting gardens of the Louvre and immerse yourself in the lush greenery and meticulously manicured landscapes. Our knowledgeable guides will share the history and significance of these beautiful outdoor spaces, including the Tuileries Garden, created by Catherine de Medici in the 16th century. Enjoy the serene atmosphere as you learn about the various sculptures, fountains, and plants that make these gardens a true oasis in the heart of Paris.",
    days: "Monday to Friday",
    hours: "8am to 10pm",
    languages: ["English", "Spanish", "Italian", "French"],
    duration: "1:00",
  },
  {
    id: 3,
    imgSrc: guidedTour1,
    alt: "The Coronation of Napoleon",
    month: "August 2024",
    title: "Welcome to the Louvre",
    description:
      "This guided tour will make you discover the must-see artworks at the Louvre",
    longerDescription: [
      "Discover the Mona Lisa, the Winged Victory of Samothrace, the Venus de Milo, and other masterpieces of the Louvre with trained guides who take you through the museum's most impressive spaces, such as the medieval moat, giving you a fascinating insight into the history of the palace.",
      "As you wander through the grand halls and intimate galleries, you'll learn about the stories behind the artworks and the historical significance of the building itself. Whether you're a seasoned art enthusiast or a casual visitor, these tours are designed to enrich your understanding and appreciation of the Louvre's treasures.",
      "Our guides will also highlight lesser-known gems and share anecdotes that bring each artwork to life, creating a memorable journey through centuries of art and history.",
    ],
    days: "Monday to Saturday",
    hours: "9.45am to 2pm",
    languages: ["English", "Spanish", "French"],
    duration: "1:30",
  },
];

export default guidedTours;
