import { SiReact } from "react-icons/si";
export default function Spinner() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SiReact className="w-16 h-16 text-white animate-spin" />
    </div>
  );
}
