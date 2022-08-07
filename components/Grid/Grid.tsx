import { useMemo, useState } from "react";
import { GridItem } from "./GridItem";

type GridProps = {
  tokens: Token[];
  tracks: string[];
  updateList: (track: string, name: string) => void;
};

type TMap = {
  [key: string]: boolean;
};

export const Grid = ({ tokens, tracks, updateList }: GridProps) => {
  const [trackMap, setTrackMap] = useState<TMap>({});
  useMemo(() => {
    let tmap: TMap = {};
    tracks.forEach((track: string) => {
      tmap[track] = true;
    });
    setTrackMap(tmap);
  }, [tracks]);
  return (
    <>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tokens.map((token: Token) => {
          const { address, id } = token;
          return (
            <GridItem
              token={token}
              inPlaylist={trackMap[`ethereum/${address}/${id}`.toLowerCase()]}
              updateList={updateList}
            />
          );
        })}
      </div>
    </>
  );
};
