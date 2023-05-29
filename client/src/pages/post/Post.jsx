import Post from "./../../components/post/scene/Post";
import Sidebar from "./../../components/post/scene/Sidebar";

function Posts() {
  return (
    <div className="flex p-6 gap-4">
      {/* LEFT SIDE */}
      <Post />
      {/* RIGHT SIDE */}
      <div className="flex-2">
        <Sidebar />
      </div>
    </div>
  );
}
export default Posts;
