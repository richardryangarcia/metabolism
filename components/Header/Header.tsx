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
};
export const Header = ({
  tracks,
  savePlaylist,
  title,
  trackNames,
  setTitle,
}: HeaderProps) => {
  return (
    <>
      <div className="border border-bottom-slate-50 h-14 w-full flex justify-between items-center pr-2 pl-2">
        <div>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
        <div className="flex flex-row">
          <Modal
            tracks={tracks}
            savePlaylist={savePlaylist}
            title={title}
            trackNames={trackNames}
            setTitle={setTitle}
          />

          <ConnectKitButton />
        </div>
      </div>
    </>
  );
};
