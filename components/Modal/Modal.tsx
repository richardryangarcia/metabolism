import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { UpdatePlayListName } from "components/Forms/UpdatePlayListName";

type ModalProps = {
  tracks: string[];
  savePlaylist: () => void;
  title: string;
  trackNames: NameMap;
  setTitle: Dispatch<SetStateAction<string>>;
};

export const Modal = ({
  savePlaylist,
  title,
  trackNames,
  setTitle,
}: ModalProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);

  const handleSave = async () => {
    await savePlaylist();
    setShowModal(false);
  };
  const handleClose = () => {
    setShowEdit(false);
    setShowModal(false);
  };
  return (
    <>
      <button
        className=" shadow hover:shadow-lg outline-none focus:outline-none mr-4 pr-2 pl-2 pt-1 rounded-sm ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <Image src="/pl.svg" height={30} width={30} />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  {showEdit ? (
                    <UpdatePlayListName
                      title={title}
                      setTitle={setTitle}
                      setShowEdit={() => setShowEdit(false)}
                    />
                  ) : (
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="text-3xl font-semibold">{title}</div>
                      <div onClick={() => setShowEdit(!showEdit)}>
                        <Image src="/edit.svg" height={20} width={20} />
                      </div>
                    </div>
                  )}

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleClose}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col">
                    {Object.keys(trackNames).map((id: string) => {
                      return (
                        <div className="text-sm pb-4" id={id}>
                          {trackNames[id]}
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
