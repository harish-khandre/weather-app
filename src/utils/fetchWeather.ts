import axios from "axios";
import { Location, LocationWithWeather, WeatherData } from "../../types";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY as string;

export const fetchWeather = async (
  location: Location,
): Promise<WeatherData> => {
  console.log(`Fetching weather for ${location.name} with API key ${apiKey}`); // Add this line for debugging
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location.name}&appid=${apiKey}&units=metric`;
  const response = await axios.get<WeatherData>(weatherApiUrl);
  return response.data;
};

export const FavLocations = async (): Promise<LocationWithWeather[]> => {
  const uri = "http://localhost:3001/fav";
  const res = await fetch(uri);
  const data: Location[] = await res.json();

  const locationsWithWeather: LocationWithWeather[] = await Promise.all(
    data.map(async (location) => {
      const weather = await fetchWeather(location);
      return { ...location, weather };
    }),
  );

  return locationsWithWeather;
};
