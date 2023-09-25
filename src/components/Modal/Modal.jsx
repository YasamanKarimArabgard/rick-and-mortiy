import { XCircleIcon } from "@heroicons/react/24/outline";

const Modal = ({ setModalOpen, children, modalOpen, favoriteItem }) => {

    if (!modalOpen) return null;

    return (
        <>
            <div
                id="defaultModal"
                onClick={() => setModalOpen(false)}
                tabIndex="-1"
                className="backdrop-modal fixed top-0 left-0 right-0 z-50 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full min-h-screen bg-slate-400 bg-opacity-10 backdrop-blur-sm">
                <div className="modal-conainer relative w-full max-w-2xl h-full max-h-full flex justify-center items-center m-auto">
                    <div className="main-modal relative rounded-lg shadow-md bg-slate-600 w-4/5 lg:w-2/3 max-h-96 h-fit p-2 overflow-hidden">
                        {/* header */}
                        <div className="modal-header flex justify-between w-full py-2">
                            <h2 className="text-slate-400 font-bold text-md">List of favourite items :</h2>
                            <button onClick={() => setModalOpen(false)}>
                                <XCircleIcon className="w-7 h-7 text-red-500" />
                            </button>
                        </div>
                        {/* body */}
                        <div className={`flex flex-col gap-y-1 max-h-80 h-fit ${favoriteItem.length === 0 || favoriteItem.length < 6 ? '' : 'overflow-y-scroll '}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;