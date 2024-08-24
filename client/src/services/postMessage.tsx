import axios from "axios";

const postMessages = async (message: string) => {
  const crrDate = new Date();

  const postObject = {
    id: Math.floor(Math.random() * 100 * Math.random()),
    username: localStorage.getItem("UserName") as string,
    date: crrDate.toDateString(),
    message: message,
  };

  const APIresponse = await axios.post(
    `${import.meta.env.VITE_API_SERVER}`,
    postObject
  );

  return { status: APIresponse.data.statusMessage, data: postObject };
};

export default postMessages;
