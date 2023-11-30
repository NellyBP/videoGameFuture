import GameDetails from "@/app/serverComponents/GameDetail";
import React from "react";

const page = ({ params }) => {
  return (
    <GameDetails gameId={params.id} />
  )
}

export default page;