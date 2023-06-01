import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { signInSchema } from "./../schema/index";
import TextField from "./../components/form/TextFeild";
import { useUserSignin } from "./../hooks/userUserSignin";
import Spinner from "./../components/spinner";
function SignIn() {
  const {
    data,
    isLoading,
    mutate: singin,
    isSuccess,
    isError,
  } = useUserSignin();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    singin({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors }) => (
        <Form className="flex items-center justify-center w-full h-full mt-16 ">
          <div className="bg-gray-400 w-[360px] p-4 flex flex-col items-center justify-center gap-3 rounded-md put-shadow">
            {/* USERNAME */}
            <div className="relative flex">
              <TextField id={"name"} type={"text"} name={"name"} />
              {!values.name && (
                <label htmlFor="name" autoComplete="off">
                  Name
                </label>
              )}
              <p className="text-red-600 absolute -bottom-6">
                {touched.name && errors.name}
              </p>
            </div>
            {/* EMAIL */}
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
            {/* PASSWORD */}
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
            {/* CONFIRMPASSWORD */}
            <div className="relative flex">
              <TextField
                type={"Password"}
                id={"confirmPassword"}
                name={"confirmPassword"}
              />
              {!values.confirmPassword && (
                <label htmlFor="confirmPassword" autoComplete="off">
                  Confirm Password
                </label>
              )}
              <p className="text-red-600 absolute -bottom-6">
                {touched.confirmPassword && errors.confirmPassword}
              </p>
            </div>
            {/* BUTTON */}
            <button
              className="text-white p-2 px-5 rounded-md bg-blue-700 mt-4"
              type="submit"
            >
              Sing in
            </button>
            <p className="text-blue-800">Or</p>
            {/* BUTTON */}
            <button className="bg-blue-600 flex items-center gap-1 rounded-md p-2 mt-4 mb-2">
              <img src="/g.png" alt="google" width={32} height={32} />
              <span>Login with Google</span>
            </button>
            <p className="text-black">
              Already have an
              <Link to="/login" className="text-blue-800">
                &nbsp; account
              </Link>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default SignIn;
