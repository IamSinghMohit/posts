import React from "react";
import RentStatus from "../components/profile/RentStatus";
import History from "../components/profile/History";

function Profile() {
  return (
    <div className="flex flex-col gap-8 px-2">
      <RentStatus />
      <History />
    </div>
  );
}

export default Profile;
