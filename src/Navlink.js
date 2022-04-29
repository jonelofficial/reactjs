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
    defaultShow: true,
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
    defaultShow: false,
  },
  {
    name: "Calendar",
    icon: AiOutlineCalendar,
    accordion: {},
    path: "/calendar",
    id: "3",
    defaultShow: true,
  },
  {
    name: "Requester",
    icon: AiOutlineFilePdf,
    accordion: {},
    path: "/document",
    id: "4",
    defaultShow: false,
  },
  {
    name: "Support",
    icon: AiOutlineBarChart,
    accordion: {},
    path: "/report",
    id: "5",
    defaultShow: false,
  },
];
export default Navlink;
