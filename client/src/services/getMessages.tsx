import axios from "axios";

import MessagesI from "../types/messageTypes";

const getMessages = async (): Promise<MessagesI[]> => {
  const APIResponse = await axios
    .get(`${import.meta.env.VITE_API_SERVER}`)
    .then((res) => res.data);
  return APIResponse.data as MessagesI[];
};

export default getMessages;
