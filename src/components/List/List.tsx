import { getIcons } from "../../assets";
import { IconsType } from "../../assets/types";
import { Ticket } from "../../types";
import Card from "../Card";
import "./List.css";
import { listIconMapper } from "./listIconMapper";

interface ListProps {
  listTitle: string;
  ticketDetails: Ticket[];
}

const List = ({ listTitle, ticketDetails }: ListProps): JSX.Element => {
  const renderTickets = () => {
    return ticketDetails.map((ticket) => (
      <Card
        key={ticket.id}
        id={ticket.id}
        priority={ticket.priority}
        tags={ticket.tag}
        title={ticket.title}
        user={ticket.userObj}
      />
    ));
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <div className="list-header-left">
          {listIconMapper[listTitle as keyof typeof listIconMapper] || null}
          <div className="list-title">{listTitle}</div>
          {ticketDetails.length}
        </div>
        <div className="list-header-right">
          <div className="list-add-item">{getIcons(IconsType.plus)}</div>
          <div className="list-option-item">{getIcons(IconsType.more)}</div>
        </div>
      </div>
      <div className="list-card-items">{renderTickets()}</div>
    </div>
  );
};

export default List;
