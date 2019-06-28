import axios from 'axios';

// const client_id = "cc618d3917edef9c4803f2a08442bf8fb9786d38";
// const client_secret = "gt38qBtJl0KDuR0hyv581DCQBvjY1xp+X9fCOMTJsTTI0o/HcqOe3+QSTZYXaEU2858nB54Mar6nRigTNBmU3k1cbdeq51Cz1rNncD8OTu/w6AhkDWh2ny8J3mmuoP5M";
const access_token = "5f75fdd36aa6ffe6ddd4fada71aef86b";

export const searchVideo = async () => { 
  const resp = await axios.get('https://api.vimeo.com/videos?direction=asc&filter=categories&query=80s', { headers: {"Authorization" : `Bearer ${access_token}`} })
  return resp.data;
}

export const search = async () => { 
  const resp = await axios.get('https://api.vimeo.com/videos?direction=asc&filter=categories&query=britpop', { headers: {"Authorization" : `Bearer ${access_token}`} })
  return resp.data;
}