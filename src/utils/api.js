import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'x-rapidapi-key': '111c1a7b5cmsh0f2214114aea4f8p1633f5jsnd7ed36cb7bdc',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data;
}