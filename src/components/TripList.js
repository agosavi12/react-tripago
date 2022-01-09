import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3000/trips/");
  const { data: trips, isLoading, error } = useFetch(url);

  //   const fetchTrips = useCallback(async () => {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setTrips(json);
  //   }, [url]);

  //   useEffect(() => {
  //     fetchTrips();
  //   }, [fetchTrips]);

  //   console.log(trips);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>

      <div className="filters">
        <button onClick={() => setUrl("http://localhost:3000/trips/")}>
          All Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trip
        </button>
      </div>

      <ul>
        {isLoading && <span>Loading Trips...</span>}
        {error && <span>{error}</span>}
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TripList;
