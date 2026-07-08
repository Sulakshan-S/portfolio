/**
 * @file techStack.js
 * @description Technology categorization and card style tokens.
 */

export const categories = [
  { id: "all", name: "All" },
  { id: "languages", name: "Languages" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "databases", name: "Databases" },
  { id: "tools", name: "Tools & Others" },
];

export const technologies = [
  // Languages
  { name: "Java", category: "languages", icon: "FaJava", colorClass: "hover:border-[#007396] hover:shadow-[#007396]/15 hover:text-[#007396]" },
  { name: "JavaScript", category: "languages", icon: "FaJs", colorClass: "hover:border-[#F7DF1E] hover:shadow-[#F7DF1E]/15 hover:text-[#F7DF1E]" },
  { name: "C Language", category: "languages", icon: "VscCode", colorClass: "hover:border-[#A8B9CC] hover:shadow-[#A8B9CC]/15 hover:text-[#A8B9CC]" },
  
  // Frontend
  { name: "React", category: "frontend", icon: "FaReact", colorClass: "hover:border-[#61DAFB] hover:shadow-[#61DAFB]/15 hover:text-[#61DAFB]" },
  { name: "Tailwind CSS", category: "frontend", icon: "SiTailwindcss", colorClass: "hover:border-[#06B6D4] hover:shadow-[#06B6D4]/15 hover:text-[#06B6D4]" },
  { name: "HTML5", category: "frontend", icon: "FaHtml5", colorClass: "hover:border-[#E34F26] hover:shadow-[#E34F26]/15 hover:text-[#E34F26]" },
  { name: "CSS3", category: "frontend", icon: "FaCss3Alt", colorClass: "hover:border-[#1572B6] hover:shadow-[#1572B6]/15 hover:text-[#1572B6]" },
  
  // Backend
  { name: "Spring Boot", category: "backend", icon: "SiSpringboot", colorClass: "hover:border-[#6DB33F] hover:shadow-[#6DB33F]/15 hover:text-[#6DB33F]" },
  { name: "Node.js", category: "backend", icon: "FaNodeJs", colorClass: "hover:border-[#339933] hover:shadow-[#339933]/15 hover:text-[#339933]" },
  { name: "Express.js", category: "backend", icon: "SiExpress", colorClass: "hover:border-[#FFFFFF] hover:shadow-[#FFFFFF]/15 hover:text-white" },
  
  // Databases
  { name: "MySQL", category: "databases", icon: "SiMysql", colorClass: "hover:border-[#4479A1] hover:shadow-[#4479A1]/15 hover:text-[#4479A1]" },
  { name: "MongoDB", category: "databases", icon: "SiMongodb", colorClass: "hover:border-[#47A248] hover:shadow-[#47A248]/15 hover:text-[#47A248]" },
  { name: "Firebase", category: "databases", icon: "SiFirebase", colorClass: "hover:border-[#FFCA28] hover:shadow-[#FFCA28]/15 hover:text-[#FFCA28]" },
  
  // Tools
  { name: "Git", category: "tools", icon: "FaGitAlt", colorClass: "hover:border-[#F05032] hover:shadow-[#F05032]/15 hover:text-[#F05032]" },
  { name: "GitHub", category: "tools", icon: "FaGithub", colorClass: "hover:border-[#FFFFFF] hover:shadow-[#FFFFFF]/15 hover:text-white" },
  { name: "IntelliJ IDEA", category: "tools", icon: "SiIntellijidea", colorClass: "hover:border-[#FE315D] hover:shadow-[#FE315D]/15 hover:text-[#FE315D]" },
  { name: "Postman", category: "tools", icon: "SiPostman", colorClass: "hover:border-[#FF6C37] hover:shadow-[#FF6C37]/15 hover:text-[#FF6C37]" },
];
