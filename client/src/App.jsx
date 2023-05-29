import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Posts from "./pages/post/Post";
import CreatePost from "./pages/post/CreatePost";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Wrapper from "./components/wrapper/Wrapper"

function App() {
  return (
    <div className="bg-stone-800 text-white app">
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="post/:id" element={<Posts />} />
        <Route path="post/create" element={<CreatePost />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
</div>
  );
}

export default App;
