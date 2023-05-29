import { Field } from "formik";
export default function TextField({ type, id, name }) {
  return (
    <>
      <Field
        id={id}
        type={type}
        className="primary-input peer"
        name={name}
        autoComplete="off"
      />
    </>
  );
}
