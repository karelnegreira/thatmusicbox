import { Song } from "@/types";
import { useUser } from "./useUser";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const {user} = useUser();

    const onPlay = (id: string) => {
        if(!user) {
            return authModal.onOpen();
        }
        //
        player.setId(id);
        player.setIds(songs.map((song) => song.id)); //creates a playlist from whre the user clicks on
    };

    return onPlay;
}

export default useOnPlay;