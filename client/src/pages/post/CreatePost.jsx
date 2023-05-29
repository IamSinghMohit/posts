import Paragrpah from "./../../components/post/create/Paragraph";
import Title from "./../../components/post/create/Title";
import { createContext, useRef, useContext, useState } from "react";

const RefContext = createContext();

export function useRefContext() {
  return useContext(RefContext);
}

function CreatePost() {
  const titleRef = useRef();
  const paragraph = useRef();
  const parent = useRef();
  const subParent = useRef();
  const tempRef = useRef();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  return (
    <RefContext.Provider
      value={{
        titleRef,
        paragraph,
        parent,
        subParent,
        tempRef,
        data,
        setData,
        setTitle,
        title,
      }}
    >
      <div className="max-w-3xl mx-auto pt-16">
        <section className="" ref={parent}>
          <Title />
          <Paragrpah />
        </section>
      </div>
    </RefContext.Provider>
  );
}
export default CreatePost;
