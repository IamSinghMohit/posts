import { useMutation } from "react-query";
import axios from "../lib/axiosInstance";

const postUserData = async function (data) {
  const res = await axios.post("/auth/signin", data);
  return res;
};

export const useUserSignin = () => {
  return useMutation((data) => postUserData(data), {});
};

