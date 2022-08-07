import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type UpdatePlayListNameProps = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setShowEdit: () => void;
};
export const UpdatePlayListName = ({
  title,
  setTitle,
  setShowEdit,
}: UpdatePlayListNameProps) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowEdit();
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <form
      className="w-full flex flex-row justify-between items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="border border-slate-200 outline-none focus:outline-none h-10 p-2 rounded-sm"
        type="text"
        value={title}
        onChange={handleChange}
      />
      <button className="ml-8 p-2 rounded-sm shadow" type="submit">
        <Image src="/check.svg" height={15} width={15} />
      </button>
    </form>
  );
};
