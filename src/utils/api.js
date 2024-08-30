import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'x-rapidapi-key': 'b138ecae49msh8c979776f5afe93p106f9bjsn1776b66f7a25',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data;
}