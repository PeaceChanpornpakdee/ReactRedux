const courses = [
  {
    id: 1,
    title: "Weathering with You",
    slug: "Weathering-with-You",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 2,
    title: "The Garden of Words",
    slug: "The-Garden-of-Words",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 3,
    title: "Your Name",
    slug: "Your-Name",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 4,
    title: "5 Centimeters per Second",
    slug: "5-Centimeters-per-Second",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 5,
    title: "Weathering with You",
    slug: "Weathering-with-You-2",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 6,
    title: "Voices of a Distant Star",
    slug: "Voices-of-a-Distant-Star",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 2,
    category: "Software Practices",
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 2,
    category: "Software Architecture",
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 2,
    category: "Career",
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 2,
    category: "HTML5",
  },
];

const authors = [
  { id: 1, name: "Makoto Shinkai" },
  { id: 2, name: "Cory House" },
  { id: 3, name: "Scott Allen" },
  { id: 4, name: "Dan Wahlin" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
