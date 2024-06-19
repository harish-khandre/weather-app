// types/index.d.ts
export interface Location {
  id: number;
  name: string;
}

export interface WeatherData {
  main: {
    temp: number;
  };
  weather: [
    {
      description: string;
    },
  ];
}

export interface LocationWithWeather extends Location {
  weather: WeatherData;
}
