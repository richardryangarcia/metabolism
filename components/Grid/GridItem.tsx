import Image from "next/image";

type GridItemProps = {
  token: Token;
};

export const GridItem = ({ token }: GridItemProps) => {
  const { metadata, address } = token;
  const { name, image } = metadata || {};
  const formattedUri = image?.replace(
    "ipfs://",
    "https://metabolism.mypinata.cloud/ipfs/"
  );
  const fName = name?.split(" - ");
  const platform = (address: string) => {
    return address === "0x2b5426a5b98a3e366230eba9f95a24f09ae4a584"
      ? "Mint Songs"
      : address === "0x0bc2a24ce568dad89691116d5b34deb6c203f342"
      ? "Catalog"
      : "Sound";
  };
  return (
    <div className="border border-slate-50 w-full h-80 flex flex-col rounded-sm ">
      <Image
        src={formattedUri}
        height={250}
        width={250}
        className="w-full rounded-sm"
      />
      <div className="border h-2/5 w-full pt-8 pl-2">
        <div className="flex flex-col">
          <div className="text-xs pt-4">{fName?.[1]}</div>
          <div className="text-xs text-gray-400">
            {fName?.[0]} on {platform(address)}
          </div>
        </div>
      </div>
    </div>
  );
};
