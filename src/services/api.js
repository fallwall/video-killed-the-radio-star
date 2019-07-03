import axios from 'axios';
const access_token = process.env.REACT_APP_API_KEY;

export const searchVideo = async (query) => {
  const resp = await axios.get(`https://api.vimeo.com/videos?direction=asc&filter=categories&query=${query}`, { headers: { "Authorization": `Bearer ${access_token}` } })
  return resp.data.data;
}
