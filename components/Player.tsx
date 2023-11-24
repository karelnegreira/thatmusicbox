"use client";

import useGetSongsById from "@/hooks/useGetSongsById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";

const Player = () => {

    const player = usePlayer();
    const { song } = useGetSongsById(player.activeId);
    const songUrl = useLoadSongUrl(song);

  return (
    <div>Player</div>
  )
}

export default Player