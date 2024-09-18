import { Ticket } from "../../types";
import Card from "../Card";
import "./List.css";

interface ListProps {
  listTitle: string;
  ticketDetails: Ticket[];
}

const List = ({ listTitle, ticketDetails }: ListProps): JSX.Element => {
  const listIconMapper: {
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
    Backlog: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="brown"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="m4 8l8 4l8-4l-8-4z" />
          <path fill="gray" d="m12 16l-4-2l-4 2l8 4l8-4l-4-2l-4 2z" />
          <path d="m8 10l-4 2l4 2m8 0l4-2l-4-2" />
        </g>
      </svg>
    ),
    Todo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"
        />
      </svg>
    ),
    "In progress": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <g transform="translate(24 0) scale(-1 1)">
          <path
            fill="#fdc000"
            d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8V4Z"
          />
        </g>
      </svg>
    ),
    Done: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 512 512"
      >
        <path
          fill="blue"
          d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48Zm-16.79 192.47l51.55-59a16 16 0 0 1 24.1 21.06l-51.55 59a16 16 0 1 1-24.1-21.06Zm-38.86 90.85a16 16 0 0 1-22.62 0l-47.95-48a16 16 0 1 1 22.64-22.62l48 48a16 16 0 0 1-.07 22.62Zm176.8-128.79l-111.88 128a16 16 0 0 1-11.51 5.47h-.54a16 16 0 0 1-11.32-4.69l-47.94-48a16 16 0 1 1 22.64-22.62l29.8 29.83a8 8 0 0 0 11.68-.39l95-108.66a16 16 0 0 1 24.1 21.06Z"
        />
      </svg>
    ),
    Cancelled: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
      >
        <path
          fill="red"
          d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"
        />
      </svg>
    ),
    Urgent: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 16 16"
      >
        <path
          fill="red"
          d="M5.96 4.457a2.075 2.075 0 1 1 4.08 0l-.856 4.56a1.205 1.205 0 0 1-2.368 0l-.855-4.56ZM9.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    ),
    Low: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="currentColor"
          d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"
        />
      </svg>
    ),
    Medium: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 48 48"
      >
        <g fill="currentColor">
          <path d="M19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" />
          <path
            fillRule="evenodd"
            d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4Z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ),
    High: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 48 48"
      >
        <path
          fill="currentColor"
          d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H9Z"
        />
      </svg>
    ),
  };

  const renderTickets = () => {
    return ticketDetails.map((ticket) => (
      <Card
        key={ticket.id}
        id={ticket.id}
        priority={ticket.priority}
        tags={ticket.tag}
        title={ticket.title}
        user={ticket.user}
      />
    ));
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <div className="list-header-icon">
          {listIconMapper[listTitle as keyof typeof listIconMapper] || null}
        </div>
        <div className="list-title">{listTitle}</div>
        <div className="list-sum">{ticketDetails.length}</div>
      </div>
      <div className="list-card-items">{renderTickets()}</div>
    </div>
  );
};

export default List;
