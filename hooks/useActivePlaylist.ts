import { createPlaylist, fetchCollectorPlaylists } from "@spinamp/spinamp-sdk";
import { getToken } from "gql";
import { useEffect, useState } from "react";
import { useSigner } from "wagmi";
import factoryAbi from "contracts/abis/playlistFactory";
import factoryAddress from "contracts/addresses/playlistFactory";
import { ethers } from "ethers";

export const useActivePlaylist = () => {
  const { data: signer } = useSigner();
  const [title, setTitle] = useState<string>("New Playlist");
  const [tracks, setTracks] = useState<string[]>([]);
  const [trackNames, setTrackNames] = useState<NameMap>({});

  useEffect(() => {
    const getList = async () => {
      if (signer) {
        let address = await signer.getAddress();
        const playlists = await fetchCollectorPlaylists(address);
        if (playlists?.[0]?.title) {
          setTitle(playlists?.[0]?.title);
        }

        if (playlists?.[0]?.trackIds) {
          let newTracks = [];
          let newNames: NameMap = {};

          for await (const track of playlists?.[0]?.trackIds) {
            const parts = track.split("/");
            const res = await getToken(parts[1], parts[2]);
            const name = res?.token?.token?.metadata?.name;
            newTracks.push(track);
            newNames[track] = name;
          }

          setTracks([...newTracks]);
          setTrackNames({ ...newNames });
        }
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

  const publishPlaylist = async () => {
    if (signer && tracks?.length > 0) {
      const uris = [];
      for await (const track of tracks) {
        const parts = track.split("/");
        const res = await getToken(parts[1], parts[2]);
        uris.push(res?.token?.token?.tokenUrl);
      }

      // Create an instance of a Contract Factory
      let factory = new ethers.Contract(factoryAddress, factoryAbi, signer);
      const tx = await factory.createClone(title, "ZORAFM", uris);
      await tx.wait(1);
      console.log("published playlist!");
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
    publishPlaylist,
  };
};
