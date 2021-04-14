import axios from "axios";

const API_KEY = "XihzduQjHfgVNOfGJ7JTtYcxQlhL0eBhNdifkbvb";

const api = axios.create({
  baseURL: "https://api.nasa.gov",
});

export const fetchAsteroidsInfo = (date: Date) => {
  const formatedDate: string = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
  return api.get(`neo/rest/v1/feed?start_date=${formatedDate}&api_key=${API_KEY}`);
};

export const fetchAsteroidInfoById = (id: number) => {
  return api.get(`neo/rest/v1/neo/${id}?api_key=${API_KEY}`);
};
