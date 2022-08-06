import { useEffect } from "react";
import Image from "next/image";

type GridItemProps = {
  token: Token;
};

export const GridItem = ({ token }: GridItemProps) => {
  return (
    <div className="border border-red-700 w-full h-80 flex flex-col">
      <div className="box-border border border-blue-500 h-3/5 w-full bg-[url('/vercel.svg')]">
        hello
      </div>
      {/* <div className="border border-blue-500 h-60 w-60 ">hello</div> */}
    </div>
  );
};
