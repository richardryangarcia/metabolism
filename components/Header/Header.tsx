import { Modal } from "components/Modal/Modal";
import { ConnectKitButton } from "connectkit";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  tracks: string[];
  savePlaylist: () => void;
  title: string;
  trackNames: NameMap;
  setTitle: Dispatch<SetStateAction<string>>;
  publishPlaylist: () => void;
};
export const Header = ({
  tracks,
  savePlaylist,
  title,
  trackNames,
  setTitle,
  publishPlaylist,
}: HeaderProps) => {
  return (
    <>
      <div className="border border-bottom-slate-50 h-14 w-full flex justify-between items-center pr-2 pl-2 text-purple-700 font-mono">
        <div>
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
           */}
          Zora FM
        </div>
        <div className="flex flex-row">
          <Modal
            tracks={tracks}
            savePlaylist={savePlaylist}
            title={title}
            trackNames={trackNames}
            setTitle={setTitle}
            publishPlaylist={publishPlaylist}
          />

          <ConnectKitButton />
        </div>
      </div>
    </>
  );
};
