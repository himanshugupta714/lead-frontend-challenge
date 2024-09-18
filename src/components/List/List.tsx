import { Ticket } from "../../types";
import Card from "../Card";
import "./List.css";

interface ListProps {
  groupValue: string;
  listTitle: string;
  ticketDetails: Ticket[];
}

const List = ({
  groupValue,
  listTitle,
  ticketDetails,
}: ListProps): JSX.Element => {
  let cardCount = 0;

  const renderTickets = () => {
    console.log(groupValue);
    return ticketDetails.map((ticket) => {
      cardCount++;
      return (
        <Card
          key={ticket.id}
          id={ticket.id}
          priority={ticket.priority}
          tag={ticket.tag}
          title={ticket.title}
          userObj={ticket.userObj}
        />
      );
    });
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <div className="list-title">{listTitle}</div>
        <div className="list-sum">{cardCount}</div>
      </div>
      <div className="list-card-items">{renderTickets()}</div>
    </div>
  );
};

export default List;
