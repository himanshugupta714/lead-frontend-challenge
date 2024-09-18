import React, { ReactElement } from "react";

import { IconsType } from "./types";
import DownIcon from "./icons/down";
import FilterIcon from "./icons/filter";
import BackLogIcon from "./icons/backlog";
import TodoIcon from "./icons/todo";
import InProgressIcon from "./icons/inProgress";
import CancelledIcon from "./icons/cancelled";
import HighIcon from "./icons/high";
import LowIcon from "./icons/low";
import UrgentIcon from "./icons/urgent";
import PlusIcon from "./icons/plus";
import MoreIcon from "./icons/more";
import NoPriorityIcon from "./icons/noPriority";
import MediumIcon from "./icons/medium";
import DoneIcon from "./icons/done";

export interface IconProps {
  className?: string;
  pathClassName?: string;
}

const iconsMap = new Map<keyof typeof IconsType, ReactElement<IconProps>>([
  [IconsType.down, <DownIcon />],
  [IconsType.filter, <FilterIcon />],
  [IconsType.backlog, <BackLogIcon />],
  [IconsType.todo, <TodoIcon />],
  [IconsType.inProgress, <InProgressIcon />],
  [IconsType.done, <DoneIcon />],
  [IconsType.cancelled, <CancelledIcon />],
  [IconsType.high, <HighIcon />],
  [IconsType.low, <LowIcon />],
  [IconsType.medium, <MediumIcon />],
  [IconsType.urgent, <UrgentIcon />],
  [IconsType.plus, <PlusIcon />],
  [IconsType.more, <MoreIcon />],
  [IconsType.noPriority, <NoPriorityIcon />],
]);

export const getIcons = (
  icons: IconsType,
  iconsProp?: IconProps
): ReactElement<IconProps> => {
  const icon = iconsMap.get(icons);

  if (icon) {
    return React.cloneElement(icon, iconsProp);
  }

  return <React.Fragment />;
};
