import { useMutation } from "react-query";
import axios from "../lib/axiosInstance";

const postUserData = async function (data) {
  const res = await axios.post("/auth/login", data );
  return res;
};

export const useUserLogin = (data) => {
  return useMutation((data) => postUserData(data), {
    onError: (e) => {
      console.log(e, "at on error");
    },
  });
};
