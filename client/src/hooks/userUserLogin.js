import { useMutation } from "react-query";
import CustomeFetch from "../lib/fetchInstance";

const postUserData = async function (data) {
  const res = await CustomeFetch.post("auth/login",data);
  return res;
};

export const useUserLogin = () => {
  return useMutation((data) => postUserData(data));
};
