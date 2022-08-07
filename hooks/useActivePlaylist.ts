import { createPlaylist, fetchCollectorPlaylists } from "@spinamp/spinamp-sdk";
import { useEffect, useState } from "react";
import { useSigner } from "wagmi";

export const useActivePlaylist = () => {
  const { data: signer } = useSigner();
  const [tracks, setTracks] = useState<string[]>([]);
  useEffect(() => {
    const getList = async () => {
      if (signer) {
        let address = await signer.getAddress();
        const playlists = await fetchCollectorPlaylists(address);
        console.log(playlists);
      }
    };

    getList();
  }, [signer]);

  const savePlaylist = async () => {
    if (signer) {
      const playlist = {
        title: "fire playlist",
        trackIds: tracks,
      };

      const res = await createPlaylist(playlist, signer);
      console.log(res);
    }
  };
  return { tracks, setTracks, savePlaylist };
};
