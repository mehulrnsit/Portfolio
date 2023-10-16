import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mehul Gupta', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello I am ',
  name: 'Mehul Gupta',
  subtitle: 'I am Software Engineer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'mehul.JPG',
  paragraphOne:
    'Hello there! My name is Mehul Gupta, and I am a passionate software engineer with 1.5 years of hands-on experience in crafting robust and scalable production-ready applications. My expertise lies in the dynamic world of full-stack web development, where I have honed my skills using technologies such as React, Node.js, and Spring Boot. With a keen interest in cloud computing and infrastructure, I am constantly exploring innovative ways to leverage cutting-edge tools and methodologies to create seamless digital experiences.',
  paragraphTwo:
    'One of my key strengths lies in my ability to bridge the gap between frontend and backend development, allowing me to create cohesive, end-to-end solutions. I find immense satisfaction in solving intricate problems and am always eager to explore new horizons in the ever-evolving landscape of software engineering.',
  paragraphThree:
    "Beyond the lines of code, I am deeply fascinated by cloud technologies and infrastructure, continuously seeking opportunities to enhance my knowledge in these areas. Whether it's architecting scalable cloud solutions or optimizing existing infrastructures, I am dedicated to staying at the forefront of technological innovation.",
  resume: 'https://drive.google.com/file/d/1yCK0HgJBb3t948JJR4fW5UCZyV8HK0_o/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'netflix-clone.png',
    title: 'Netflix Clone',
    info:
      'A Netflix clone frontend designed using React and JavaScript with feature of watching trailers of various movies implemented with the help of react-youtube and themoviedb-api packages.',
    info2: 'Technology used - HTML, CSS, BOOTSTRAP,JavaScript, React',
    url: 'https://netflix-clone-af2b8.web.app/',
    repo: 'https://github.com/mehulrnsit/Clone', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'marwadifoods.png',
    title: 'Marwadi Foods',
    info:
      'A Web Application with a working database designed in MySQl for customers to register and login to order their favourite food and can have a view of there previous orders',
    info2: 'Technology used - HTML, CSS, BOOTSTRAP, PHP, MySQl.',
    repo: 'https://github.com/mehulrnsit/Online-Food-Ordering-System', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'ToDo.png',
    title: 'ToDo List',
    info:
      'A Web Application for creating Todo List stored in database and can be changed dynamically',
    info2:
      'Technology used - HTML, CSS, BOOTSTRAP,JavaScript, Node.js, Express.js , MongoDB and Mongoose',
    url: 'https://aqueous-hamlet-66836.herokuapp.com/',
    repo: 'https://github.com/mehulrnsit/ToDoList', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'AK.png',
    title: 'AK Bedcover & Furnishing',
    info:
      'A multi-page responsive Website for AK Bedcover and Furnishing Buisness located in Kolkata.',
    info2: 'Technology used - HTML, CSS, BOOTSTRAP, jQUERY.',
    url: 'https://mehulrnsit.github.io/AK-BEDCOVER-FURNISHING.github.io/',
    repo: 'https://github.com/mehulrnsit/AK-BEDCOVER-FURNISHING.github.io', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'simon.png',
    title: 'Simon Game',
    info:
      'It’s an Interactive Game developed in JavsScript where player can clear multiple levels and difficulty of levels increases as the level increases',
    info2: 'echnology used - HTML, CSS, BOOTSTRAP, JavaScript',
    url: 'https://mehulrnsit.github.io/SimonGame.io/',
    repo: 'https://github.com/mehulrnsit/SimonGame.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'mehul.gupta.rnsit@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=100005252205510',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/mehulsvps/?hl=en',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mehul-gupta-49a62b159/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mehulrnsit',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
