import { Outlet } from "react-router";
import Navbar from "./Navbar";
import ScrollBar from "./ScrollBar";

export default function Wrapper() {
  return (
    <div>
      <Navbar />
      <ScrollBar />
      <Outlet />
    </div>
  );
}
