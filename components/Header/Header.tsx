import { ConnectKitButton } from "connectkit";
import Image from "next/image";
export const Header = () => {
  return (
    <>
      <div className="border border-bottom-slate-50 h-14 w-full flex justify-between items-center pr-2 pl-2">
        <div>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
        <div className="flex flex-row">
          <button className="mr-4 pt-2">
            <Image src="/pl.svg" height={30} width={30} />
          </button>

          <ConnectKitButton />
        </div>
      </div>
    </>
  );
};
