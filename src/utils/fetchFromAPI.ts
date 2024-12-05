import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

//Should try implementing ZOD to validate the response from the API
export const fetchFromAPI = async (url: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log("Data: ", data);
    return data;
  } catch (error) {
    console.error("an error occurred when calling the API: ", error);
    return {};
  }
};
