import { useState, useEffect } from "react";
import { FavLocations } from "../utils/fetchWeather";
import { LocationWithWeather } from "../../types";
import axios from "axios";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export const FavComponent = () => {
  const [locations, setLocations] = useState<LocationWithWeather[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FavLocations();
      setLocations(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/fav/${id}`);
      setLocations(locations.filter((location) => location.id !== id));
    } catch (error) {
      console.error("Failed to delete location", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto">
      <h1 className="font-bold text-2xl">Favourite Locations</h1>
      <ul className="flex">
        {locations.map((location) => (
          <li key={location.id}>
            <Card className="px-8 m-2">
              <CardHeader>
                <h1 className="font-bold">{location.name}</h1>
              </CardHeader>
              <CardContent>
                <p>Temperature: {location.weather.main.temp}°C</p>
                <p>Weather: {location.weather.weather[0].description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(location.id)}
                >
                  Remove
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
