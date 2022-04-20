import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineCalendar,
  AiOutlineFilePdf,
  AiOutlineBarChart,
} from "react-icons/ai";

const Navlink = [
  {
    name: "Dashboard",
    icon: AiOutlineHome,
    accordion: {},
    path: "/",
    id: "1",
  },
  {
    name: "Teams",
    icon: AiOutlineTeam,
    accordion: [
      {
        name: "Team Red",
        icon: "",
        path: "/team/team-red",
      },
      {
        name: "Team Blue",
        icon: "",
        path: "/team/team-blue",
      },
      {
        name: "Team Green",
        icon: "",
        path: "/team/team-green",
      },
    ],
    path: "/team",
    id: "2",
  },
  {
    name: "Calendar",
    icon: AiOutlineCalendar,
    accordion: {},
    path: "/calendar",
    id: "3",
  },
  {
    name: "Documents",
    icon: AiOutlineFilePdf,
    accordion: {},
    path: "/document",
    id: "4",
  },
  {
    name: "Reports",
    icon: AiOutlineBarChart,
    accordion: {},
    path: "/report",
    id: "5",
  },
];
export default Navlink;
