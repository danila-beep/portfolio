import AxiosIcon from "../assets/svgs/AxiosIcon";
import JestIcon from "../assets/svgs/JestIcon";
import ReduxIcon from "../assets/svgs/ReduxIcon";
import StoryBookIcon from "../assets/svgs/StoryBookIcon";
import TypeScriptIcon from "../assets/svgs/TypeScriptIcon";
import todoListImage from "../assets/projectsImages/todoListImage.png";
import socialMediaImage from "../assets/projectsImages/socialMediaProjectImage.png";
import componentsImage from "../assets/projectsImages/componentsProject.png";
import storyBookProject from "../assets/projectsImages/StoryBookProject.png";

type Tag = {
  id: number;
  logo: JSX.Element;
  name: string;
};

type FilterValues = "Native" | "React" | "Vue" | "Angular";

type ProjectItem = {
  id: number;
  title: string;
  filter: FilterValues;
  tags: Tag[];
  description: string;
  advantageslist?: string[];
  buttonTitle: string;
  siteLink: string;
  gitHubLink: string;
  photo: string;
};

type Projects = ProjectItem[];

export const projects: Projects = [
  {
    id: 1,
    title: "TodoList",
    filter: "React",
    tags: [
      {
        id: 1.1,
        logo: <TypeScriptIcon />,
        name: "TypeScript",
      },
      {
        id: 1.2,
        logo: <ReduxIcon />,
        name: "Redux",
      },
      {
        id: 1.3,
        logo: <JestIcon />,
        name: "Jest",
      },
      {
        id: 1.5,
        logo: <AxiosIcon />,
        name: "axios",
      },
    ],
    description: "",
    advantageslist: ["Light / Dark theme Switcher", "Full API Flow", "Redux ToolKit Support", "Fully extensible", "TypeScript"],
    buttonTitle: "Click to visit site",
    siteLink: "https://danila-beep.github.io/todoList/",
    gitHubLink: "https://github.com/danila-beep/todoList",
    photo: todoListImage,
  },
  {
    id: 2,
    title: "Social Media",
    filter: "React",
    tags: [
      {
        id: 2.1,
        logo: <TypeScriptIcon />,
        name: "TypeScript",
      },
      {
        id: 2.2,
        logo: <ReduxIcon />,
        name: "Redux",
      },
      {
        id: 2.3,
        logo: <AxiosIcon />,
        name: "axios",
      },
    ],
    description: "(currently in work)",
    advantageslist: ["Big Data processing", "Dynamic Pagination"],
    buttonTitle: "Click to go to site",
    siteLink: "",
    gitHubLink: "https://github.com/danila-beep/samurai-way",
    photo: socialMediaImage,
  },
  // {
  //   id: 3,
  //   title: "Reusable Components",
  //   filter: "React",
  //   tags: [
  //     {
  //       id: 3.1,
  //       logo: <TypeScriptIcon />,
  //       name: "TypeScript",
  //     },
  //     {
  //       id: 3.2,
  //       logo: <ReduxIcon />,
  //       name: "Redux",
  //     },
  //   ],
  //   description: "Simple reusable react components (like clock, timer etc)",
  //   buttonTitle: "Click to go to site",
  //   siteLink: "",
  //   photo: componentsImage,
  // },
  {
    id: 4,
    title: "StoryBook Components Library",
    filter: "React",
    tags: [
      {
        id: 4.1,
        logo: <TypeScriptIcon />,
        name: "TypeScript",
      },
      {
        id: 4.2,
        logo: <StoryBookIcon />,
        name: "Storybook",
      },
    ],
    description: "(currently in work)",
    advantageslist: ["StoryBook Testing", "Reusable UI Elements"],
    buttonTitle: "Click to go to the site",
    siteLink: "https://danila-beep.github.io/storybook_ui",
    gitHubLink: "https://github.com/danila-beep/storybook_ui",
    photo: storyBookProject,
  },
];
