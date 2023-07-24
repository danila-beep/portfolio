import AxiosIcon from "../assets/svgs/AxiosIcon";
import JestIcon from "../assets/svgs/JestIcon";
import ReduxIcon from "../assets/svgs/ReduxIcon";
import StoryBookIcon from "../assets/svgs/StoryBookIcon";
import TypeScriptIcon from "../assets/svgs/TypeScriptIcon";

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
  photo: string
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
        id: 1.4,
        logo: <StoryBookIcon />,
        name: "StoryBook",
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
    photo: "/src/assets/todoListProjectImage.png"
  },
  {
    id: 2,
    title: "StoryBook Ui Library (in work)",
    filter: "React",
    tags: [
      { 
        id: 2.1, 
        logo: <StoryBookIcon />, 
        name: "Storybook",
      }
    ],
    description: "12311231241238947387412647312647812634781263471678346172863784162398741698734612341298346812342312",
    buttonTitle: "Click to go to site",
    siteLink: "https://danila-beep.github.io/storybook_ui/",
    photo: "/src/assets/StorybookProjectImage.png"
  },
];
