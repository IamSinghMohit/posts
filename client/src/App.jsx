import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home";
import Posts from "./pages/post/Post";
import CreatePost from "./pages/post/CreatePost";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Wrapper from "./components/wrapper/Wrapper";
import { useEffect } from "react";
import CustomeFetch from "./lib/fetchInstance";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";

function App() {
  const user = useSelector((state) => state.userSlice.user);
  useEffect(() => {
    if (!user) {
      (async () => await CustomeFetch.get("auth/refresh"))();
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<Posts />} />
          <Route path="post/create" element={<CreatePost />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        {user == null ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Navigate to="/" replace={true} />} />
            <Route
              path="/signin"
              element={<Navigate to="/" replace={true} />}
            />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
