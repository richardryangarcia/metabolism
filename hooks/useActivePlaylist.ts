import { createPlaylist, fetchCollectorPlaylists } from "@spinamp/spinamp-sdk";
import { useEffect, useState } from "react";
import { useSigner } from "wagmi";

interface IPlaylist {
  id: string;
  title: string;
  trackIds: string[];
  collector?: string; // address of user who created playlist
}

export const useActivePlaylist = () => {
  const { data: signer, isError, isLoading } = useSigner();
  const [tracks, setTracks] = useState<any>([]);
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
      const playlist = { title: "", trackIds: tracks };
      const res = await createPlaylist(playlist, signer);
    }
  };
  return { tracks, setTracks, savePlaylist };
};
