/**
 * @file projects.js
 * @description List of featured projects, metadata, feature logs, and urls.
 */

export const projects = [
  {
    title: "TechSpark E-Commerce Platform",
    category: "Full Stack Web",
    type: "web",
    icon: "FaLaptopCode",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "JWT Auth",
      "Tailwind CSS",
    ],
    description:
      "Full-stack e-commerce engine offering automated inventory control, a dynamic shopping cart, role-based access management, and structured REST endpoints.",
    features: [
      "Secure Role-Based Access Control (RBAC)",
      "JWT-based Token Authentication",
      "Product inventory & order management",
      "Fully responsive interface",
    ],
    github: "https://github.com/Sulakshan-S/TechSpark",
  },
  {
    title: "BookFair Event Booking Platform",
    category: "Backend-Focused Web",
    type: "web",
    icon: "FaLaptopCode",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "Hibernate",
    ],
    description:
      "Comprehensive booking system created to organize event registrations, handle attendee data workflows, and support high-performance normalized database transactions.",
    features: [
      "Spring Boot business service logic",
      "Normalized relational database schemas",
      "Stateful attendee workflows",
      "Seamless REST API integration",
    ],
    github: "https://github.com/Sulakshan-S/Bookfair",
  },
  {
    title: "Student Project Showcase Portal",
    category: "MERN Stack Web",
    type: "web",
    icon: "FaLaptopCode",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT & bcrypt",
    ],
    description:
      "A social academic portal enabling software students to showcase their portfolios, featuring project creation, filters, and social interactions like project following.",
    features: [
      "Password encryption with bcrypt",
      "Advanced search, tags & categorization",
      "Likes, follows, & dynamic notifications",
      "Secure media uploads to database",
    ],
    github: "https://github.com/Sulakshan-S/student-project-showcase",
  },
  {
    title: "ExploreSriLanka Mobile App",
    category: "React Native Mobile App",
    type: "mobile",
    icon: "FaMobileAlt",
    tech: [
      "React Native",
      "Expo",
      "Firebase Auth & Firestore",
      "Expo Location API",
      "AsyncStorage",
    ],
    description:
      "A comprehensive travel companion application designed for discovering tourist attractions in Sri Lanka, managing bookmark favorites, and detecting nearby destinations using real-time GPS location tracking.",
    features: [
      "Real-time Firestore sync & user authentication",
      "GPS attraction mapping via Expo Location",
      "Haversine formula for distance calculations",
      "User contributions for adding local attractions",
    ],
    github: "https://github.com/Sulakshan-S/exploresrilanka",
  },
];
