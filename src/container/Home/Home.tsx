import React from "react";
import { useFetchTicketsData } from "../../hooks/useFetchTicketsData";

const Home: React.FC = (): JSX.Element => {
  const { data, error, isLoading, isError } = useFetchTicketsData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <h1>Tickets Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
