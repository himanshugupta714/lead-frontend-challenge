import "./Home.css";
import { useState, useCallback, useEffect } from "react";
import { Ticket } from "../../types";
import { useFetchTicketsData } from "../../hooks/useFetchTicketsData";
import Navbar from "../../components/Navbar/Navbar";
import List from "../../components/List";

const App: React.FC = () => {
  const { data: fetchedData, error, isLoading } = useFetchTicketsData();
  const [groupValue, setGroupValue] = useState<string>(
    getStateFromLocalStorage() || "status"
  );
  const [orderValue, setOrderValue] = useState<string>("title");
  const [ticketDetails, setTicketDetails] = useState<Ticket[]>([]);

  const orderDataByValue = useCallback(
    (cardsArray: Ticket[]) => {
      const sortedCards = [...cardsArray];
      if (orderValue === "priority") {
        sortedCards.sort((a, b) => b.priority - a.priority);
      } else if (orderValue === "title") {
        sortedCards.sort((a, b) => a.title.localeCompare(b.title));
      }
      setTicketDetails(sortedCards);
    },
    [orderValue]
  );

  function saveStateToLocalStorage(state: string): void {
    localStorage.setItem("groupValue", JSON.stringify(state));
  }

  function getStateFromLocalStorage(): string | null {
    const storedState = localStorage.getItem("groupValue");
    return storedState ? JSON.parse(storedState) : null;
  }

  useEffect(() => {
    saveStateToLocalStorage(groupValue);

    if (fetchedData && !isLoading) {
      const ticketsWithUser = fetchedData.tickets.map((ticket: Ticket) => {
        const userObj = fetchedData.users.find(
          (user) => user.id === ticket.userId
        );
        return { ...ticket, userObj };
      });

      setTicketDetails(ticketsWithUser);
      orderDataByValue(ticketsWithUser);
    }
  }, [fetchedData, groupValue, isLoading, orderDataByValue]);

  const handleGroupValue = (value: string) => setGroupValue(value);
  const handleOrderValue = (value: string) => setOrderValue(value);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  // Group tickets dynamically based on groupValue
  const groupedTickets = (() => {
    if (groupValue === "status") {
      return ticketDetails.reduce((acc, ticket) => {
        acc[ticket.status] = acc[ticket.status] || [];
        acc[ticket.status].push(ticket);
        return acc;
      }, {} as Record<string, Ticket[]>);
    } else if (groupValue === "user") {
      return ticketDetails.reduce((acc, ticket) => {
        const userName = ticket.userObj?.name || "Unknown User";
        acc[userName] = acc[userName] || [];
        acc[userName].push(ticket);
        return acc;
      }, {} as Record<string, Ticket[]>);
    } else if (groupValue === "priority") {
      return ticketDetails.reduce((acc, ticket) => {
        const priorityName = ["No Priority", "Low", "Medium", "High", "Urgent"][
          ticket.priority
        ];
        acc[priorityName] = acc[priorityName] || [];
        acc[priorityName].push(ticket);
        return acc;
      }, {} as Record<string, Ticket[]>);
    }
  })();

  return (
    <>
      <Navbar
        groupValue={groupValue}
        orderValue={orderValue}
        handleGroupValue={handleGroupValue}
        handleOrderValue={handleOrderValue}
      />
      <section className="board-details">
        <div className="board-details-list">
          {groupedTickets &&
            Object.keys(groupedTickets).map((groupKey) => (
              <List
                key={groupKey}
                groupValue={groupValue}
                listTitle={groupKey}
                ticketDetails={groupedTickets[groupKey]}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default App;
