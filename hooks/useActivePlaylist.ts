import {
  createPlaylist,
  fetchCollectorPlaylists,
  fetchPlaylistById,
} from "@spinamp/spinamp-sdk";
import { useEffect, useState } from "react";
import { useSigner } from "wagmi";

export const useActivePlaylist = () => {
  const { data: signer } = useSigner();
  const [title, setTitle] = useState<string>("New Playlist");
  const [tracks, setTracks] = useState<string[]>([]);
  const [trackNames, setTrackNames] = useState<NameMap>({});
  useEffect(() => {
    const getList = async () => {
      if (signer) {
        let address = await signer.getAddress();
        // const playlists = await fetchCollectorPlaylists(address);
        const playlists = await fetchPlaylistById("UoFe4htiw5PXkA9SuMD7");
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
  return {
    tracks,
    setTracks,
    savePlaylist,
    title,
    setTitle,
    trackNames,
    setTrackNames,
  };
};
