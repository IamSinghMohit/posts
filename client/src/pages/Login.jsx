import { logInSchema } from "./../schema/index";
import { Form, Formik, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import TextField from "./../components/form/TextFeild";
import { useUserLogin } from "./../hooks/userUserLogin";
import { useUserGoogle } from "./../hooks/userUserGoogle";
import Spinner from "./../components/spinner";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./../store/userSlice";
import { useEffect } from "react";
function Login() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.userSlice.url);
  const { isLoading, mutate: login, data } = useUserLogin();
  const { mutate: loginWithGoogle } = useUserGoogle();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      navigate("/");
    }
  },[data])
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    login({ ...values });
  };
  const handleClick = () => {
    loginWithGoogle();
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={logInSchema}
      initialValues={initialValues}
    >
      {({ values, errors, touched }) => (
        <Form className="flex items-center justify-center w-full h-full mt-16">
          <div className="bg-gray-400 w-[360px] p-4 flex flex-col items-center justify-center gap-3 rounded-md put-shadow">
            <div className="relative flex">
              <TextField type={"email"} id={"email"} name={"email"} />
              {!values.email && (
                <label htmlFor="email" autoComplete="off">
                  Email
                </label>
              )}
              <p className="text-red-600 absolute -bottom-6">
                {touched.email && errors.email}
              </p>
            </div>
            <div className="relative flex">
              <TextField type={"password"} id={"password"} name={"password"} />
              {!values.password && (
                <label htmlFor="password" autoComplete="off">
                  Password
                </label>
              )}
              <p className="text-red-600 absolute -bottom-6">
                {touched.password && errors.password}
              </p>
            </div>
            {/* BUTTON */}
            <button
              className="text-white p-2 px-5 rounded-md bg-blue-700 mt-4"
              type="submit"
            >
              log in
            </button>
            <p className="text-blue-800">Or</p>
            {/* BUTTON */}
            <p className="text-black">
              Dont' have an
              <Link to="/signin" className="text-blue-800">
                &nbsp; account?
              </Link>
            </p>
            <button
              className="bg-blue-600 flex items-center gap-1 rounded-sm p-2 mt-4 mb-2"
              onClick={handleClick}
            >
              <img src="/g.png" alt="google" width={32} height={32} />
              <span>Login with Google</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default Login;
