import { ConnectKitButton } from "connectkit";
import Image from "next/image";
export const Header = () => {
  return (
    <>
      <div className="border border-red-700 h-14 w-full flex justify-between items-center pr-2 pl-2">
        <div>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
        <div>
          <ConnectKitButton />
        </div>
      </div>
    </>
  );
};
