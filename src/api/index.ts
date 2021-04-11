import axios from "axios";

const API_KEY = "XihzduQjHfgVNOfGJ7JTtYcxQlhL0eBhNdifkbvb";

const api = axios.create({
  baseURL: "https://api.nasa.gov",
});

export const fetchAsteroidsInfo = (date: string) => {
  const ms = new Date(date).getTime();
  const formatedDate = new Date(ms).toLocaleDateString().split("/").reverse().join("-");
  return api.get(`neo/rest/v1/feed?start_date=${formatedDate}&api_key=${API_KEY}`);
};

export const fetchAsteroidInfoById = (id: number) => {
  return api.get(`neo/rest/v1/neo/${id}?api_key=${API_KEY}`);
};
