import { getIcons } from "../../assets";
import { IconsType } from "../../assets/types";

export const listIconMapper: {
  [key in
    | "Backlog"
    | "Todo"
    | "In progress"
    | "Done"
    | "Cancelled"
    | "Urgent"
    | "Low"
    | "Medium"
    | "High"]: JSX.Element;
} = {
  Backlog: getIcons(IconsType.backlog),
  Todo: getIcons(IconsType.todo),
  "In progress": getIcons(IconsType.inProgress),
  Done: getIcons(IconsType.done),
  Cancelled: getIcons(IconsType.cancelled),
  Urgent: getIcons(IconsType.urgent),
  Low: getIcons(IconsType.low),
  Medium: getIcons(IconsType.medium),
  High: getIcons(IconsType.high),
};
