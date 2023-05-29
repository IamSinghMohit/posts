import Card from "./Card";
export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4">
      <div className="put-shadow bg-gray-600 p-3 rounded-lg flex  justify-between">
        {/* LEFT SIDE */}
        <div className="text-black font-bold capitalize">
          <h3>
            Name : <span className="text-white">John Wick Continental</span>{" "}
          </h3>
          <h3>
            following : <span className="text-white">30</span>{" "}
          </h3>
          <h3>
            Joined : <span className="text-white">31/2022</span>{" "}
          </h3>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex flex-col self-end items-center">
          <div className="p-2 rounded-full">
            <img
              src="/person.png"
              width={52}
              height={52}
              alt="person image"
              layout="interensic"
            />
          </div>
          <h3 className="capitalize font-bold text-black">
            followers : <span className="text-white">110m</span>{" "}
          </h3>
        </div>
      </div>
      {/* CARDS */}
      <Card className={"w-full"} />
      <Card className={"w-full"} />
      <Card className={"w-full"} />
      <Card className={"w-full"} />
      <Card className={"w-full"} />
      <Card className={"w-full"} />
      <Card className={"w-full"} />
      <Card className={"w-full"} />
      <Card className={"w-full"} />
    </div>
  );
}
