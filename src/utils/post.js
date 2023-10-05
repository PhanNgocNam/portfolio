import axios from "axios";
export const post = async (url, body, headers) => {
  const { data } = await axios.post(url, { ...body }, { ...headers });
  return data;
};
