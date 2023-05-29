'use client'
import { Logo, Person, Search } from "./../../../icons";

export default function Navbar() {
  return (
    <nav className="h-12 w-full sticky top-0 bg-zinc-700 flex items-center justify-between px-12 py-2">
      <div>
        <Logo className={"w-10 h-10 text-zinc-300"} />
      </div>
      <div className="bg-zinc-300 flex items-center p-1 rounded-full">
        <button className="p-2 hover:bg-slate-950 hover:text-white rounded-full text-black">
          <Search className={"w-4 h-4"} />
        </button>
        <input
          type="text"
          className="h-full py-1 px-3 bg-transparent text-slate-950 text-xl outline-none"
          placeholder="Search..."
        />
      </div>
      <div>
        <Person className={"w-10 h-10 text-zinc-300"} />
      </div>
    </nav>
  );
}
