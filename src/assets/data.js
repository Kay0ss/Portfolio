import React from "react";
import { FaPalette, FaReact, FaCode, FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Jack Theisen",
  title: "Full-Stack Developer",
  social: {
    github: "https://github.com/Kay0ss",
    dribbble: "",
    twitter: "",
    email: "someone@example.com",
  },
  about: {
    title: "My Background",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper porta pharetra. Nunc porta dui eu mattis laoreet. Quisque lobortis orci sagittis, luctus ligula nec, sagittis leo. Ut convallis eu mi dignissim facilisis. Donec egestas vitae sapien quis bibendum. Sed rhoncus aliquet felis, ac cursus dui varius sit amet. Etiam eu nisi ligula. Sed sagittis massa a metus pulvinar, eu vestibulum nulla molestie. Nullam luctus sit amet felis quis ullamcorper. ",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    }
    
  ],
  projects: [
    {
      title: "True Crime Quiz",
      description: "🕵🏼‍♂️ A simple quiz app with login functionality to keep track of questions the user has made. It was made using, React, HTML, CSS, and Auth0.",
      tags: [
        "HTML",
        "CSS",
        "Reactjs",
        "Auth0"
      ],
      link: "https://github.com/bretpeters3n/true-crime-quiz"
    },
    {
      title: "CaptionMe(Me)",
      description: "⚡ A simple app that allows users to caption their own photos. It was made using, React, HTML, and CSS.",
      tags: [
        "HTML",
        "CSS",
        "Handlebars"
      ],
      link: "https://captionmeme.herokuapp.com/"
    },
    {
      title: "Character Quiz",
      description: "🎨 A fun quiz game built with React and Tailwind.",
      tags: [
        "quiz",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/kayoss/react-quiz"
    }
  ]
};
export default data;
