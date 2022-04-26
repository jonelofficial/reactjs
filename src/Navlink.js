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
        name: "Team List",
        icon: "",
        path: "/team/team-list",
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
