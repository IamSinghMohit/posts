import * as Yup from "yup";

export const signInSchema = Yup.object({
  name: Yup.string().min(2).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(5).required("Please enter your password"),
  confirmPassword: Yup.string()
    .min(5)
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Both password must be same"),
});
export const logInSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(5).required("Please enter your password"),
});
