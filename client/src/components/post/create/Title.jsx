import { useRefContext } from "./../../../pages/post/CreatePost";
import { useRef } from "react";

export default function Title() {
  const { titleRef, paragraph, setTitle ,title} = useRefContext();
  const hasBeenEdited = useRef(false);

  function handleFocus() {
    if (!hasBeenEdited.current) {
      titleRef.current.textContent = "";
      hasBeenEdited.current = true;
    }
  }
  function handleBlur() {
    if (titleRef.current.textContent == "") {
      titleRef.current.textContent = "Title";
      console.log(title)
      hasBeenEdited.current = false;
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      paragraph.current.focus();
    }
  }
  function handleInput(e) {
    setTitle(e.target.textContent);
  }
  return (
    <h3
      className="outline-none text-[34px]"
      contentEditable
      ref={titleRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onInput={handleInput}
    >
      Title
    </h3>
  );
}
