"use client";

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
export const Modal: React.FC<propTypes> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed top-0 flex justify-center item-center transition-colors  w-screen z-10 
    ${open ? "visible bg-black/20" : "invisible"} `}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-2 transition-all max-w-xl px-4
            ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`absolute top-2 right-2 py-1 px-2 border
                     border-neutral-200 rounded-md text-gay-400 bg-white
                      hover:bg-gray-50 hover:text-gray-600`}
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
