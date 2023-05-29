import Rating from "./Rating";

export default function Card({ className }) {
  return (
    <div
      className={`put-shadow bg-gray-600 ${
        className || "w-[350px]"
      } h-[150px] p-3 rounded-lg flex flex-col justify-between ${
        !className && "m-4"
      }`}
    >
      <div>
        <h5 className="font-bold text-1xl">
          This is the title and you should read this, if you won't then you have
          to pay
        </h5>
        <span className="text-[14px]">I am the Author</span>
      </div>
      <div className="flex items-center justify-between px-2">
        <span>5:60pm</span>
        <Rating className={"text-white flex items-center gap-1"} value={4.6} />
      </div>
    </div>
  );
}
