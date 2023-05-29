"use client";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
export default function CommentText() {
  return (
    <div className="flex items-center bg-gray-600 put-shadow rounded-md mt-5 p-3 gap-3">
      {/* RIGHT */}
      <div>
        <img src="/person.png" width={38} height={38} />
      </div>
      {/* LEFT */}
      <div>
        <h6 className="text-[14px] text-black">
          Uchiha Madara
          <span className="text-[14px] text-white ml-3">6 hours ago</span>
        </h6>
        <p className="text-[13px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse
          doloremque natus illum consequatur inventore nobis saepe dolorum?
        </p>
         {/* <AiFillLike /> */}
          <AiOutlineLike />
      </div>
    </div>
  );
}
