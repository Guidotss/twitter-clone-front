import {
  HomeIcon,
  ExploreIcon,
  MessageIcon,
  ProfileIcon,
} from "../components/shared/ui/Icons";


export const sidebarItems = [
  {
    name: "Inicio",
    icon: HomeIcon({ width: "30px", height: "30px" }),
    isSelected: true,
  },
  {
    name: "Explorar",
    icon: ExploreIcon({ width: "30px", height: "30px" }),
    isSelected: false,
  },
  {
    name: "Mensajes",
    icon: MessageIcon({ width: "30px", height: "30px" }),
    isSelected: false,
  },
  {
    name: "Perfil",
    icon: ProfileIcon({ width: "30px", height: "30px" }),
    isSelected: false,
  },
] as const;
