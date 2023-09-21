import { XCircleIcon } from "@heroicons/react/24/outline";

const Modal = ({ onOpen, title, chidren }) => {

    if (!open) return null;

    return (
        <>
            <div
                id="defaultModal"
                onClick={() => onOpen(false)}
                tabindex="-1"
                aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* header */}
                        <div className="modal-header flex justify-between w-full">
                            <h2>{title}</h2>
                            <button type="button" onClick={() => onOpen(false)}>
                                <XCircleIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Modal;