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
  subtitle: 'I am Web Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'mehul.jpeg',
  paragraphOne: 'Hey ther, This is Mehul Gupta from Bangalore, India. I am a Web Developer who creats web application using various technologies like HTML, CSS, Bootstrap, JavaScript and node.js. Currently I am pursuing my B.E in Information Science and Engineering from RNS Institute of Technology.',
  paragraphTwo: 'Apart from being a Web Developer I like competitive coding and to participate in various coding competition conducted online in websites like codechef, hackkerank and leetcode.',
  paragraphThree: 'I am available for freelancing.',
  //resume: 'mehul.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ToDo.png',
    title: 'ToDo List',
    info: 'A Web Application for creating Todo List stored in database and can be changed dynamically',
    info2: 'Technology used - HTML, CSS, BOOTSTRAP,JavaScript, Node.js, Express.js , MongoDB and Mongoose',
    url: 'https://aqueous-hamlet-66836.herokuapp.com/',
    repo: 'https://github.com/mehulrnsit/ToDoList', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'marwadifoods.png',
    title: 'Marwadi Foods',
    info: 'A Web Application with a working database designed in MySQl for customers to register and login to order their favourite food and can have a view of there previous orders',
    info2: 'Technology used - HTML, CSS, BOOTSTRAP, PHP, MySQl.',
    url: '',
    repo: 'https://github.com/mehulrnsit/Online-Food-Ordering-System', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'AK.png',
    title: 'AK Bedcover & Furnishing',
    info: 'A multi-page responsive Website for AK Bedcover and Furnishing Buisness located in Kolkata.',
    info2: 'Technology used - HTML, CSS, BOOTSTRAP, jQUERY.',
    url: 'https://mehulrnsit.github.io/AK-BEDCOVER-FURNISHING.github.io/',
    repo: 'https://github.com/mehulrnsit/AK-BEDCOVER-FURNISHING.github.io', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'simon.png',
    title: 'Simon Game',
    info: 'It’s an Interactive Game developed in JavsScript where player can clear multiple levels and difficulty of levels increases as the level increases',
    info2: 'echnology used - HTML, CSS, BOOTSTRAP, JavaScript',
    url: 'https://mehulrnsit.github.io/SimonGame.io/',
    repo: 'https://github.com/mehulrnsit/SimonGame.io', // if no repo, the button will not show up
  },
 ];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Let\'s Talk',
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
