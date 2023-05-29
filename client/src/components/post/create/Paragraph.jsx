import { BsFillImageFill, BsTextCenter } from "react-icons/bs";
import { useRef, useState } from "react";
import { useRefContext } from "./../../../pages/post/CreatePost";

export default function Paragrpah() {
  const { paragraph, parent, subParent, tempRef, setData, setImageData } =
    useRefContext();
  const show = useRef(true);
  const hasBeenEdited = useRef(false);
  const [counter, setCounter] = useState(1);
  const [pText,setPText] = useState('')

  function handleFocus() {
    if (!hasBeenEdited.current) {
      paragraph.current.textContent = "";
      hasBeenEdited.current = true;
    }
  }
  function handleBlur() {
    if (paragraph.current.textContent == "") {
      if (show.current) {
        paragraph.current.textContent = "Yout content here...";
      }
      hasBeenEdited.current = false;
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      show.current = false;
      setCounter((prevCounter) => prevCounter + 1);
      setData((prevData) => ({ ...prevData, [counter]: pText}));
      const p = document.createElement("p");
      tempRef.current = p;
      p.classList.add("text-[24px]", "outline-none", "mb-2");
      p.textContent = paragraph.current.textContent;
      p.setAttribute("contentEditable", "true");
      parent.current.insertBefore(p, subParent.current);
      paragraph.current.textContent = "";
      paragraph.current.focus();
    }
    if (
      paragraph.current.textContent === "" &&
      (event.key === "Backspace" ||
        (event.ctrlKey && event.key === "Backspace"))
    ) {
      event.preventDefault();
      const previousParagraph = subParent.current.previousSibling;
      if (previousParagraph) {
        const { tagName } = previousParagraph;
        if (tagName === "P" || tagName === "DIV") {
          paragraph.current.textContent = tempRef.current.textContent;
          parent.current.removeChild(previousParagraph);
          focusParagraphEnd(paragraph.current);
        }
      }
    }
  }
  function focusParagraphEnd(element) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false); // Set the caret at the end of the content
    selection.removeAllRanges();
    selection.addRange(range);
  }
  function handleParagraph() {
    paragraph.current.focus();
  }

  function handleImage() {
    const input = document.createElement("input");
    const image = document.createElement("img");
    const div = document.createElement("div");
    image.classList.add("w-full", "h-full", "object-cover", "my-3");
    input.classList.add("hidden");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      image.src = url;
      image.alt = "post image";
      setImageData((prev) => ({ ...prev, [imageCounter]: url }));
      setCounter((prev) => prev + 1);
    });
    div.appendChild(image);
    div.appendChild(input);
    parent.current.insertBefore(div, subParent.current);
    input.click();
  }
  function handleInput (e) {
   setPText(e.target.textContent) 
  }
  return (
    <div className="relative" ref={subParent}>
      <div
        className={`text-[24px] inline-flex items-center gap-2 bg-gray-600 p-2 rounded-2xl absolute -bottom-1 -left-[5rem]`}
      >
        <button type="button" className="" onClick={handleImage}>
          <BsFillImageFill />
        </button>
        <button type="button" onClick={handleParagraph}>
          <BsTextCenter />
        </button>
      </div>
      <div>
        <p
          className="text-[24px] outline-none"
          contentEditable
          ref={paragraph}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
        >
          {show.current && "Your content..."}
        </p>
      </div>
    </div>
  );
}
