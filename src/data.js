// Media/icons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import BirthdayReminder from "./media/cards/BirthdayReminder.PNG";
import Tours from "./media/cards/Tours.PNG";

// Projects
export const projects = [
  {
    id: 1,
    name: "Birthday Reminder",
    image: BirthdayReminder,
    link: "/Birthday-Reminder",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, magni.",
    github:
      "https://github.com/mshuber1981/React-JS/blob/main/src/pages/BirthdayReminder.jsx",
  },
  {
    id: 2,
    name: "Tours",
    image: Tours,
    link: "/Tours",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, magni.",
    github:
      "https://github.com/mshuber1981/React-JS/blob/main/src/pages/ToursPage.jsx",
  },
];

// Social Media
export const socials = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/mikeyhuber/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/mshuber1981",
    icon: <FaGithub />,
  },
];

// Birthday Reminder
export const people = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: 36,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: 34,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];
