import Image from "next/image";
export const Footer = () => {
  return (
    <>
      <div className="border border-red-700 h-20 w-full flex justify-center items-center pr-2 pl-2">
        Powered by{" "}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </div>
    </>
  );
};
