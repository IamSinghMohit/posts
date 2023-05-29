import { useMutation } from "react-query";
import axios from "../lib/axiosInstance";

const postUserData = async function () {
  const res = await axios.get("/auth/login/google");
  console.log(res)
  return res;
};

export const useUserGoogle = () => {
  return useMutation(() => postUserData(), {
    onError: (error) => {
      console.log(error)
    },
  });
};
