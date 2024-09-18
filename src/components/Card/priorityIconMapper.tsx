import { getIcons } from "../../assets";
import { IconsType } from "../../assets/types";

export const priorityIconMapper: {
  [key: number]: { label: string; icon: JSX.Element };
} = {
  0: {
    label: "No Priority",
    icon: getIcons(IconsType.noPriority),
  },
  1: {
    label: "Low",
    icon: getIcons(IconsType.low),
  },
  2: {
    label: "Medium",
    icon: getIcons(IconsType.medium),
  },
  3: {
    label: "High",
    icon: getIcons(IconsType.high),
  },
  4: {
    label: "Urgent",
    icon: getIcons(IconsType.urgent),
  },
};
