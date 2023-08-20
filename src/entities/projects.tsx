import AxiosIcon from "../assets/svgs/AxiosIcon";
import JestIcon from "../assets/svgs/JestIcon";
import ReduxIcon from "../assets/svgs/ReduxIcon";
import StoryBookIcon from "../assets/svgs/StoryBookIcon";
import TypeScriptIcon from "../assets/svgs/TypeScriptIcon";
import todoListImage from "../assets/projectsImages/todoListImage.png";
import socialMediaImage from "../assets/projectsImages/socialMediaProjectImage.png";
import componentsImage from "../assets/projectsImages/componentsProject.png"

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
  buttonTitle: string;
  siteLink: string;
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
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliasoptio obcaecati rerum possimus est illo atque velit natusdignissimos vel.",
    buttonTitle: "Click to visit site",
    siteLink: "https://danila-beep.github.io/todoList/",
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
    description: "Social media project",
    buttonTitle: "Click to go to site",
    siteLink: "",
    photo: socialMediaImage,
  },
  {
    id: 3,
    title: "Reusable Components",
    filter: "React",
    tags: [
      {
        id: 3.1,
        logo: <TypeScriptIcon />,
        name: "TypeScript",
      },
      {
        id: 3.2,
        logo: <ReduxIcon />,
        name: "Redux",
      },
    ],
    description: "Simple reusable react components (like clock, timer etc)",
    buttonTitle: "Click to go to site",
    siteLink: "",
    photo: componentsImage,
  },
];
