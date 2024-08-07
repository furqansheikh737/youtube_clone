import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'x-rapidapi-key': '8ef431d313mshc5b4f289d12c318p1378c4jsn7032b54bc101',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data;
}