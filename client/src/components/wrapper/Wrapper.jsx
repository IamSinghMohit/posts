import { Navigate, Outlet } from "react-router";
import Navbar from "./Navbar";
import ScrollBar from "./ScrollBar";
import { useSelector } from "react-redux";

export default function Wrapper() {
  const user = useSelector((state) => state.userSlice.user);
  return (
    <div>
      <Navbar />
      <ScrollBar />
      {user ? <Outlet /> : <Navigate to={"/login"} />}
    </div>
  );
}
