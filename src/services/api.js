import axios from 'axios';
const access_token = "5f75fdd36aa6ffe6ddd4fada71aef86b";

export const searchVideo = async (query) => {
  const resp = await axios.get(`https://api.vimeo.com/videos?direction=asc&filter=categories&query=${query}`, { headers: { "Authorization": `Bearer ${access_token}` } })
  return resp.data.data;
}
